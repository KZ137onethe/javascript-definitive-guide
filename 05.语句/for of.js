// for of 循环专门用于可迭代对象

let data = [1, 2, 3, 4, 5, 6, 7, 8, 9], sum = 0;
for(let el of data){
  // 这里的迭代是实时的，如果在循环中data数组铺设一个值，那将永远不会迭代到下一个数组元素
  // 如：data.push(sum)
  sum += el
}

console.log(sum)

// 对象默认是不可迭代的
/**
 * 通过 Object.keys() 和 Object.values() 获取对象的 键数组 和 值数组，
 * 但是在循环中的迭代不是实时的，即在循环中对 对象进行修改 不会影响循环
 */

let o = {x: 1, y: 2, z: 3}, res = '';
for(let key of Object.keys(o)){
  res += key
  delete o.x
}

// 解构赋值 获取键和值
let a = {}
for(let [key, value] of Object.entries(o)){
  a[key] = value
}

console.log(res, o) // 'xyz' 和 {y: 2, z: 3}
console.log(a, a === o)

// 迭代字符串
let frequency = {};
for(let str of "sdhasldkqwcbqwe"){
  if(frequency[str]){
    frequency[str] += 1
  }else{
    frequency[str] = 1
  }
}
console.debug(frequency)

// 迭代 Set(集合) 和 Map(映射)

let text = "Na na na na na na ok? BatMan!";
let wordSet = new Set(text.split(" "))
let unique = []
for(let word of wordSet){
  unique.push(word)
}
console.log(unique)

// Map 迭代键/值对
let m = new Map([[1, 'one']])
for(let [key, value] of m){
  console.log(key, value)
}

// for await ....