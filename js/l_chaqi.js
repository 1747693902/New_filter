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
	
	
})