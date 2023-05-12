let token = "sdbasda"
let indexOF = 0
// 这里的mainLoop 是一个语句标签，它不是一个关键字
/**
 * 语句标签只在定义它的语句（包括它的子语句中）有效
 * 如果一条语句被被另一条语句包含，那么他们不能使用相同的标签
 * 如果两条语句没有嵌套关系，那么他们可以使用相同的标签
 * 已经有标签的语句本身可以再添加标签
 */
mainLoop: while(token){
  indexOF++
  console.log(indexOF)
  if(indexOF < 5)
    continue mainLoop;
  else{
    indexOF *= 2
    if(indexOF < 2**8) {
      continue mainLoop;
    }
    else{
     token = null
    }
  }
}
