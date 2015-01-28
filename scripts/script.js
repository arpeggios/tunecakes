// Responsively adjusts the height of the above-fold div, which contains a picture
function windowResize() {
	var height = $(window).height();
	var width = $(window).width();

	if (height > 540){
		$('.above-fold').css({'height':height});
		$('.above-fold-img').css({'height':height});
		// $('.below-fold-1').css({'height':height});
		// $('.below-fold-2').css({'height':height});
	}
}