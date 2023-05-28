// ? Object.getOwnPropertyDescriptor
// => 获取属性或者访问器属性的特性
const example = { x: 1 }
const random = {
  get octet(){
    return Math.floor(Math.random() * 256)
  }
}

console.log(Object.getOwnPropertyDescriptor( example, "x"))
console.log(Object.getOwnPropertyDescriptor( random, "octet"))
// 对一个继承的属性或者不存在的属性返回 undefined
console.log(Object.getOwnPropertyDescriptor({}, "x"))
console.log(Object.getOwnPropertyDescriptor({}, "toString"))

// ? Object.defineProperty()
// => 设置一个具有指定特性的属性，可以调用 Object.defineProperty()
let o = {}
Object.defineProperty(o, "x", {
  value: 1,
  writable: true,
  enumerable: false,
  configurable: true,
})

console.log( o.x, Object.keys(o)) // => 1, []
Object.defineProperty(o, "x", { writable: false })
try{
  o.x = 2
}catch(e){
  console.log(e)
}
Object.defineProperty(o, "x", { value: 2 })
console.log(o.x)
// 修改为访问器属性
Object.defineProperty(o, "x", { get: function() { return  0; } })
console.log(o.x)

// ? Object.defineProperties
// => 一次性创建或修改多个属性
let p = Object.defineProperties({}, {
  x: { value: 1, writable: true, enumerable: true, configurable: true},
  y: { value: 1, writable: true, enumerable: true, configurable: true},
  r: {
    get() { return Math.sqrt(this.x * this.x + this.y * this.y)},
    enumerable: true,
    configurable: true,
  },
})
console.log(p.r)

// ! Object.assign() 只复制可枚举属性和属性值，但不复制属性的特性
let t = {
  t1: "ha",
  get t2(){
    return this.t1.split("").reverse().join("")
  }
}

const b = Object.assign({}, t)
console.log(b, t)

// => 从一个对象向另一个对象复制属性及它们的特性
Object.defineProperty(Object, "assignDescriptors", {
  // 与调用 Object.assign() 时的特性保持一致
  writable: true,
  enumerable: false,
  configurable: true,
  value: function(target, ...sources){
    for(let source of sources){
      for(let name of Object.getOwnPropertyNames(source)){
        let desc = Object.getOwnPropertyDescriptor(source, name)
        Object.defineProperty(target, name, desc)
      }

      for(let symbol of Object.getOwnPropertySymbols(source)){
        let desc = Object.getOwnPropertyDescriptor(source, symbol)
        Object.defineProperty(target, symbol, desc)
      }
    }
    return target
  }
})

let c = { c: 1, get count(){ return this.c++}}
let m = Object.assign({}, c)
let n = Object.assignDescriptors({}, c)
console.log(m.count, m.count) // 1, 1
console.log(n.count, n.count) // 2, 3
