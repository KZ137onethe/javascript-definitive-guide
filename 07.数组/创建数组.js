let a = [1, 2, 3]
let b = [,,]
let c = [1, , 3]

// 只要是可迭代的，都能用...扩展
let d = [0, ...a, 4]

// 构造函数
let e = new Array() // []
let f = new Array(10) // 长度为10的空数组
let g = new Array('a', 'c', 123, a) // 添加数组元素

// 添加数组元素
let aa = Array.of(1)
let bb = Array.of(1, 'a', 'abc')
// console.log(aa, bb);

// 将可迭代对象和类数组对象转化为数组
let str1 = "abcdefgh"
let cc = Array.from(str1)
console.log(cc);


const iterable = new Set([1, 2, 3]);
function mapFn(value) {
  return value * 2;
}
const array = Array.from(iterable, mapFn, this);
console.log(array);