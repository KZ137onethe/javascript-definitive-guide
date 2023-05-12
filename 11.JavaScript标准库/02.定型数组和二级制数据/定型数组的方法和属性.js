// ? 定型数组的方法和属性
// set方法用于一次性设置定型数组的多个元素
let bytes = new Uint8Array(1024) // 1K 缓冲区
let pattern = new Uint8Array([0, 1, 2, 3]) // 4字节的数据
// console.log('bytes:', bytes, 'pattern:', pattern);
bytes.set(pattern)  // 把它们复制到另一个字节数组的开头
bytes.set(pattern, 4) // 使用不同的偏移量再复制一次
bytes.set([0, 1, 2, 3], 8) // 或者直接从一个常规数组复制值, 后面的'8'同样是偏移量

// subarray 方法，调用它的定型数组的一部分
// ! 与slice的区别: subarray 反应定型数组的一个视图（即定型数组的元素改变，如果用subarray 方法，调用它的定型数组的一部分在这些定型数组的元素改变之内，则定型数组也会改变），slice 返回数组的一个切片（被切片的数组改变，slice的切片数组不会改变）
let ints = new Int16Array([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])
let last3 = ints.subarray(ints.length - 3, ints.length) // 其中的最后3个
console.log('last3[0]:', last3[0], 'last3:', last3);

ints[9] = -1
console.log(last3[2]); // 被改变

// 与底层缓冲区相关的方法和属性
last3.buffer // 定型数组的ArrayBuffer对象
last3.buffer === ints.buffer // => true, 都是同一个缓冲区的原因
last3.byteOffset // => 14: 这个视图从缓冲区的字节14开始 2*7
last3.byteLength // => 6: 这个视图长度为6字节
last3.buffer.byteLength // => 20: 但底层缓冲区长度为20

// 对于任何定型数组a，以下不变式都成立：
a.length * a.BYTES_PER_ELEMENT === a.byteLength // true

// 可以通过ArrayBuffer()构造函数来创建ArrayBuffer，然后再使用这个缓冲区来创建定型数组。下面是初始化一个定型数组
let bytes2 = new Uint8Array(1024) // 1024个字节
let ints = new Uint32Array(bytes2) // 或者256个整数
let floats = new BigUint64Array(ints) // 或者是一个128个双精度的浮点数




