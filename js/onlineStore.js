$(function(){
//	轮播图js开始
    
//  轮播图js结束

//******************************************************?
    
//  鼠标移入移出钱js
    $(".shoppingConter li").mouseenter(function(){
    	$(".shoppingConter b").eq($(this).index()).slideDown(1000);
    })
    $(".shoppingConter li").mouseleave(function(){
    	$(".shoppingConter b").eq($(this).index()).slideUp(1000);
    })
//  鼠标移入移出钱js结束

//****************************************************

//  品牌精选轮播图js
    var i=0;
    var timerID = setInterval(function() {
        ++i;
        if(i>=4){
        	i=0;
        	$(".brandConter>ul>li>a").eq(i).addClass("show").siblings("a")
            .removeClass("show");
        }else{
        	$(".brandConter>ul>li>a").eq(i).addClass("show").siblings("a")
            .removeClass("show");
        }
    }, 1500);
//  品牌精选轮播图js结束
    
    
//  *****************************************************************

// 右侧定位js
    $(".dingWei>ul>li").eq(1).mouseenter(function(){
    	$(".weiXin").show();
    });
    $(".dingWei>ul>li").eq(1).mouseleave(function(){
    	$(".weiXin").hide();
    });
    $(".dingWei>ul>li").eq(2).mouseenter(function(){
    	$(".dianHua").show();
    });
    $(".dingWei>ul>li").eq(2).mouseleave(function(){
    	$(".dianHua").hide();
    });



});
