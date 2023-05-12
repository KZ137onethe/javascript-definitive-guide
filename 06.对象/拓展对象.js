
/** Object.assign()
 * 第一个参数是目标对象
 * 第二个参数及后续参数是来源对象，他们按照逐一次序来覆盖目标对象
 */

let obj1 = {
  a: 1, b: 2, c: 3, d:() => console.log(100)
}
let o = {x:1}
o = Object.assign({}, obj1, o) // 复制obj1对象的所有属性
// console.log(o)
// o.d()
// console.log(o.d, obj1.d);