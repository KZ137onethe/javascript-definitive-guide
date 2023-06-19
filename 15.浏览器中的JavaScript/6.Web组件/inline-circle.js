// <inline-circle> 自定义元素

customElements.define('inline-circle', class InlineCircle extends HTMLElement{
  connectedCallback(){
    this.style.display = 'inline-block';
    this.style.borderRadius = '50%';
    this.style.border = '1px solid black';
    this.style.transform = 'translateY(10%)';
    // 如果没有定义大小，则基于当前的字体大小来设置一个默认大小
    if(!this.style.width){
      this.style.width = '0.8rem';
      this.style.height = '0.8rem';
    }
  }

  static get observedAttributes() { return ['diameter', 'color'] }

  attributeChangedCallback(name, oldValue, newValue){
    switch(name){
      case "diameter":
        // 更新大小样式
        this.style.width = newValue;
        this.style.height = newValue;
      case "color":
        // color变化时，背景颜色跟随改变
        this.style.backgroundColor = newValue;
        break;
    }
  }

  /**
   * 定义与元素的标签属性对应的JavaScript属性，这些获取和设置方法只是获取和设置底层属性
   * 如果设置了JavaScript的属性，则修改底层的属性会触发调用 attributeChangedCallback(), 进而更新元素的样式
   */
  get diameter() { return this.getAttribute('diameter') }
  set diameter(diameter) { this.setAttribute('diameter', diameter) }
  get color() { return this.getAttribute('color') }
  set color(color) { this.setAttribute('color', color) }
})