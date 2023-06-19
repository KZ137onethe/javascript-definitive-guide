
// 示例：实现Web组件

class SearchBox extends HTMLElement{
  constructor(){
    super();
    // 创建一个影子DOM树，并将其附加到这个元素
    // 设置为this.shadowRoot的值
    this.attachShadow({mode: 'open'})

    // 克隆模板，模板定义了这个自定义组件的后代和样式，然后把内容追加到影子根节点
    this.shadowRoot.append(SearchBox.template.content.cloneNode(true))

    // 取得对影子DOM中重要的元素引用
    this.input = this.shadowRoot.querySelector('#input');
    let leftSlot = this.shadowRoot.querySelector("slot[name='left']")
    let rightSlot = this.shadowRoot.querySelector("slot[name='right']")

    // 当内部输入字段获得或者失去焦点时，设置或移除focused属性，以便样式表在整个组件上显示或者隐藏人造的一个焦点环
    this.input.onfocus = () => { this.setAttribute('focused', '') }
    this.input.onblur = () => { this.removeAttribute('focused') }

    // 如果用户点击了放大镜，则触发 "search" 事件。同样，在输入字发生了“change”事件也会触发这个事件
    // change 事件不会冒泡在影子DOM外面
    leftSlot.onclick = this.input.onchange = (event) => {
      event.stopPropagation();
      if(this.disabled) return
      this.dispatchEvent(new CustomEvent("search", {
        detail: this.input.value
      }))
    }

    // 如果用户点击了 "X", 则触发了 "clear" 事件，如果事件处理程序没有调用 preventDefault(), 则清除输入
    rightSlot.onclick = (event) => {
      event.stopPropagation();
      if(this.disabled) return
      let e = new CustomEvent("clear", { cancelable: true })
      this.dispatchEvent(e);
      if(!e.defaultPrevented){
        this.input.value = '' // 清除输入字段
      }
    }
  }

  // 有些属性被设置或改变时，我们需要内部 <input> 元素对应的值。这个生命期方法与下面代码的静态属性 observedAttributes 相互配合，实现回调
  attributeChangedCallback(name, oldValue, newValue) {
    if(name === 'disabled'){
      this.input.disabled = newValue !== null
    }else if(name === 'placeholder'){
      this.input.placeholder = newValue
    }else if(name === 'size'){
      this.input.size = newValue
    }else if(name === 'value'){
      this.input.value = newValue
    }
  }

  // 最后我们支持的html属性定义相应的获取方法和设置方法，获取方法简单地返回属性的值（或存在与否），而设置方法也只是设置属性的值（或存在与否）。当某个设置方法修改了一个属性时，浏览器会自动调用上面的 attributeChangeCallback 回调
  get placeholder() { return this.getAttribute('placeholder') }
  get size() { return this.getAttribute('size') }
  get value() { return this.getAttribute('value') }
  get disabled() { return this.hasAttribute('disabled') }
  get hidden() { return this.hasAttribute('hidden') }

  set placeholder(value) { this.setAttribute('placeholder', value) }
  set size(value) { this.setAttribute('size', value) }
  set value(text) { this.setAttribute('value', text) }
  set disabled(value){
    if(value) this.setAttribute("disabled", "")
    else this.removeAttribute("disabled")
  }
  set hidden(value){
    if(value) this.setAttribute("hidden", "")
    else this.removeAttribute("hidden")
  }
}

// 设置静态属性，对attributeChangeCallback 方法是必需的
// 只有在这个数组中列出的属性名才会触发对该方法的调用
SearchBox.observedAttributes = ['disabled', 'placeholder', 'size', 'value']

SearchBox.template = document.createElement("template")
// 通过解析HTML字符串初始化模板，不过要注意，当实例化一个SearchBox时，我们可以克隆这个模板中的节点，不需要再次解析HTML
SearchBox.template.innerHTML = `
  <style>
    /**
     * 这里的 :host 选择符引用的是阳光DOM中的<search-box>元素
     * 这些样式是默认的，<search-box> 的使用者可以通过阳光DOM中的样式来覆盖这些样式
     * /
    :host{
      display: inline-block;
      border: 1px solid black;
      border-radius: 5px;
      padding: 4px 6px;
    }

    :host([hidden]){
      display: none;
    }

    :host([disabled]){
      opacity: 0.6;
    }

    :host([focused]){
      box-shadow: 0 0 2px 2px #6AE;
    }

    input{
      border-width: 0;
      outline: none;
      font: inherit;
      background: inherit;
    }

    slot{
      cursor: default;
      user-select: none;
    }
  </style>
  <div>
    <slot name="left">\u{1f50d}</slot> <!--  放大镜 -->
    <input type="text" id="input" /> <!--  实际的输入元素 -->
    <slot name="right">\u{2573}</slot> <!--  X -->
  </div>
  `

// 最后，我们调用customElement.define() 将SearchBox 元素
// 注册为 <search-box> 标签的实现。自定义元素的标签名中必须包含一个连字符
customElements.define("search-box", SearchBox)