class Range{
  constructor(from, to){
    this.from = from;
    this.to = to;
  }
  includes(x){
    return this.from <= x &&  x <= this.to
  }
  *[Symbol.iterator](){
    for(let x = Math.ceil(this.from); x <= this.to; x++) yield x;
  }
  toString(){
    return "(" + this.from + "..." + this.to + ")"
  }
}

let r = new Range(1, 3)
r.includes(2)
r.toString();
[...r];

// 类声明 的 语句 和 表达式 形式

// => 表达式(但一般不常用)
let Square = class { constructor(x){ this.area = x * x } }
new Square(3).area

// ! class 声明体类所有代码处于 严格模式
// ! 类声明不会被提升
// ! 类中声明方法（原型），不能使用箭头函数

export{
  Range
}
