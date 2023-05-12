
let book = {
  author: '冯*罗一曼',
  "main title": '绝叫'
}

delete book.author
delete book["main title"]

// ! delete 操作符 只删除自有属性， 不删除继承属性
delete book.toString // true , 什么也不做
