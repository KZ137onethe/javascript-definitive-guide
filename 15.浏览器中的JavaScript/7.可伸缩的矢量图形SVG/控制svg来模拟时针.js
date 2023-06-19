(function updateClock(){
  let now = new Date();
  let sec = now.getSeconds();
  let min = now.getMinutes() + sec / 60;
  let hour = now.getHours() % 12 + min / 60;
  let minangle = min * 6; // 360 / 60 = 6
  let hourangle = hour * 30; // 360 / 12 = 30

  // 取得显示表针的SVG元素
  let minhand = document.querySelector("#clock .minutehand");
  let hourhand = document.querySelector("#clock .hourhand");

  // 设置SVG属性，围绕表盘移动表针
  minhand.setAttribute('transform', `rotate(${minangle}, 50, 50)`)
  hourhand.setAttribute('transform', `rotate(${hourangle}, 50, 50)`)

  // 10 秒钟后再次运行这个函数
  setTimeout(updateClock, 100000)
})() // 注意在这里是立即调用函数