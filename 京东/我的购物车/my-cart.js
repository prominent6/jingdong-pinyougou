$(function() {
    //1.全选全不选功能模块
    //把全选按钮(checkall)状态赋值给四个小按钮(j-checkbox)
    $(".checkall").change(function() {
        $(".j-checkbox,.checkall").prop("checked", $(this).prop("checked"));

        //6.选中商品添加背景颜色
        if ($(this).prop("checked")) {
            $(".cart-item").addClass("check-cart-item");
        } else {
            $(".cart-item").removeClass("check-cart-item");
        }
    });

    $(".j-checkbox").change(function() {
        //if(被选中的小复选框按钮个数==总的小复选框总数)
        if ($(".j-checkbox:checked").length === $(".j-checkbox").length) {
            $(".checkall").prop("checked", true);
        } else {
            $(".checkall").prop("checked", false);
        }

        //6.选中商品添加背景颜色,一定选当前
        if ($(this).prop("checked")) {
            $(this).parents(".cart-item").addClass("check-cart-item");
        } else {
            $(this).parents(".cart-item").removeClass("check-cart-item");
        }
    });

    //2.计算总件数和总额模块
    getSum();

    function getSum() {
        var count = 0;
        var money = 0;
        $(".itxt em").each(function(i, ele) {
            count += parseInt($(ele).text());
        });
        $(".amount-sum em").text(count);

        $(".p-price").each(function(i, ele) {
            money += parseFloat($(ele).text().substr(1));
        });
        $(".price-sum em").text("￥" + money.toFixed(2));
    }

    //3.单独删除商品
    $(".p-action a").click(function() {
        //删除当前商品
        $(this).parents(".cart-item-list").remove();
        getSum();
    });

    //4.删除选中的商品
    $(".remove-batch").click(function() {
        $(".j-checkbox:checked").parents(".cart-item-list").remove();
        getSum();
    });
    //5.清理购物车
    $(".clear-all").click(function() {
        $(".cart-item-list").remove();
        getSum();

    });


})