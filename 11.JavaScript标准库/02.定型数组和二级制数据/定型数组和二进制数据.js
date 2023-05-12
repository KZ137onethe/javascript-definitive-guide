// ? 定型数组严格上并不是数组 （Array.isArray() 对它们会返回false）

let bytes = new Uint8Array(1024) // 1024 字节
let matrix = new Float64Array(9) // 3 x 3矩阵
let point = new Int16Array(3)
let rgba = new Uint8ClampedArray(4)
let sudoku = new Int8Array(81)

let white = Uint8ClampedArray.of(255, 255, 255, 0) // RGBA 不透明白色
let ints = Uint32Array.from(white) // 同样4个数值，但变成了整数

Uint8Array.of(1.23, 2.99, 45000) // new Uint8Array([1, 2, 200])

console.log(bytes, matrix, point, rgba, sudoku);
console.log(white, ints);


// 实例
// => 返回小于n的最大素数
function sieve(n){
  let a = new Uint8Array(n+1);
  let max = Math.floor(Math.sqrt(n))
  let p = 2;
  while(p <= max){
    for(let i = 2*p; i <= n; i++){
      a[i] = i;
    }
    while(a[++p]){} // 空循环
  }
  while(a[n]) n--;
  return n;
}

let number10 = sieve(10000)
console.log(number10);