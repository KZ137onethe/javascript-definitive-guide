import { Range } from './类与构造函数.js'
// ES6之前的旧方式

// => Range 的子类 Span
function Span(start, span){
  if(span >= 0){
    this.from = start
    this.to = start + span
  }else{
    this.to = start
    this.from = start + span
  }
}

Span.prototype = Object.create(Range.prototype) // 继承 Range
Span.prototype.constructor = Span

Span.prototype.toString = function(){
  return `(${this.from}... +${this.to - this.from})`
}
// ES6及其之后的方式 => 通过extends和super创建子类

// extends => 继承父类
class EZArray extends Array{
  get first() {return this[0]}
  get last() {return this[this.length - 1]}
}
let a = new EZArray();
// a.push(1, 2, 3, 4)
// console.log(a);
// a.pop()
// console.log(a, a.first, a.last, a.length, Array.isArray(a), EZArray.isArray(a));

// super => 调用父类构造函数和方法
class TypedMap extends  Map {
  constructor(keyType, valueType, entries){
    if(entries){
      for(let [k, v] of entries){
        if(typeof k !== keyType || typeof v !== valueType){
          throw new TypeError(`Wrong type for entry [${k}, ${v}]`)
        }
      }
    }
    super(entries)
    this.keyType = keyType;
    this.valueType = valueType;
  }

  set(key, value){
    if(this.keyType && typeof key !== this.keyType){
      throw new TypeError(`${key} is not of type ${this.keyType}`)
    }
    if(this.valueType && typeof value !== this.valueType){
      throw new TypeError(`${value} is not of type ${this.valueType}`)
    }
    return super.set(key, value)
  }
}

