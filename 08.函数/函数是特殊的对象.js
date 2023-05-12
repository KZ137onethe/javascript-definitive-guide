// 函数实际上是特殊的JavaScript对象

// length属性，name属性，prototype属性，call和apply方法

// call()和apply()
// 将o[m]替换成另外一个版本， 新版本在调用原始方法前、后会打印日志
function trace(o, m){
  let original = o[m];
  o[m] = function(...args){
    console.log(new Date(), 'Entering: ', m);
    let result = original.apply(this, args)
    console.log(new Date(), 'Entering: ', m);
    return result;
  }
}

// bind()方法
// => 比如：这里将函数绑定到对象上
function f(y){
  return this.x + y;
}
let o = { x: 1 }
let g = f.bind(o)
console.log(g(2)); // 调用g(x)会在o上调用g()
let p = { x: 10, g };
console.log(p.g(2)) // g依然绑定的是o,而非p

// => 柯里化
let sum = (x, y) => x + y;
let succ = sum.bind(null, 1);
console.log(succ(2)); // 3

function ff(y, z) {return this.x + y + z}
let gg = ff.bind({x: 1}, 2)
console.log(gg(3)); // 6

// toString()方法，多数是返回函数完整的源代码
console.log(ff.toString())

// Function 构造函数
const F = new Function('x', 'y', 'return x + y;')
console.log(F(5, 7))

let scope = 'global'
function constructFunction(){
  let scope = 'local'
  return new Function(`return scope;`);
}
console.log(constructFunction()()) // 浏览器可用，返回global(node不可用)