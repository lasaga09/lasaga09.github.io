var loader = document.getElementById("loader-wrapper");
setTimeout(function(){
	loader.style.display = 'none';
	loader.style.transition = '0.4s';
	
}, 3000);


var $btn = $('#js-iconMenu'),
		$menu = $('.js-toggleEffect');
	
function menuToggle(e) {
	$menu.slideToggle();
	$(this).toggleClass('on');
	e.preventDefault();
}

$btn.on('click', menuToggle);


$(window).on("resize", function () {
  var positionTop = window.innerHeight / 2;
  $('nav ul').css('top', positionTop);
  var marginTop = $('nav ul').height() / 2;
  $('nav ul').css('margin-top', -marginTop);
}).resize();