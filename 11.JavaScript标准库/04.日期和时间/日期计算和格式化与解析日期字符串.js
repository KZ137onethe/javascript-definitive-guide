// ? 可以使用 < 、<= 、>、>= 等比较操作符进行比较，也可以用一个Date对象减去另一个以确定两个日期相关的时间戳

// 涉及天数、月数、年数的计算 setDate() 、setMonth() 、setYear()
let d = new Date()
d.setMonth(d.getMonth() + 3, d.getDate() + 14) // 数值溢出也会正确工作

// ? 格式化与解析日期字符串
// => 将日期对象转化为字符串
let time = new Date(2020, 0, 1, 17, 10, 30)
console.log(time.toString()); 
console.log(time.toUTCString());
console.log(time.toISOString());
console.log(time.toLocaleString());
console.log(time.toDateString());
console.log(time.toTimeString());
console.log(time.toLocaleDateString());
console.log(time.toLocaleTimeString());
