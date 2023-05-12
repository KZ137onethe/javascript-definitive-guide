// ? 能组合就不继承(这里的'继承'指的是创建子类来继承父类)
// 在你的类中创建另一个类的实例，并在需要的时候委托该实例去做你希望的事反而更方便 => 组合

// => 通过委托实现的类似Set的类
class Histogram{
  constructor(){
    this.map = new Map();
  }

  count(key) {
    return this.map.get(key) || 0
  }

  has(key) {
    return this.count(key) > 0
  }

  get size(){
    return this.map.size;
  }

  add(key){
    this.map.set(key, this.count(key) + 1)
  }

  delete(key){
    let count = this.count(key)
    if(key === 1){
      this.map.delete(key)
    }else if(key > 1){
      this.map.set(key, count - 1)
    }
  }

  // 迭代直方图就是返回映射中存储的值
  [Symbol.iterator]() {
    return this.map.keys()
  }

  keys(){
    return this.map.keys()
  }
  values(){
    return this.map.values()
  }
  entries(){
    return this.map.entries()
  }
}

let a = new Histogram()
a.add('30')
a.add('30')
a.add('30')
a.add('30')
console.log("a:", a,"长度:", a.size,"'30'键的记录值:", a.count('30'));