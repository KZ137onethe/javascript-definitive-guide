function loggingProxy(o, objname){
  const handlers = {
    get(target, property, receiver){
      // 打印 get 操作
      console.log(`Handler get(${objname}, ${property.toString()})`)

      // 使用反射API获取属性值
      let value = Reflect.get(target, property, receiver)

      // 如果属性是目标的自有属性，而且值为对象或函数，则返回这个值的代理
      if(Reflect.ownKeys(target).includes(property) && (typeof value === 'object' || typeof value === 'function')){
        return loggingProxy(value, `${objname}.${property.toString()}`)
      }

      // 否则原封不动地返回值
      return value
    },
    set(target, prop, value, receiver){
      console.log(`Handler set(${objname}, ${prop.toString()}, ${value})`)
      return Reflect.set(target, prop, value, receiver)
    },
    apply(target, receiver, args){
      console.log(`Handler ${objname}(${args})`)
      return Reflect.apply(target, receiver, args)
    },
    construct(target, args, receiver){
      console.log(`Handler ${objname}(${args})`)
      return Reflect.construct(target, args, receiver)
    }
  };

  // 剩下的处理器可以自动生成
  Reflect.ownKeys(Reflect).forEach(handlerName => {
    if(!(handlerName in handlers)){
      handlers[handlerName] = function(target, ...args){
        // 打印操作日志
        console.log(`Handler ${handlerName}(${objname}, ${args})`)
        // 委托操作
        return Reflect[handlerName](target, ...args)
      }
    }
  })

  return new Proxy(o, handlers)
}

// 定义一个数据数组和一个带有函数属性的对象
let data = [10, 20]
let methods = { square: x => x*x }

let proxyData = loggingProxy(data, "data")
let proxyMethods = loggingProxy(methods, "methods")

console.log(data.map(methods.square))
// 首先，先看看日志代理数组
// proxyData.map(methods.square)
// 接着再试试代理方法对象
// data.map(proxyMethods.square)

// 最后，我们再通过日志代理来了解一下迭代协议
for(let x of proxyData) console.log("Datum", x)

