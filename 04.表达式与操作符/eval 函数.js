// eval是一个函数，但其实是一个操作符

// 全局eval

const geval = eval;
let x = "global", y = 'global';

function f(){
  let x = "local";
  eval("x += 'changed';"); // 直接调用修改局部变量
  return x;
}

function g(){
  let y = "local";
  geval("y += 'changed';") // 间接调用修改全局变量
  return y;
}

// 浏览器环境可以执行，但 node 会报错
console.log(f(), x); // localchanged global
console.log(g(), y); // local globalchanged