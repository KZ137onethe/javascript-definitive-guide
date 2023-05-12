import { Range } from "./类与构造函数.js";
import { range } from './类和原型.js'

// instanceOf
let r = new Range(1, 3)
console.log(r instanceof Range);

function Strange() {}
Strange.prototype = Range.prototype
console.log(new Strange() instanceof Range);

let s = range(1, 3)
console.log(range.methods.isPrototypeOf(s));

// constructor

let F = function() {}
console.log(F.prototype);
console.log(F.prototype.constructor === F);