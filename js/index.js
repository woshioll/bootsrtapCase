$(function () {
    // 1、轮播
    $(window).on('resize', function () {
        // 1.1：获取屏幕宽度
        var clientW = $(window).width();
        // 1.2：设定临界值，如果屏幕打于800px，返回true，否则返回false
        var isShowBigImage = clientW > 640;
        //1.3：找到所有的item
        var $allItem = $('#s1 .item');
        // 1.4：遍历item
        $allItem.each(function (index, item) {
            // 1.4.1：获取item中data中存的数据如果返回的是true，就是大图
            var src = isShowBigImage ? $(item).data('lg-img') : $(item).data('sm-img');
            var imgUrl = 'url(' + src + ')';
            // 1.4.2：设置背景图片
            $(item).css('backgroundImage', imgUrl);
            if (!isShowBigImage) {
                // 1.4.3：如果是小于800的屏幕，我就给.item内部添加一个img标签
                var $img = '<img src="' + src + '">'
                $(item).empty().append($img)
            } else {
                $(item).empty()
            }
        })
    })
    $(window).trigger('resize');
    // 2、工具提示
    $('[data-toggle="tooltip"]').tooltip()
    //3、处理导航点击滚动的页面效果
    //3.1 找到被点击的元素
    var allLi = $("#header .nav>li");
    $(allLi[2]).on('click',function(){
        $('html,body').stop().animate({
            scrollTop:$('#lk-lesson').offset().top
        },1000);
    })
    $(allLi[5]).on('click',function () {
        $('html,body').stop().animate({
            scrollTop:$('#lk-about').offset().top
        },1000)
    })
    $(allLi[3]).on('click',function(){
        $('html,body').stop().animate({
            scrollTop:$('#lk-product').offset().top
        },1000);
    })
    // 4、处理明星产品的滚动问题
    $(window).on('resize',function () {
        // 4.1找到ul
        var $ul = $('#lk-product .nav');
        var $allLi = $ul.children('li').not('.pull-right');
        // 4.2、遍历
        var totalW = 0;//表示所有的li总共的宽度
        $allLi.each(function (index,item) {
            totalW += $(item).width()
        })
        // 4.3、给ul设置宽度
        // 获取ul的父级的宽度，当所有的li的宽度大于ul父级宽度的时候，就给ul设置一个宽度，这个宽度就是totalW
        var parentW = $ul.parent().width();
        if(totalW>parentW){
            $ul.width(totalW);
        }else{
            $ul.removeAttr('width')
        }
    })
    $(window).trigger('resize')
})