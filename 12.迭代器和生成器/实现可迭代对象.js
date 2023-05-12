// 可迭代的数值Range类
class Range{
  constructor(from, to){
    this.from = from
    this.to = to
  }

  has(x){ return typeof x === 'number' && this.from <= x && x <= this.to}
  toString(){ return `{ x | ${this.from} <= x <= ${this.to}}`}
  [Symbol.iterator](){
    let next = Math.ceil(this.from);
    let last = this.to;
    return {
      next(){
        return (next <= last) ? {value: next++} : {done: true}
      },
      // 方便起见，自身也可迭代
      [Symbol.iterator](){ return this }
    }
  }
}

for(let x of new Range(1, 10)){
  console.log(x)
}

console.log([...new Range(-2, 2)])

// 定义返回可迭代值的函数

// => 迭代的结果是对传入的可迭代对象的每个值应用f()的结果
function map(iterable, f){
  let iterator = iterable[Symbol.iterator]();
  return {
    [Symbol.iterator]() { return this},
    next(){
      let v = iterator.next();
      if(v.done){
        return v;
      }else{
        return { value: f(v.value)}
      }
    }
  }
}

console.log([...map(new Range(1, 4), x => x*x)])

// 只迭代 predicate 返回 true 的 函数
function filter(iterable, predicate){
  let iterator = iterable[Symbol.iterator]()
  return {
    [Symbol.iterator](){ return this },
    next(){
      for(;;){
        let v = iterator.next();
        if(v.done || predicate(v.value)){
          return v;
        }
      }
    }
  }
}

console.log([...filter(new Range(1, 10), x => x % 2 === 0)])

function words(s){
  let r = /\s+|$/g;
  r.lastIndex = s.match(/[^ ]/).index;
  return {
    [Symbol.iterator](){
      return this
    },
    next(){
      let start = r.lastIndex;
      if(start < s.length){
        let match = r.exec(s);
        if(match){
          return { value: s.substring(start, match.index) }
        }
      }
      return { done: true }
    }
  }
}

console.log([...words(" abc def ghi! ")])