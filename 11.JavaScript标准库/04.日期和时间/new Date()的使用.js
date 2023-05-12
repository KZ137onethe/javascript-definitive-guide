let now = new Date();

// 使用多个参数调用的时候，Date()构造函数会使用本地计算机的时区来解释它们
let epoch = new Date(0);
let century = new Date(2100, 0, 1, 2, 3, 4, 5)


console.log('当前时间：', now);
console.log('1970年：', epoch);
console.log('未来的一个时间段', century);

// 接收与new Date()一样的参数，但是返回时间戳的 UTC 方法
let timeStamp = Date.UTC(2100, 0, 1)
console.log("一个时间戳：", timeStamp, '时间：', new Date(timeStamp));

// 传入字符串
let timeString = new Date("2100-01-01T00:00:00Z")

// 获取和设置一个Date对象的年份/月份(getMonth)/日期(xxxDate)/小时(xxxHours)/分钟(xxxMinutes)/秒(xxxSeconds)/毫秒(xxxMilliseconds)
// => 比如：获取：getFullYear()、getUTCFullYear()；设置：setFullYear()、setUTCFullYear()....
let d = new Date();
d.setFullYear(d.getFullYear() + 1)

