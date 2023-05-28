
// yield 可以是一个表达式，有值
function* smallNumbers(){
  console.log("next()第一次被调用，参数被丢弃")
  let y1 = yield 1;
  console.log("next()第二次被调用，参数是", y1)
  let y2 = yield 2;
  console.log("next()第三次被调用，参数是", y2)
  let y3 = yield 3;
  console.log("next()第四次被调用，参数是", y3)
  return 4;
}

let g = smallNumbers();
console.log("创建了生成器，代码未运行")
let n1 = g.next("a")
console.log("生成器回送", n1.value)
let n2 = g.next("b")
console.log("生成器回送", n2.value)
let n3 = g.next("c")
console.log("生成器回送", n3.value)
let n4 = g.next("d")
console.log("生成器回送", n4.value)