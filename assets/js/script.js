$(window).scroll(function() {

	if ($(this).scrollTop() >= 300) {
		$('#navigationBar').removeClass('navigation-not-scrolled');
		$('#navigationBar').addClass('navigation-bar-scrolled');
	}

	else {
		$('#navigationBar').removeClass('navigation-bar-scrolled');
	}

});

	if($(window).scrollTop() >= 300) {
		$('#navigationBar').addClass('navigation-not-scrolled');
	}
