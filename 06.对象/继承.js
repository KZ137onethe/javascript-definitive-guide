// 原型链
let o = {} // o 从Object.prototype 继承对象方法
o.x = 1;  // 现在他有了自有属性x
let p = Object.create(o)  // p 从 o 和 Object.prototype 继承属性
p.y = 2;  // 现在他有了自有属性y
let q = Object.create(p) // q 从 o 、p 、Object.prototype 继承属性
q.z = 3;  // 现在他有了自有属性z
let f = q.toString() // toString 继承自 Object.prototype
console.log(o, p, q, f);
console.log(q.x + q.y);

// 原型链上默认不允许覆盖值
let unitcircle = { r: 1 }
let c = Object.create(unitcircle)
c.x = 1, c.y = 2;
c.r = 3;
console.log(unitcircle.r); // 1