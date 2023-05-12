// RegExp 类
/**
 * RegExp 类构造函数接收一个或两个字符串参数
 * 第一个参数是包含正则表达式的主体
 * 第二个参数是可选的，代表了正则表达式的标志
 */

let zipcode = new RegExp('\\d{5}', 'g')
console.log(zipcode);
let exactMatch = /JavaScript/;
let caseInsensitive = new RegExp(exactMatch, 'i');


// exec()
let pattern = /Java/g
let text = "JavaScript > Java"
let match;
while((match = pattern.exec(text)) !== null){
  console.log(`Matched ${match[0]} at ${match.index}`);
  console.log(`Next search begins at ${pattern.lastIndex}`);
}

// 示例代码
let dictionary = ['apple', 'book', 'coffee']
let doubleLetterWords = [];
let doubleLetter = /(\w)\1/g

for(let word of dictionary){
  if(doubleLetter.test(word)){
    doubleLetterWords.push(word)
  }
}
console.log(doubleLetterWords); // 有bug, test方法调用量exec方法，修改了lastIndex所以"book"会被漏掉