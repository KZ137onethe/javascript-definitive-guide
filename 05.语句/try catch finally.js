

try{
    let n = Number(prompt("Please enter a positive integer:"));
    let f = factorial(n)
    console.log(n + "! = " + f)
}catch(ex){
    // 这里可以定义局部变量
    console.log(ex)
}finally {
    console.log(`语句已执行！`)
    /** ? 这个块包含的语句都会被执行，无论try块是否终止，这些语句都会被执行：
     * 1.正常情况下，到达try底部时执行
     * 2.由于break,continue或break语句而执行
     * 3.由于上面的catch字句处理了异常而执行
     * 4.由于异常未被处理而继续传播而执行
     */
}

// 模拟 for(initialize; test; increment)循环体
// initialize
// while(test){
//     try{ body; }
//     finally{ increment; }
// }

// 干捕获字句
// 省略catch的圆括号和标识符
function parseJSON(s){
    try{
        return JSON.parse(s)
    }catch{
        return undefined;
    }
}

