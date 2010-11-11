/*
 * jquery.jumpTo.js
 * John Griffiths
 * 
 * jumps to a specific element's position nicely
 * 
 */
(function($){
    
	$.fn.jumpTo = function(elem) {
		var y = $(elem).position().top - $(elem).height(); // find pos of target
		$(this).data("jumpTo", { top : y }); // store inside element
		
		$(this).live('click', function() {
			y = $(this).data("jumpTo").top; // retrieve y pos from element
	    $('html, body').animate({scrollTop: y}, 'slow'); // jump to y pos
		});
	};
    
})(jQuery);