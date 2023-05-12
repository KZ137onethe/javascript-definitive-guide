let a = 7;
try{
  console.log("阶乘：",f1(a));
  console.log("阶乘：",f2(a)); // error
}catch(e){
  console.log(e)
}

// 函数声明的写法
/* 在使用声明形式时，先创建好函数对象，然后在运行他们包含的代码，而且函数的定义会被提升到顶部 */
function f1(x){
  if(x <= 1){
    return 1;
  }else{
    return x * f1(x-1)
  }
}

// 函数表达式的写法
/* 函数在定义他们的表达式在被求值之前是不存在的，调用函数必须引用函数，在把函数表达式赋值给变量之前是无法引用函数的，因此不能在他们定义之前引用，而且也不能在函数表达式内部调用自身 => 递归 */
const f2 = function(x){
  if(x <= 1){
    return 1;
  }else{
    return x * f2(x-1)
  }
}

