const slide_but = document.querySelector(".slide_but");
const main_page = document.querySelector(".main-page");
const nav_satting = document.querySelector(".navbar");
slide_but.addEventListener("click",myFunction);
let flag=0;
function myFunction(event) {
     if(flag==1){
		flag=0;
		main_page.classList.add("smit");
		nav_satting.classList.add("uppernav_nanu");
		nav_satting.classList.remove("uppernav_motu");

	 }
	 else{
		flag=1;
		main_page.classList.remove("smit");
		nav_satting.classList.add("uppernav_motu");
		nav_satting.classList.remove("uppernav_nanu");
		console.log(nav_satting.classList);
	 }
}


(function($) {

	"use strict";

	var fullHeight = function() {

		$('.js-fullheight').css('height', $(window).height());
		$(window).resize(function(){
			$('.js-fullheight').css('height', $(window).height());
		});

	};
	fullHeight();

	$('#sidebarCollapse').on('click', function () {
      $('#sidebar').toggleClass('active');
	 
  });

})(jQuery);
