window.addEventListener('load', function() {

    var btn = document.getElementById("log");
    //标识变量,是否正在发送请求
    let isSending = false;
    btn.addEventListener("click", function() {
        const xhr = new XMLHttpRequest();
        //停止重复的请求
        if (isSending) xhr.abort();
        //超时2s设置
        xhr.timeout = 2000;
        //超时回调
        xhr.ontimeout = function() {
                alert("网络异常，请稍后重试");
            }
            //网络异常回调
        xhr.onerror = function() {
                alert("你的网络似乎处理一些问题");
            }
            //ie缓存问题解决
        xhr.open('POST', 'url' + Date.now());
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        isSending = true;
        xhr.send('a=100&b=200&c=300');
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4) {
                if (xhr.status >= 200 && xhr.status < 300) {
                    alert("登录成功！")
                } else {
                    alert("登录失败！")
                }
            }
        }
    })
})