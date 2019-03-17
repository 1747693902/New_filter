window.onload = function() {
	//	拆分图片
	var orbit = {
		// Initialize the orbiting
		init: function(selector) {
			this.elements = document.querySelectorAll(selector || '[data-orbit]');

			// Set the update interval
			this.setupIntervals();
		},

		// Setup the intervals for rotating
		setupIntervals: function() {
			var self = this;
			this.elements.forEach(function(el) {
				self.update(el);
				this.interval = setInterval(function() {
					self.update(el);
				}, 5000);
			});
		},

		// Update the orbit rotate3d
		update: function(el) {
			var min = -1;
			var max = 1;

			// Get our rotate values
			var rotate = [
				(Math.floor(Math.random() * (max - min + 1)) + min) + '.' + (Math.floor(Math.random() * 9) + 1),
				(Math.floor(Math.random() * (max - min + 1)) + min) + '.' + (Math.floor(Math.random() * 9) + 1)
			];

			// Set the transform
			el.style.webkitTransform = 'rotate3d(' + rotate[0] + ', ' + rotate[1] + ', 0, 1deg)';
			el.style.MozTransform = 'rotate3d(' + rotate[0] + ', ' + rotate[1] + ', 0, 1deg)';
			el.style.msTransform = 'rotate3d(' + rotate[0] + ', ' + rotate[1] + ', 0, 1deg)';
			el.style.OTransform = 'rotate3d(' + rotate[0] + ', ' + rotate[1] + ', 0, 1deg)';
			el.style.transform = 'rotate3d(' + rotate[0] + ', ' + rotate[1] + ', 0, 1deg)';
		}
	}
	orbit.init();
}



//===============================================================================================================================
$(document).ready(function(e) {
	//时间轴
	$('.cntl').cntl({
		revealbefore: 300,
		anim_class: 'cntl-animate',
		onreveal: function(e) {
//			console.log(e);
		}
	});

	//======================================
	//翻页轮播
	var interval;
	$(".fanYe_container img").click(function cover() {
		$(this).addClass("zoom").fadeOut(700, append);

		function append() {
			$(this).removeClass("zoom").appendTo(".fanYe_container").show();
			var fanYe_name = $(".fanYe_container").children("img").first().attr("alt");
			$(".fanYe_name p").text("No " + fanYe_name);
		}

	})

	function auto() {
		var play = $(".fanYe_container").children("img").first();
		play.addClass("zoom").fadeOut(700, append);

		function append() {
			$(this).removeClass("zoom").appendTo(".fanYe_container").show();
			var fanYe_name = $(this).parent().children("img").first().attr("alt");
			$(".fanYe_name p").text("No " + fanYe_name);
		}
		interval = setTimeout(auto, 2000);
	}

	$(".fanYe_container img").hover(function() {
		stopPlay();
	}, function() {
		interval = setTimeout(auto, 1000);
	})

	function stopPlay() {
		clearTimeout(interval)
	}
	auto();
	
	//=================================
	//字滚动
	$("#scrollDiv").Scroll({line:1,speed:500,timer:2000,up:"but_up",down:"but_down"});
	
	//===================================================================
	//手风琴的tab切换
	$("#c_shou_container>div").mouseenter(function(){
		$("#c_cntl-content>div").eq($(this).index()).show().siblings("div").hide();
	})
		

});