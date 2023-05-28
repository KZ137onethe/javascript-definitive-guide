// 示例：
import { request } from 'http'
import https from 'https'

// 读取url的文本内容，将其异步传给回调
function getText(url, callback){
  // 将一个url发送一个http get请求
  request = https.get(url)

  // 注册一个函数处理“response”事件
  request.on('response', response => { 
    // 这个响应事件意味着收到了响应头
    let httpStatus = response.statusCode;

    // 此时并没有收到http响应体
    // 因此还要再注册几个事件处理程序，以便收到响应体被调用
    response.setEncoding("utf-8")
    let body = ''

    // 每个响应体块就绪时都会调用这个事件处理程序
    response.on('data', chunk => {
      body += chunk
    })

    // 响应完成后会调用这个事件处理程序
    response.on("end", () => {
      if(httpStatus === 200){
        callback(null, body)
      }else{
        callback(httpStatus, null)
      }
    })
  })

  // 这里是为底层网络错误注册了一个事件处理程序
  request.on("error", (err) => {
    callback(err, null)
  })
}