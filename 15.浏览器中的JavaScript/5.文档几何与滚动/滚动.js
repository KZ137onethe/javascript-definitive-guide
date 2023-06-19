// 获取文档和视口的高度
let documentHeight = document.documentElement.offsetHeight;
let viewportHeight = window.innerHeight;

// 滚动到最后一“页”
// window.scrollTo(0, documentHeight - viewportHeight)

// 平滑滚动
window.scrollTo({
  left: 0,
  top: documentHeight - viewportHeight,
  behavior: 'smooth'
})