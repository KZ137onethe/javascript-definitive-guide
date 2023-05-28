
// 示例 => AsyncQueue 类
class AsyncQueue {
  constructor(){
    this.values = []
    this.resolvers = []
    this.closed = false
  }

  enqueue(value){
    if(this.closed){
      throw new Error("AsyncQueue closed.")
    }
    if(this.resolvers.length > 0){
      const resolve = this.resolvers.shift();
      resolve(value)
    }
    else{
      // 否则，让他去排队
      this.values.push(value)
    }
  }

  dequeue(){
    if( this.values.length > 0 ){
      const value = this.values.shift()
      return Promise.resolve(value)
    }
    else if(this.closed){
      return Promise.resolve(AsyncQueue.EOS)
    }
    else{
      return new Promise(resolve => {
        this.resolvers.push(resolve)
      })
    }
  }

  close(){
    while(this.resolvers.length > 0){
      this.resolvers.shift()(AsyncQueue.EOS)
    }
    this.closed = true;
  }

  [Symbol.asyncIterator]() { return this }

  async next(){
    const value = await this.dequeue();
    return (value === AsyncQueue.EOS) ? { value: undefined, done: true } : { value: value, done: false };
  }
}

function eventStream(elt, type){
  const q = new AsyncQueue();
  elt.addEventListener(type, e => q.enqueue(e))
  return q;
}

async function handleKeys(){
  for await (const event of eventStream(document, "keyPress")){
    console.log(event.key)
  }
}