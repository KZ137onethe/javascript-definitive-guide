// ? Object.getPrototypeof
// => 判断参数（对象）的原型
// console.log(Object.getPrototypeOf({}))
// console.log(Object.getPrototypeOf([]))
// console.log(Object.getPrototypeOf(() => {}))

// ? Object.isPrototypeOf
// => 判断一个对象是不是另一个对象的原型
let p = {x: 1}
let o = Object.create(p)
console.log(p.isPrototypeOf(o))
console.log(Object.prototype.isPrototypeOf(p), Object.prototype.isPrototypeOf(o))

// ? Object.setPrototypeOf
// => 修改对象的原型
let m = {x: 1}
let n = {y: 2}
Object.setPrototypeOf(m, n)
console.log(m.y)
let a = [1, 2, 3]
Object.setPrototypeOf(a, n)
console.log(a.join) // 不再有 join 方法
