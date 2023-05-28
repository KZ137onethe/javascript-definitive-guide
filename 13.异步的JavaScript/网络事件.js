
function getCurrentVersionNumber(versionCallback){
  let request = new XMLHttpRequest();
  request.open('GET', "http://www.example.com/api/version")
  request.send();

  request.onload = function(){
    if(request.status === 200){
      let currentVersion = parseFloat(request.responseText);
      versionCallback(null, currentVersion)
    } else {
      versionCallback(response.statusText, null)
    }
  }
  // 注册另一个将在网络出错时调用的回调
  request.onerror = request.ontimeout = function(e){
    versionCallback(e.type, null)
  }
}

