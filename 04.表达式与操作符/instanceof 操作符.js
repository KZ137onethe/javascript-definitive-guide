// instanceof 操作符期待左侧操作数是一个对象，如果是右侧操作数（对象类的标识）的实例时返回true，否则返回false

let d = new Date()
console.log(d instanceof Date);
console.log(d instanceof Object);
console.log(d instanceof Number);

let a = [1, 2, 3]
console.log(a instanceof Array);
console.log(a instanceof Object);
console.log(a instanceof RegExp);
