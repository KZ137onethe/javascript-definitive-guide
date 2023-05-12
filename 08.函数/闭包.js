
let scope = 'global scope';
function checkScope1(){
  let scope = 'local scope';
  function f(){ return scope;}
  return f()
}

checkScope1() //  'local scope'

function checkScope2(){
  let scope = 'local scope';
  function f(){ return scope;}
  return f
}

let s = checkScope2()()
// console.log(s); // local scope

function counter(){
  let n = 0;
  // count和reset共享状态
  return{
    count: function(){ return n++; },
    reset: function(){ n = 0 }
  }
}
// 每次调用 counter() 都是互相独立的
let c = counter(), d = counter();
// console.log("c:", c.count(),c.count(),c.count());
// c.reset()
// console.log(c.count());
// console.log("d:", d.count(),d.count(),d.count());
// d.reset()
// console.log(d.count());

function addPrivateProperty(o, name, predicate){
  let value;
  o[`get${name}`] = function() {return value};
  o[`set${name}`] = function(v) {
    if(predicate && !predicate(v)){
      throw new TypeError(`set${name}: invalid value ${v}`)
    }else{
      value = v
    }
  };
}

let o = {};
addPrivateProperty(o, 'Name', x => typeof x === 'string')
o.setName('Frank')
console.log(o.getName());
o.setName(0) // 报错, TypeError

