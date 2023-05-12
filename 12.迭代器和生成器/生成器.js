// 生成器函数，生成器函数在语法上类似常规的JavaScript函数，但使用的关键字是 function*
export function* oneDightPrimes(){
  yield 2;
  yield 3;
  yield 5;
  yield 7;
}

let primes = oneDightPrimes();

// 生成器是一个可迭代对象，可以迭代回送的值
console.log(primes.next().value)
console.log(primes.next().value)
console.log(primes.next().value)
console.log(primes.next().value)

console.log([...oneDightPrimes()])

let sum = 0;
for(let prime of oneDightPrimes()) sum += prime;

const seq = function* (from, to){
  for(let i = from; i <= to; i++) yield i;
}
console.log([...seq(3, 5)])

// 定义方法时可以使用简写形式，省略function关键字。

let o = {
  x: 1, y: 2,z: 3,
  *g(){
    for(let key of Object.keys(this)){
      yield key;
    }
  }
};
console.log([...o.g()]);

// 示例：斐波拉契数
function* fibonacciSequence(){
  let x = 0, y = 1;
  for(;;){
    yield y;
    [x, y] = [y, x+y]; // 注意: 解构赋值
  }
}

function fibonacci(n){
  for(let f of fibonacciSequence()){
    if(n-- <= 0) return f;
  }
}

console.log(fibonacci(0))

// 回送指定可迭代对象的前n个元素
function* take(n, iterable){
  let it = iterable[Symbol.iterator]()
  while(n-- >= 0){
    let next = it.next()
    if(next.done) return;
    else yield next.value;
  }
}

console.log([...take(5, fibonacciSequence())])

// 拿到一个可迭代对象的数组，交替回送它们的元素
function* zip(...iterables){
  let iterators = iterables.map(i => i[Symbol.iterator]());
  let index = 0;
  while(iterators.length > 0){
    if(index >= iterators.length){
      index = 0;
    }
    let item = iterators[index].next();
    if(item.done){
      iterators.splice(index, 1)
    }
    else{
      yield item.value;
      index++;
    }
  }
}

// 交替3个可迭代的对象
console.log([...zip(oneDightPrimes(), "ab", [0])])