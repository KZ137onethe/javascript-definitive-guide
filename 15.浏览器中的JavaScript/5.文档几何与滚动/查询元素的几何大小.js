let boxElement = document.querySelector(".element > .box")
let descElement = document.querySelector("#description");

let boxElementRect
let descElementRect
boxElement && (boxElementRect = boxElement.getBoundingClientRect()) && console.log('box:',boxElementRect);
descElement && (descElementRect = descElement.getBoundingClientRect()) && console.log('desc:',descElementRect);

if(descElement){
  // 多行内联元素的每行的矩形几何大小对象
  console.log(descElement.getClientRects())
}