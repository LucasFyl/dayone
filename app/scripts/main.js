


$( document ).ready(function(){
	// $('body').removeClass("scriptDisabled");
	var isMobile = window.matchMedia('only screen and (max-width: 760px)');

    if (isMobile.matches) {
        //Conditional script here
        console.log('It\'s Mobile !');
        $('body').addClass('mobile');
        setTimeout(function () {
		  window.scrollTo(0, 1);
		}, 500);
    } else {
        console.log('It\'s Not !');
    }

    //  Landing part animation : 
    $('.landing h4, .landing h1, .slide#first .watch').addClass('from-bottom');
	$('.landing p, .cta').addClass('fadeIn');
    TweenMax.set('.from-bottom', {y:50});
    TweenMax.staggerTo('.from-bottom', 0.5, {opacity:1,y:0,ease:Power3.easeOut,delay:0.5}, 0.1);
    TweenMax.staggerTo('.fadeIn', 0.8, {opacity:1,ease:Power3.easeOut,delay:1.2});

    // arrow-link trigger first scroll : 
    $('body').on('click', '.cta a', function(){
    	$('html, body').animate({scrollTop: $('#first').offset().top}, 'slow');
    	$('.arrow-down').css('opacity', 1);
    });

    // arrow down behaviour :
    $('body').on('click', '.arrow-down', function(){
    	var winH = $(window).height();
    	$('html, body').animate({scrollTop: winH}, 'slow');
    });

});