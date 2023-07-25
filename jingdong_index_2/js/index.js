window.addEventListener('load', function() {
    //animate.js
    //obj为目标对象，target为目标位置
    function animate(obj, target, callback) {
        //停止定时器
        clearInterval(obj.timer);
        obj.timer = setInterval(function() {
            var step = (target - obj.offsetLeft) / 10;
            step = step > 0 ? Math.ceil(step) : Math.floor(step);
            if (obj.offsetLeft == target) {
                clearInterval(obj.timer);
                //回调函数的调用写在定时器结束里面
                if (callback) {
                    //调用函数
                    callback();
                }
            }
            obj.style.left = obj.offsetLeft + step + 'px';
        }, 15);
    }

    // 设置imgsList宽度
    // var imgsList = document.getElementById("imgsList");
    // var imgArr = document.getElementsByTagName("img");
    // imgsList.style.width = 600 * imgArr.length + "px";


    //点击按钮切换图片  
    //要切换图片就是要修改img标签的src属性  

    //获取两个按钮
    var prev = document.getElementById('angleLeft');
    var next = document.getElementById("angleRight");
    //获取imgsList
    var imgsList = document.getElementById('imgsList');

    //创建一个变量，来保存当前正在显示的图片的索引  
    var index = 0;
    var num = 0;
    var circle = 0;

    var allA = document.getElementById('pointer').getElementsByClassName('navs');
    //设置默认选中的效果
    allA[index].style.backgroundColor = '#fff';
    //记录小圆圈的索引号，通过自定义属性
    for (var i = 0; i < allA.length; i++) {
        allA[i].setAttribute('index', i);
        //绑定点击事件
        allA[i].addEventListener('click', function() {
            allA[index].style.backgroundColor = '';

            //小圆圈的排他思想
            for (var i = 0; i < allA.length; i++) {
                allA[i].className = 'navs';
            }
            this.classList.add('active');
            // console.log(this);
            //当我们点击了某个小圆圈，拿到当前小圆圈的索引号
            index = this.getAttribute('index');
            num = circle = index;
            //点击小圆圈，移动图片
            animate(imgsList, -index * 600);
        })
    }
    //点击右侧按钮，图片滚动
    //无缝滚动
    //为得到点击的小圆圈的索引号，去前面申明
    // var num = index;
    //circle控制小圆圈的播放
    // var circle = index;
    next.addEventListener('click', function() {
        allA[index].style.backgroundColor = '';

        //移动到最后一张照片，快速复原==left改为0，num=0
        if (num == 8) {
            imgsList.style.left = 0;
            num = 0;
        }
        num++;
        animate(imgsList, -num * 600);
        //点击右侧按钮，小圆圈跟随一起变化，声明一个circle变量控制小圆圈的播放
        //注意图片比原点多一张
        circle++;
        if (circle == 8) {
            circle = 0;
        }
        //进行排他算法
        for (var i = 0; i < allA.length; i++) {
            allA[i].className = 'navs';
        }
        allA[circle].classList.add('active');
    })

    //点击左侧按钮
    prev.addEventListener('click', function() {
        allA[index].style.backgroundColor = '';

        //移动到第一张照片，快速到最后一张==left改为6000，num=8
        if (num == 0) {
            imgsList.style.left = -5800;
            // num = imgsList.children.length - 1;
            num = 8;
        }
        num--;
        animate(imgsList, -num * 600);
        //点击左侧按钮，小圆圈跟随一起变化，声明一个circle变量控制小圆圈的播放
        //注意图片比原点多一张
        if (circle == 0) {
            // circle = imgsList.children.length - 1;
            circle = 8;
        }
        circle--;
        // console.log(circle);
        //进行排他算法
        for (var i = 0; i < allA.length; i++) {
            allA[i].className = 'navs';
        }
        allA[circle].className = 'navs active';
    })

    //自动播放模块
    var timer = setInterval(function() {
        //手动点击事件
        next.click();
    }, 5000);
    //鼠标经过，定时器停止
    var outer = document.getElementById('outer');
    outer.addEventListener('mouseenter', function() {
        clearInterval(timer);
        //清除定时器变量
        timer = null;
    })
    outer.addEventListener('mouseleave', function() {
        timer = setInterval(function() {
            //手动点击事件
            next.click();
        }, 2000);
    })

    //出现下拉菜单
    $(function() {
        /* //鼠标经过
        $(".items,.application").mouseover(function() {
            $(".application").show();
        })

        //鼠标离开
        $(".items,.application").mouseout(function() {
            $(".application").hide();
        }) */
        $(".items,.application").hover(function() {
            $(".application").show();
        }, function() {
            $(".application").hide();
        });
    })

})