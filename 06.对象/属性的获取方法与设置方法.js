
let p = {
  // x和y是常规的可读写数据属性
  x: 1.0,
  y: 1.0,

  // r 是由获取方法和设置方法定义的可读写访问器属性
  get r() { return Math.hypot(this.x, this.y)},
  set r(newValue) {
    let oldValue = Math.hypot(this.x, this.y);
    let ratio = newValue / oldValue;
    this.x = ratio;
    this.y = ratio;
  },

  // theta 是只定义一个获取方法的只读访问器属性
  get theta() {
    return Math.atan2(this.y, this.x)
  }
}

console.log(p.r, p.theta);

// 可以被继承
let q = Object.create(p)
q.x = 3, q.y = 4;
console.log(q.r)
console.log(q.theta)


// example2: 这个对象保证序号严格递增
const serialnum = {
  // 这个数值属性保存下一个序号
  _n: 0,

  get next(){
    return this._n++;
  },
  set next(n){
    if(n > this._n) {
      this._n = n;
    }
    else{
      throw new Error("serial number can only be set to a larger value")
    }
  }
}
serialnum.next = 10
console.log(serialnum.next);
console.log(serialnum.next);
console.log(serialnum.next);
console.log(serialnum.next);
console.log(serialnum.next);

