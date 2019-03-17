$(function(){
//	轮播图js开始
    //声明变量记录索引
     var index = 0;
     //点击右边按钮
     var toggle = true
     $(".right").click(function() {

         if (toggle == false) {
             return
         }
         toggle = false
         index++;
         if (index > $('.bannerPic li').length - 1) {
             index = 0;
         }
         $('.indicator li').eq(index).addClass('zhiShi').siblings("li").removeClass('zhiShi')
         $(".bannerPic li").eq(index).stop().show(0, function() {
                 toggle = true
             }

       ).siblings("li").stop().hide();
     });
     
     
//	点击左边开关
    $(".left").click(function() {

         if (toggle == false) {
             return
         }
         toggle = false
         index++;
         if (index > $('.bannerPic li').length - 1) {
             index = 0;
         }
         $('.indicator li').eq(index).addClass('zhiShi').siblings("li").removeClass('zhiShi')
         $(".bannerPic li").eq(index).stop().show(0, function() {
                 toggle = true
             }

       ).siblings("li").stop().hide();
     });
	
    //定时器
    var timerID = setInterval(function() {
        $(".right").click()

    }, 1500)
    
     //移入停止计时器
     $('.banner').mouseenter(function() {
         clearInterval(timerID);
     })
     //移出开始计时器
     $('.banner').mouseleave(function() {
         timerID = setInterval(function() {
             $(".right").click()

         }, 2000)
     })
	
//	指示器
    $(".indicator li").mouseenter(function(){
    	$(this).addClass("zhiShi").siblings("li").removeClass("zhiShi");
    	$(".bannerPic li").eq($(this).index())
    	.show().siblings("li").hide();
    });
	
	
//	轮播图js结束

//*****************************************************************************
     
     
// 茶起源js开始
$(window).scroll(function() {

     //鼠标滚动的距离
     var iTop = $(window).scrollTop();
     var num=$(".banner").height()+$(".make").height();
//   console.log(iTop);
//   console.log(num);
     if(iTop>=num){
     	$(".ying").animate({"right":0},1000);
     	$(".qi").animate({"left":0},1000);
     	$(".pic").animate({"left":0},1000);
     }
     
});
// 茶起源js结束

//********************************************************************?

// SEARCH与input背景变化  js开始
   $(".search>input,.jiaoDian").focus(function(){
   	    $(this).css({"background":"#ffffff"});
   })
   $(".search>input,.jiaoDian").blur(function(){
   	    $(this).css({"background":"#f7f7f7"});
   })
// SEARCH与input背景变化   js开始
   
// *****************************************************************

// 判断表单是否填写完js开始
   $(".pingLun input").on("input propertychange", function() {
        check("skgj", "user", "pass", "cdata", "boltn");
    });

    function check(skgj,user, pass, cdata, name) {
        var user = $("." + user).val();
        var skgj = $("." + skgj).val();
        var pass = $("." + pass).val();
        if (user != "" && pass != ""&& skgj != "") {
            $("." + cdata).addClass(name);
        } else {
            $("." + cdata).removeClass(name);
            return false;
        }
    }
// 判断表单是否填写完js结束

//****************************************************************************
   
});