
// 对象默认的内置方法 是不可枚举的，但你代码中添加给对象的属性默认是可枚举的

let o = { x: 1, y: 2, z: 3}
o.propertyIsEnumerable("toString") // false, toString不可枚举
for(let key in o){
  console.log(key);
}

// 防止 for/in 枚举继承属性
for(let key in o){
  if(!o.hasOwnProperty(key)) continue
}

for(let key in o){
  if(typeof o[key] === "function") continue
}

// 其他方法：
// Object.keys()
// Object.getOwnPropertyNames()
// Object.getOwnPropertySymbols()
// Reflect.ownKeys()