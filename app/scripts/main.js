var myScroll;
function loaded () {
	myScroll = new IScroll('#scroller', { 
		mouseWheel: true, 
		click: true
	});
}

document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);

$( document ).ready(function(){
	// $('body').removeClass("scriptDisabled");
	var isMobile = window.matchMedia('only screen and (max-width: 760px)');

    if (isMobile.matches) {
        //Conditional script here
        console.log('It\'s Mobile !');
        $('body').addClass('mobile');
        setTimeout(function () {
		  myScroll.scrollBy(0, -1);
		}, 800);
    } else {
        console.log('It\'s Not !');
    }

	$('.landing h4, .landing h1, .slide#first .watch').addClass('from-bottom');
	$('.landing p, .cta').addClass('fadeIn');

});

$( window ).load(function() {
	loaded();

    //  Landing part animation : 
    TweenMax.set('.from-bottom', {y:50});
    TweenMax.staggerTo('.from-bottom', 0.5, {opacity:1,y:0,ease:Power3.easeOut,delay:0.5}, 0.1);
    TweenMax.staggerTo('.fadeIn', 0.8, {opacity:1,ease:Power3.easeOut,delay:1.2}, 0.1);

    // Hide arrow down when page is scrolling
    myScroll.on('scrollStart', function(){
    	TweenMax.to('.arrow-down', 0.25, {opacity:0});
    });
    myScroll.on('scrollEnd', function(){
    	TweenMax.to('.arrow-down', 0.25, {opacity:1});
    });

    // arrow-link trigger first scroll : 
    $('body').on('click', '.cta a', function(){
    	myScroll.scrollToElement(document.querySelector('#scroller #first'), 1000);
    	TweenMax.to('.arrow-down', 0.25, {opacity:1});
    });

    // arrow down behaviour :
    $('body').on('click', '.arrow-down', function(){
    	var winH = $(window).height();

    });
});

