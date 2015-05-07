


$( document ).ready(function(){
	// $('body').removeClass("scriptDisabled");
	var isMobile = window.matchMedia('only screen and (max-width: 760px)');

    if (isMobile.matches) {
        //Conditional script here
        console.log('It\'s Mobile !');
        $('body').addClass('mobile');
    } else {
        console.log('It\'s Not !');
    }

    $('.landing h4, .landing h1, .slide#first .watch').addClass('from-bottom');
	$('.landing p, .cta').addClass('fadeIn');

    TweenMax.set('.from-bottom', {y:50});
    TweenMax.staggerTo('.from-bottom', 0.5, {opacity:1,y:0,ease:Power3.easeOut,delay:0.5}, 0.1);
    TweenMax.staggerTo('.fadeIn', 0.8, {opacity:1,ease:Power3.easeOut,delay:1.2});
});