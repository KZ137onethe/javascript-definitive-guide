

let  o = {x: 1}
// in
// in 可以区分不存在的属性 和 存在但被设置为 undefined 的属性
"x" in o // true
"y" in o // false
"toString" in o // true

/** .hasOwnProperty()
 *  用于测试对象是否有给定名字的属性。对继承的属性它返回false
 */
console.log(o.hasOwnProperty("x"));
console.log(o.hasOwnProperty("y"));
console.log(o.hasOwnProperty("toString"));

/** propertyIsEnumerable()
 * TODO: 以后补充，现在看不懂
 */
