// 先定义 ??

// a ?? b => (a !== null && a != undefined) ? a : b

let options = { timeout: 0, title: '', verbose: false, n: null}

// ?? 操作符可以满足 || 操作符的一些缺陷
// 对一些假性值也是可以认为是有效的（第一个操作数不为"缺值" => null 和 undefined）

console.log(options.timeout ?? 1000)
console.log(options.timeout || 1000)
