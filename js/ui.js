$(document).ready(function() {

	var $window = $(window),
		$this = $(this),
		$headerfixed = $('.header-fixed'),
		$goTop = $('.goTop');

	var scrollBottom = $(document).height() - $(window).height() - $(window).scrollTop();


	$goTop.click(function () {
		$("html,body").animate({
				scrollTop: 0
		}, 1300, 'easeInOutCubic');
		return false;
	});

	$window.scroll(function(){
		if($this.scrollTop() > 90) {
			$headerfixed.css("top","0");
		} else {
			$headerfixed.css("top","");
		}

		if ($this.scrollTop() > 400) {
            $goTop.fadeIn("fast");
        } else {
            $goTop.stop().fadeOut("fast");
		}
		
		if ($this.scrollTop() > 2240) {
            $('.goTop_v1').css("bottom","424px");
        } else {
			$('.goTop_v1').css("bottom","");
		}
		

		if($this.scrollTop() > 1342) {
			$('.form-nav').addClass('active');
		} else {
			$('.form-nav').removeClass('active');
		}

	});

	$('.pic-toggle').click(function(){
		$(this).next('.pic-hover').addClass('active');
	});

	$('.pic-hover').click(function(){
		$(this).removeClass('active');
	});
	$('img[usemap]').rwdImageMaps();
});
