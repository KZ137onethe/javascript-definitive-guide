
let viewElement = {
  width,
  height
}
let documentElement = {
  width,
  height,
}
document.addEventListener('DOMContentLoaded', function(){
  // 获得视口的宽高
  viewElement.width = window.innerWidth;
  viewElement.height = window.innerHeight;

  // 获取文档的宽高
  // 方法一
  documentElement.width = document.documentElement.offsetWidth;
  documentElement.height = document.documentElement.offsetHeight;

  // 方法二
  documentElement = {
    width: document.documentElement.getBoundingClientRect().width,
    height: document.documentElement.getBoundingClientRect().height,
  }
})