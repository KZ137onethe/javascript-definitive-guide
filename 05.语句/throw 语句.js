
function factorial(x){
  // 如果收到参数无效，则抛出异常
  if(x < 0) throw new Error('x must not is be negative!')
  let f;
  for(f = 1 ; x > 1; f *= x, x--);
  return f
}

console.log(factorial(4))