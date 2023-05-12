// for/in循环的in后面可以是任意对象，也可以是求值为对象的表达式

let a = {"aa": 11, "bb": 22, "cc": 33}

for(let key in a){
  console.log(a[key])
}

// for/in 之间的操作数可能是任意表达式，只要它求值为赋值表达式的左值就行
let o = {x: 1, y: 2, z: 3}
let b = [], i = 0;
for(b[i++] in o); // 空循环体
console.log(b)
