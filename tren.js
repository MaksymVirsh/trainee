$(window).scroll(function() {

	var st = $(this).scrollTop();

	$(".header_text").css({
		"transform" : "translate(0%, " + st /2 + "%"
	});

	$(".sect-2 img").css({
		"transform" : "translate(0%, " + st /50 + "%"
	});

});