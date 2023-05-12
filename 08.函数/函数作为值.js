
// 定义自己的函数属性
uniqueInteger.count = 0;
function uniqueInteger(){
  return uniqueInteger.count++;
}

console.log(uniqueInteger(), uniqueInteger());
console.log(uniqueInteger);

// 再比如：斐波拉契数列
function factor(n){
  if(Number.isInteger(n) && n > 0){
    if(!(n in factor)){
      factor[n] = n * factor(n - 1)
    }
    return factor[n]
  }else{
    return NaN;
  }
}

factor[1] = 1 // 初始化缓存，保存最基础的值
console.log(factor(6), factor[5])

