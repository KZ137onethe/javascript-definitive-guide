// 尝试删除去操作数指定的对象属性和数组元素

let o = {x: 1, y: 2};
delete o.x; // 删除对象的一个属性，返回 true
typeof o.x; // undefined
delete o.x; // 删除不存在的属性，返回 true
delete 1; // 毫无意义，但是返回 true
delete o; // 不可删除变量，返回 false
delete Object.prototype;// 不可删除属性，返回 false