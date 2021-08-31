(function ($) {
"use strict";


$('.main-menu nav > ul > li').slice(-2).addClass('last-elements');

/* meanmenu */
$('.main-menu nav').meanmenu({
	 meanMenuContainer: '.mobile-menu-area',
	 meanScreenWidth: "767"
});

})(jQuery);	