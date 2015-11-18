var systemObject = {
	slideNav : function(thisIdentity) {
		"use strict";
		$('#navigationSlide').on('mouseenter mouseleave', 'li', function(e) {
			if (e.type == 'mouseenter') {
				var thisElementA = $(this).find('a')
				var thisElementAWidth = thisElementA.outerWidth();
				$(this).stop(true).animate({ 'width' : thisElementAWidth + 'px' }, 400, 'easeOutBack');
			} else {
				$(this).stop(true).animate({ 'width' : '38px' }, 400, 'easeOutBack');
			}
		});
	}
};
$(function() {
	"use strict";
	systemObject.slideNav();
});