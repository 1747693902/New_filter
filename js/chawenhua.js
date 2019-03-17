$('#carousel img').click(function(){
	$('.lunboBannerBox li').eq($(this).index()).show().siblings('li').hide();
	console.log($(this).index())
	console.log($('#bannerNav>ul>li'))
})
//$('#bannerNav>ul>li').click(function(){
$(document).on("click",'#bannerNav>ul>li',function() {
	$('.lunboBannerBox li').eq($(this).index()).show().siblings('li').hide();
})