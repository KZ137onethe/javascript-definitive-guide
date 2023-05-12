// 所有的对象方法 都从 Object.prototype 继承属性

/** toString()
 * 默认的toString()方法不能提供太多的信息
 */
let s = {x: 1, y: 1}.toString() // [object object]

// 重新定义自己的toString()
let point1 = {
  x: 1, 
  y: 2,
  toString: function() { return `(${this.x} ${this.y})`}
}
console.log(String(point1)); // (1 2)

/** toLocaleString() 方法
 * ....
 */

let point2 = {
  x: 1000,
  y: 2000,
  toString: function() { return `(${this.x} ${this.y})`},
  toLocaleString: function(){
    return `(${this.x.toLocaleString()} ${this.y.toLocaleString()})`
  }
}
console.log(point2.toString(), point2.toLocaleString()); // (1000 2000) 和 (1,000 2,000)

/** valueOf()
 * 把对象转换为某些非字符串原始值（通常是数值）时调用
 */

let point3 = {
  x: 3,
  y: 4,
  valueOf: function() { return Math.hypot(this.x, this.y) }
}
console.log(Number(point3));
console.log(point3 > 4, point3 > 5, point3 < 6);

/** toJSON()
 * Object.prototype 从未定义 toJSON() 方法，但是JSON.stringify()方法会要从序列化的对象上寻找toJSON()方法
 */

let point4 = {
  x: 1, 
  y: 2,
  toString: function() { return `(${this.x} ${this.y})`},
  toJSON: function() { return this.toString() }
}

console.log(JSON.stringify([point4]));