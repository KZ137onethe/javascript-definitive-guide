// ! 实际上 with 语句尽可能不适用它
// with 会运行一个代码块，就好像指定对象的属性是该代码块作用域中的变量一样
document.forms[0] = {
    address: {
        value: undefined
    },
    name: {
        value: undefined
    },
    email: {
        value: undefined
    },
}
document.forms[0].address.value
// 使用 with 语句是为了更方便的使用深度嵌套的对象
with(document.forms[0]){
    // 在这里直接访问表单元素
    name.value = ''
    address.value = ''
    email.value = ''
}