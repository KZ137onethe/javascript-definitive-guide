let triangleCanvas = document.querySelector("#triangle")
let cTriangle = triangleCanvas.getContext("2d")

cTriangle.beginPath();
cTriangle.moveTo(100, 100)
cTriangle.lineTo(200, 200)
cTriangle.lineTo(100, 200)
cTriangle.fill(); // 填充
cTriangle.stroke(); // 描绘三角形的两条边