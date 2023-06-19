/**
 * 定义一个n边的普通多边形，以（x, y）为中心，r为半径
 * 顶点沿图形周长间隔相同的距离
 * 第一个顶点放在正上方，或者放在指定的角度上
 * 顺时针旋转，除非最后一个参数为true
 */
function polygon(c, n, x, y, r, angle = 0, counterclockwise = false){
  c.moveTo(x + r*Math.sin(angle), y - r*Math.cos(angle));

  let delta = 2 * Math.PI /n; // 顶点间的角度距离
  for(let i = 1; i < n; i++){
    angle += counterclockwise ? -delta : delta;
    c.lineTo(x + r*Math.sin(angle), y - r*Math.cos(angle));
  }
  c.closePath(); // 把最后一个顶点连接到第一个顶点
}

// 假设只有一个画布，获得其上下文对象以便画图
let c = document.querySelector("canvas#graphics").getContext("2d");

// 开始一段新路径并添加多边形子路径
c.beginPath();
polygon(c, 3, 50, 70, 50) // 三角形
polygon(c, 4, 150, 60, 50, Math.PI / 4) // 正方形
polygon(c, 5, 255, 55, 50) // 五边形
polygon(c, 6, 365, 53, 50, Math.PI / 6); // 六边形
polygon(c, 4, 365, 53, 20, Math.PI / 4, true) // 六边形中再画一个小正方形

// 设置一些属性来控制外观
c.fillStyle = "#ccc";
c.strokeStyle = "#008";
c.lineWidth = 5;

// 现在通过调用来绘制所有多边形
c.fill();
c.stroke();