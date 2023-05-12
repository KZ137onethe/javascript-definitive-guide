let iterable = [99]
// 迭代器方法（没有使用惯用名称哟~） => Symbol.iterator
let iterator = iterable[Symbol.iterator]();
for(let result = iterator.next(); !result.done; result = iterator.next()){
  console.log(result.value)
}

// 迭代“部分使用”的迭代器
let list = [1, 2, 3, 4, 5];
let iter = list[Symbol.iterator]();
let header = iter.next().value;
let tail = [...iter]
console.log(header, tail);