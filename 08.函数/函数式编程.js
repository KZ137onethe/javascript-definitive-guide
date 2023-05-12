// JavaScript可以把函数作为对象来操作意味着可以在JavaScript中使用函数式编程技巧
const map = function(a, ...args){ 
  return a.map(...args)
}
const reduce = function(a, ...args){
  return a.reduce(...args)
}
const sum = (x, y) => x + y;
const square = x => x*x;

let data = [1, 1, 3, 5, 5]
// => 这里求的是标准差
let mean = reduce(data, sum) / data.length;
let deviations = map(data, x => x - mean)
let stddev = Math.sqrt(reduce(map(deviations, square), sum)) / data.length - 1;
console.log(mean, deviations, stddev);

// 高阶函数
// => 这个高阶函数返回一个新函数，新函数把参数传给f并返回f返回值的逻辑非
function not(f){
  return function(...args){
    let result = f.apply(this, args)
    return !result;
  }
}

const even = x => x % 2 === 0;
const odd = not(even)
const res1 = [0, 2, 4, 6, 8].every(even)
const res2 = [0, 2, 4, 6, 8].every(odd)
console.log(res1, res2);

// => 返回一个函数，这个函数接收一个数组并对每个元素应用f,返回每个返回值的数组
function mapper(f){
  return a => map(a, f)
}
const increment = x => x+1;
const incrementAll = mapper(increment)
console.log(incrementAll([1, 3, 5, 7, 9]));

// => 返回的函数h会把它接收的所有参数传给g, 再把g的返回值返回f, 然后返回f的返回值
function compose(f, g){
  return function(...args){
    return f.call(this, g.apply(this, args))
  }
}

console.log(compose(square, sum)(2, 3))

// 函数记忆
// => 返回f的记忆版，只适用于f的参数都有完全不同的字符串表示的情况
function memoize(f){
  const cache = new Map();
  return function(...args){
    // 创建参数的字符串版，以用作缓存键
    let key = args.length + args.join('+')
    if(cache.has(key)){
      return cache.get(key)
    }else{
      let result = f.apply(this, args)
      cache.set(key, result)
      return result;
    }
  }
}

// 返回两个整数的最大公约数
function gcd(a, b){
  if(a < b){
    [a, b] = [b, a]
  }
  while(b !== 0){
    [a, b] = [b, a%b]
  }
  return a;
}
const gcdMemo = memoize(gcd)
console.log(gcdMemo(85, 187)); // => 17

// => 递归函数记忆版
const factorial = memoize(function(n){
  return (n <= 1) ? 1 : n * factorial(n - 1)
})
factorial(5)