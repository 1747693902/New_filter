$(function(){
	$(".top_l li").click(function(){
		$(this).children("p").show(1000).parent("li").siblings().children("p").hide(1000)
		$(this).children("a").hide().parent().siblings().children("a").show()
		$(".lun li").eq($(this).index()).show().siblings().hide()
	})
	
})

	