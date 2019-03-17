$(function(){
	$(".box_l li").mouseenter(function(){
		$(".box p").eq($(this).index()).show().siblings("p").hide()
	    $(".big_box p").eq($(this).index()).show().siblings("p").hide()
	
   })
//	放大镜
   $(".box").mouseenter(function(){
   	$(".float_layer").show();
   	$(".big_box").show();
   })
	
	$(".box").mouseleave(function(){
   	$(".float_layer").hide();
   	$(".big_box").hide();
   })
	
	$(".box").mousemove(function(e) {
	    var l = e.pageX - $(".box").offset().left - ($(".float_layer").width() / 2)
	    var t = e.pageY - $(".box").offset().top - ($(".float_layer").height() / 2)
	    if (l < 0) {
	        l = 0
	    }
	    if (l > $(this).width() - $(".float_layer").width()) {
	        l = $(this).width() - $(".float_layer").width()
	    }
	    if (t < 0) {
	        t = 0
	    }
	    if (t > $(this).height() - $(".float_layer").height()) {
	        t = $(this).height() - $(".float_layer").height()
	    }
	
	    $(".float_layer").css({
	        "left": l,
	        "top": t
	    })
	    var pX = l / ($(".box").width() - $(".float_layer").width())
	    var pY = t / ($(".box").height() - $(".float_layer").height())

	    $(".big_box img").css({
	    	
	        "left": -pX * ($(".big_box img").width() - $(".big_box").width()),
	        "top": -pY * ($(".big_box img").height() - $(".big_box").height())
	    
	        
	    })
	
	});
	$(".hua").mouseenter(function(){
		$(".one").fadeIn(1000)
	})
	
	$(".hua").mouseleave(function(){
		$(".one").fadeOut(1000)
	})
	
	//字滚动
	 function gundong() {
     var liH = $(".gun_l li").height();
     var gunH = 0;
     
     $(".gun_l").append($(".gun_l li").eq(0).clone());
     setInterval(function() {
         gunH += liH;
//       console.log(gunH);
         $(".gun_l").animate({
             marginTop: -gunH + "px"
         }, 500);
         if (gunH >= ($(".gun_l li").length - 1) *30) {
             gunH = 0;
             $(".gun_l").animate({
                 marginTop: gunH + "px"
             }, 1);
         }
     }, 2000);
 }
 gundong()
 
 
	$(".left li:eq(0)").click(function(){
		$(document).scrollTop(0);
		$(this).attr("id","lei").siblings().removeAttr("id","lei")
	})
	$(".left li:eq(1)").click(function(){
		$(document).scrollTop(600);
		$(this).attr("id","lei").siblings().removeAttr("id","lei")
	})
	$(".left li:eq(2)").click(function(){
		$(document).scrollTop(1400);
		$(this).attr("id","lei").siblings().removeAttr("id","lei")
	})
	$(".left li:eq(3)").click(function(){
		$(document).scrollTop(2100);
		$(this).attr("id","lei").siblings().removeAttr("id","lei")
	})
	window.addEventListener('scroll',fn,true);
	function fn(){
	 var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
   if(scrollTop<600){
   	$(".left").show()
   	$(".left li:eq(0)").attr("id","lei").siblings().removeAttr("id","lei")
   }else if(scrollTop>600&&scrollTop<1200){
   	$(".left").show()
   	$(".left li:eq(1)").attr("id","lei").siblings().removeAttr("id","lei")
   }
   else if(scrollTop>1200&&scrollTop<1900){
   	$(".left").show()
   	$(".left li:eq(2)").attr("id","lei").siblings().removeAttr("id","lei")
   }else if(scrollTop>1900&&scrollTop<2600){
   	$(".left li:eq(3)").attr("id","lei").siblings().removeAttr("id","lei")
  $(".left").show()
   }
   else{
   	$(".left").hide()
   }
}
//	测导航条

    });