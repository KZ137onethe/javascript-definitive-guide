// 需要了解下真性值和假性值
let o = {x: 10}

console.log(o && o.x) // 10；o为真返回o.x的值

let p = null;

console.log(p && p.x) // null, p为假返回p的值

function stop(){
  console.debug("stop!")
}

if(o === p) stop() // 只有o === p 执行stop()
(o === p) && stop()// 效果与上面一样