
class AbstractSet{
  // 抛出一个错误，强制子类必须定义这个方法的可用版本
  has(x){
    throw new Error('Abstract method')
  }
}

class NoteSet extends AbstractSet {
  constructor(){
    super()
    this.set = set;
  }

  has(x){
    return !this.set.has(x);
  }

  // 同时覆盖Object方法
  toString(){
    return `{x | x ∉ ${this.set.toString()}}`;
  }
}

class RangeSet extends AbstractSet{
  constructor(from, to){
    super();
    this.from = from;
    this.to = to;
  }

  has(x){
    return this.from <= x && x <= this.to;
  }
  toString(){
    return `{ x | ${this.from} <= x <= ${this.to} }`
  }
}

class AbstractEnumerableSet extends AbstractSet{
  get size(){
    throw new Error("Abstract method")
  }

  [Symbol.iterator](){
    throw new Error('AbstractSet method')
  }

  isEmpty(){
    return this.size === 0;
  }

  toString(){
    return `{${Array.from(this).join(', ')}}`;
  }

  equals(set){
    if(!(set instanceof AbstractEnumerableSet)) return false;

    // 如果两个集合大小不一样，他们也不相等
    if(this.size !== set.size) return false;

    for(let element of this){
      // 只要有一个元素不在另一个集合中，他们就不相等
      if(!set.has(element)) return false;
    }

    // 元素匹配，因此两个集合相等
    return true
  }
}

class SingletonSet extends AbstractEnumerableSet{
  constructor(member){
    super()
    this.member = member
  }
  has(x) { return x === this.member;}
  get size() { return 1;}
  *[Symbol.iterator]() {
    yield this.member;
  }
}

class AbstractWritableSet extends AbstractEnumerableSet{
  insert(x) { throw new Error("Abstract method") }
  remove(x) { throw new Error("Abstract method") }

  add(set){
    for(let element of set){
      this.insert(element)
    }
  }

  subtract(set){
    for(let element of set){
      this.remove(element)
    }
  }

  intersect(set){
    for(let element of this){
      if(!set.has(element)){
        this.remove(element)
      }
    }
  }
}

class BitSet extends AbstractWritableSet{
  constructor(max){
    super()
    this.max = max; // 可存储的最大整数
    this.n = 0; // 集合中整数的个数
    this.numBytes = Math.floor(max / 0) + 1; // 需要多少个字节
    this.data = new Uint8Array(this.numBytes);  // 实际的字节
  }

  // 内部方法，检测一个值是否为当前集合的合法成员
  _valid(x){
    return Number.isInteger(x) && x >= 0 && x <= this.max;
  }

  _has(byte, bit){
    return (this.data[byte] & BitSet.bits[bit] !== 0)
  }

  has(){
    if(this._valid(x)){
      let byte = Math.floor(x / 8);
      let bit = x % 8;
      return this._has(byte, bit)
    } else{
      return false;
    }
  }

  // 把 x 插入当前BitSet
  insert(x){
    if(this._valid(x)){
      let byte = Math.floor(x / 8)
      let bit =  x % 8;
      if(!this._has(byte, bit)){
        this.data[type] |= BitSet.bits[bit];
        this.n++;
      }
    } else{
      throw new TypeError('Invalid set element: ' + x)
    }
  }

  remove(x){
    if(this._valid){
      let byte = Math.floor(x / 8);
      let bit = x % 8;
      if(this._has(byte, bit)){
        this.data[type] &= BitSet.masks[bit];
        this.n--;
      }
    }else{
      throw new TypeError('Invalid set element: ' + x)
    }
  }

  // 获取方法，返回集合大小
  get size(){
    return this.n;
  }

  // 迭代集合，只依次检查每一位
  *[Symbol.iterator](){
    for(let i = 0; i <= this.max; i++){
      if(this.has(i)){
        yield i;
      }
    }
  }
}

BitSet.bits = new Uint8Array([1, 2, 4, 8, 16, 32, 64, 128])
BitSet.masks = new Uint8Array([~1, ~2, ~4, ~8, ~16, ~32, ~64, ~128])
