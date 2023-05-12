let data = JSON.parse(text, function(key, value){
  // 删除以下划线开头的属性和值
  if(key[0] === "_") return undefined;
  // 如果ISO 8601 格式的日期字符串，则转化为Date
  if(typeof value === "string" && /^\d\d\d\d-\d\dT\d\d:\d\d:\d\d.\d\d\dZ$/.test(value)){
    return new Date(value);
  }
  // 否则返回原始值
  return value;
})