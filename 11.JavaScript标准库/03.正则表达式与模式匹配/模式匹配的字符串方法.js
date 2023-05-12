// String 支持4个使用正则表达式的方法

// 1.search
/**
 * 接收一个正则表达式参数，返回第一个匹配项起点位置，如果没有找到匹配项，则返回-1
 */
const posStart1 = "JavaScript".search(/script/ui)
const posStart2 = "Python".search(/script/ui)
console.log(posStart1, posStart2);

// 2.replace
/**
 * 执行一个搜索替换操作，
 */

// 3.match

let url = /(\w+):\/\/([\w.]+)\/(\S*)/
let text = "Visit my blog at http://www.example.com/~david"
let match = text.match(url)
console.log(text.match(url));
let fullurl, protocol, host, path;
if(match !== null){
  [fullurl, protocol, host, path] = match // ['http://www.example.com/~david', 'http', 'www.example.com', '~david']
}

console.log(fullurl, protocol, host, path);


let url2 = /(?<protocol>\w+):\/\/(?<host>[\w.]+)\/(?<path>\S*)/
let match2 = text.match(url2)
console.log(match2.input, match2.index,  match2.groups);

let vowel = /[aeiou]/y // 粘着元音匹配
console.log('test'.match(vowel));
vowel.lastIndex = 1
console.log('test'.match(vowel));
console.log(vowel.lastIndex);
console.log('test'.match(vowel));
console.log(vowel.lastIndex);

// matchAll 
const words = /\b\p{Alphabetic}+\b/gu
const text2 = "This is naive test of the matchAll() method."
for(let word of text2.matchAll(words)){
  console.log(`Found '${word[0]}' at index ${word.index}`);
}

// split()
console.log("123,456,789".split(","))
console.log("`1, 2, 3, \n4, 5".split(/\s*,\s*/))