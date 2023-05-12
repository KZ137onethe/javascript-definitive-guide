
// 可选形参与默认值
// 当调用函数时传入的实参少于声明的形参时，额外的形参会获得默认值，通常是undefined
function getPropertyNames(o, a){
  let b;
  if(a === undefined){
    b = []
  }else{
    b = [...a]
  }
  for(let property in o){
    b.push(property)
  }
  return b
}

let p = {x: 1}, q = {y: 2, z: 3};
let k = getPropertyNames(p);
let m = getPropertyNames(q, k);
console.log(k, m);

// 剩余形参与可变长度实参列表
// 传入的实参首先会赋值到非剩余形参，然后所有的剩余的实参（也就是剩余参数）会被保存在一个数组中赋值给剩余形参
function max(first= -Infinity, ...rest){
  let maxValue = first;
  for(let n of rest){
    if(n > maxValue){
      maxValue = n
    }
  }
  return maxValue
}

console.log(max(1, 10, 100, 2, 3, 1000, 4, 5, 6));

// 把函数实参解构为形参
// JavaScript 并不直接支持 name = value 的形式指定实参， 但是可以通过对象参数解构来模拟
function arrayCopy({from, to=from, n=from.length, fromIndex = 0, toIndex = 0}){
  let valuesToCopy = from.slice(fromIndex, fromIndex + n);
  to.splice(toIndex, 0, ...valuesToCopy);
  return to;
}

let a = [1, 2, 3, 4, 5], b = [9, 8, 7, 6, 5];
let c = arrayCopy({from: a, n: 3, to: b, toIndex: 4});
console.log(c);

// 在ES2018中，解构对象也可以使用剩余参数， 此时剩余参数的值是一个对象
// 也可以解构对象的数组，有数组的对象，以及有对象属性的对象，无论层级有多深
function vectorMultiply({x, y, z = 0, ...props}, scalar){
  return { x: x * scalar, y: y*scalar, z: z*scalar, ...props}
}
let d = vectorMultiply({x: 1, y: 2, w: -1}, 2)
console.log(d)