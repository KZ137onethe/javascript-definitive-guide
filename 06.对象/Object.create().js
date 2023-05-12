
let o1 = Object.create({x: 1, y: 2})
let o2 = Object.create(null)
let o3 = Object.create(Object.prototype) // o3 与{} 或者 new Object() 类似

console.log(o1 instanceof Object);
console.log(o2 instanceof Object);
console.log(o3 instanceof Object);