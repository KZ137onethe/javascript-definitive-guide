
console.log("Ha Ha!")

console.debug("debug 一下！")

console.info("这是一个信息")

console.warn("警告！")

console.error("error！")

// 断言通过则不打印；断言为假性值，剩余参数会像被传给console.error()一样打印出来
console.assert(true)
console.assert(1 === 2, "Error?")

// console.clear()

// 生成表列数据输出
console.table(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)

// 像console.log()打印它的参数，此外在输出之后还会打印栈跟踪信息
console.trace([0, 1, 2, 3, 4, 5])

for(let i of new Array(1, 2, 3, 4, 5)){
  console.count("ha", i);
}

// 这个函数接收一个字符串参数，并重置针对该字符串的计数器
console.countReset(1)

// 分组（打印消息的缩进）
console.group(1)
console.group(2)
console.group(3)

console.groupEnd() // 结束缩进和分组

// 跟console.group()类似，但是默认会将打印消息折叠
console.groupCollapsed(9)
console.groupCollapsed(8)
console.groupCollapsed(7)

console.groupEnd()

// 记录时间
let haha;
console.time(haha)
console.timeLog(haha)
setTimeout(() => {
  console.timeEnd(haha)
}, 1000)


