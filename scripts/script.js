// Responsively adjusts the height of the above-fold div, which contains a picture
function windowResize() {
	var height = $(window).height();
	var width = $(window).width();

	if (height > 540 && width > 767){
		$('.above-fold').css({'height':height});
		$('.above-fold-img').css({'height':height});
	}
}