//旋转木马
window.onload=function(){
	InitScripts();
	var imageRotater = null;
	function InitScripts() {
		imageRotater = ImageRotatorJS('Ellipse', 'RotatingIcon', 5, 110, 3000, 0, 90, 40, null);
	}
}

//==========================================
$(function(){
	$(".eight_dong").hide();
	$(".eight_hover").mouseenter(function(){
		$(this).siblings($(".eight_dong")).slideDown(500);
	})
	$(".eight_hover").mouseleave(function(){
		$(this).siblings($(".eight_dong")).slideUp(500);
	})
	
	
	
	$('#beatText').beatText({isAuth:false,isRotate:false});
	$('#rotateText').beatText({isAuth:false,isRotate:true});
	$('#autoText').beatText({isAuth:true,beatHeight:"3em",isRotate:false});
	$('#roloadText').beatText({isAuth:true,beatHeight:"1em",isRotate:false,upTime:100,downTime:100});
	$('#autoRotateText').beatText({isAuth:true,upTime:700,downTime:700,beatHeight:"3em",isRotate:true});
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
})
