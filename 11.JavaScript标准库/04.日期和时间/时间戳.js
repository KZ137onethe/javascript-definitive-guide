import { performance }  from 'perf_hooks'
// 将日期转化为毫秒数（时间戳）, 获取其内部值getTime(), 设置其内部值 setTime()
let d = new Date();
console.log("当前毫秒数：", d.getTime());
d.setTime(d.getTime() + 60000)
console.log("当前时间往后一分钟：", new Date(d.getTime()))


// 当前时间戳
console.log("当前时间戳: ", Date.now()) // 这里会有执行时间的差异

// 高精度时间戳 => 会返回时间戳的小数部分
console.log("高精度时间戳: ", performance.now()) // Node 进程启动后经过的时间戳


