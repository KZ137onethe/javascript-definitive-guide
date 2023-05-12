// ! Set 类和 Map 类 是有排序顺序的，它会记住元素插入和删除的顺序，而且始终按照该顺序迭代集合，但是它没有索引

// ? Set 类
let s = new Set();
let t = new Set([1, s])

// 参数不一定是数组，只要是可迭代对象就行
let m = new Set(t)
let unique = new Set('Mississippi')

unique.size // => 有多少个值，即Set的长度

// 不一定在创建的时候初始化，集合里面没有重复的元素
let n = new Set()
n.add(1)
s.size
n.add(2)
n.add(2)
n.size
n.add([1, 2, 3]) // 添加数组为Set集合，而不是添加数组元素到Set集合
n.delete(2)
// false, 没有该元素，什么也不做 => 因为 集合 是根据 严格相等来判断重复元素的，这里的 '[1, 2, 3]' 和上面的 '[1, 2, 3]' 是不同对象引用
n.delete([1, 2, 3])
console.log('n:',n);
n.clear()
s.size

// has() 方法速度特别快
let oneDigitPrimes = new Set([2, 3, 5, 7, 11])
oneDigitPrimes.has(2) // true
oneDigitPrimes.has(9) // false
oneDigitPrimes.has('5') // false

// Set 可迭代
let sum = 0
for(let p of oneDigitPrimes){
  sum += p
}
console.log(sum);

// => 将集合转化为数组
console.log([...oneDigitPrimes]);

// ? Map 类
let a = new Map()
let b = new Map([
  ['one', 1],
  ['two', 2]
])
console.log('b:', b);

// 复制
let copy = new Map(b)
let o = { x: 1, y: 2}
let c = new Map(Object.entries(o))
console.log("c:", c);

// Map 的一些方法
let d = new Map()
d.size
d.set('one', 1)
d.set('two', 2)
d.size
d.get('two')
d.get('there')
d.set('two', true)
d.has('one')
d.has(true)
d.delete('one')
d.size
d.delete('there')
console.log('d:', d);
d.clear()

// 映射按照全等性来比较键, 所以有完全相同的属性的对象和元素是不同值
let e = new Map()
e.set({}, 1)
e.set({}, 2)
e.size
e.get({}) // undefined
e.set(e, undefined)
e.has(e) // true
e.get(e) // undefined , 与 e 不是键取值一样
console.log('e:', e);

// 可迭代
let f = new Map([['x', 1], ['y', 2]])
for(let [key, value] of f){
  console.log(key, value)
}
console.log(...f.keys());
console.log(...f.values());
console.log(...f.entries());
