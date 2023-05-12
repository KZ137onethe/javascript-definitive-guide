// 递归生成器 => 按顺序回送它们的元素的生成器函数 => 使用ES6语法 yield*

export function* oneDightPrimes(){
  yield 2;
  yield 3;
  yield 5;
  yield 7;
}

// 不使用 yield* 时,是这种写法
function* sequence1(...iterables){
  for(let iterable of iterables){
    for(let item of iterable){
      yield item
    }
  }
}

console.log([...sequence1("abc", oneDightPrimes())])

// 使用 yield* 简化
function* sequence2(...iterables){
  for(let iterable of iterables){
    yield* iterable
  }
}

console.log([...sequence2("abc", oneDightPrimes())])