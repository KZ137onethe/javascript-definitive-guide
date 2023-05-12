let d = new Date("2020-01-02T13:14:15Z");

// 没有选项对象，就是基本的数值式日期格式
const time1 = Intl.DateTimeFormat('en-us').format(d)
const time2 = Intl.DateTimeFormat('fr-FR').format(d)
console.log(time1, time2);

// 周和月使用名字
let opts = { weekday: 'long', month: "long", year: 'numeric', day: "numeric"}
const time3 = Intl.DateTimeFormat("en-us", opts).format(d)
const time4 = Intl.DateTimeFormat("en-ES", opts).format(d)
console.log(time3, time4);
opts = {hour: "numeric", minute: "2-digit", timeZone: "America/New_York"}
const time5 = Intl.DateTimeFormat("fr-CA", opts).format(d)
console.log(time5);

// 使用 儒略历 和 非儒略历
/**
 * 可以在地区中添加-u-ca-后跟日期名来明确指定来使用什么日历，比如："buddhist"
 */
let option1 = { year: 'numeric', era: 'short' }
let timer1 = Intl.DateTimeFormat('en', opts).format(d)
let timer2 = Intl.DateTimeFormat('en-u-ca-hebrew', opts).format(d)
let timer3 = Intl.DateTimeFormat('en-u-ca-buddhist', opts).format(d)
let timer4 = Intl.DateTimeFormat('en-u-ca-buddhist', opts).format(d)
let timer5 = Intl.DateTimeFormat('en-u-ca-islamic', opts).format(d)
let timer6 = Intl.DateTimeFormat('en-u-ca-persian', opts).format(d)
let timer7 = Intl.DateTimeFormat('en-u-ca-indian', opts).format(d)
let timer8 = Intl.DateTimeFormat('en-u-ca-chinese', opts).format(d)
let timer9 = Intl.DateTimeFormat('en-u-ca-japanese', opts).format(d)

console.log(timer1, timer2, timer3, timer4, timer5, timer6, timer7, timer8, timer9);