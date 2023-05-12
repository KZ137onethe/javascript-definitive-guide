// 嵌套函数被当做方法调用时，那它的this值就是调用它的对象；嵌套函数被当做函数来调用时，则它的this是全局对象(非严格模式)或者undefined(严格模式)

let p = {
  a(){
    console.log(this === p);
  }
}
p.a()

// 第二个待实现
/* -------------------------------------------- */
let o = {
  m: function(){
    let self = this;
    console.log(this === o); // true
    f();
    function f(){
      console.log(this === o); // false
      console.log(self === o); // true, 外部的this值
    }
  }
}
o.m()