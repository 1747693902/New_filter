var num = 0;
$('.lunbo').find('span').eq(1).click(function(){
		num++;
		if(num>2){
		num=2;
		}
	$('.lunbo').find('ul').css({'margin-left':-1287*num+'px'})
})
$('.lunbo').find('span').eq(0).click(function(){
		num--;
		if(num<0){
		num=0;
		}
	$('.lunbo').find('ul').css({'margin-left':-1287*num+'px'})
})
var timer = setInterval(function(){
	$('.lunbo').find('li').eq(0).before($('.lunbo').find('li').eq(2))
},3000)
$(window).scroll(function(){
	var scrollTop=$(window).scrollTop();
	if (scrollTop>73) {
	$('.subnav').css({'position':'fixed','top':0,'left':0})
}else{
	$('.subnav').css({'position':''});
}
	if (scrollTop>1600) {
		console.log('111')
		$('.chaye').find('.slideInRight,.slideInLeft,.slideInUp').css({'animation':'slideInRight 2s','display':'block'})
		
	}
})
