// 数组是特殊的对象

let a = ['world']
let value = a[0]
a[1] = 3.14
let i = 2;
a[i] = 3;
a[i + 1] = 'hello'
a[a[i]] = a[0]

// 数组会按需更新length属性
console.log(a.length)

a[-1.23] = true; // 会创建一个属性
a["1000"] = 0; // 这会是数组的第1001个元素
a[1.000] = 1; // 数组索引1

console.log(a);
 