
// 常用的写法
class Buffer{
  constructor(){
    this.size = 0;
    this.capacity = 4096;
    this.buffer = new Uint8Array(this.capacity)
  }
}

// 实验性写法
class Buffer1{
  // 私有字段
  #size = 0;
  // 公用字段
  capacity = 4096;
  buffer = new Uint8Array(this.capacity);
  // 静态字段
  static integerRangePattern = /^\((\d+)\.\.(\d+)\)$/
  // 获取方法
  get size() {return this.#size}
}

// => 示例：复数类
class Complex{
  #r = 0;
  #i = 0;
  constructor(real, imaginary){
    this.r = real;
    this.i = imaginary;
  }
  plus(that){
    return new Complex(this.r + that.r, this.i + that.i)
  }
  times(that){
    return new Complex(this.r * that.r - this.i * that.i, this.r * that.r + this.i * that.i)
  }
  static sum(c, d){
    return c.plus(d)
  }
  static product(c, d){
    return c.times(d)
  }
  get real() {return this.r}
  get imaginary() {return this.i}
  get magnitude() {return Math.hypot(this.r, this.i)}
  toString() {
    return `{${this.r}, ${this.i}}`
  }
  equals(that){
    return that instanceof Complex && this.r === that.r && this.i === that.i
  }
  static ZERO = new Complex(0, 0)
}

let c = new Complex(2, 3)
let d = new Complex(3, 2)
console.log(c.plus(d).toString(), c.magnitude, Complex.product(c, d));