
var myScroll,
	iOS = false,
    p = navigator.platform;

function loaded () {
	myScroll = new IScroll('#scroller', { 
		mouseWheel: true, 
		click: true
	});
}

document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);

$( document ).ready(function(){
	var isMobile = window.matchMedia('only screen and (max-width: 760px)');

    if (isMobile.matches) {
        //Conditional script here
        console.log('It\'s Mobile !');
        $('body').addClass('mobile');
        setTimeout(function () {
		  // myScroll.scrollBy(0, -1);
		}, 800);
    } else {
        console.log('It\'s Not Mobile!');
    }

	// Detect if iOS and asign class
	if( p === 'iPad' || p === 'iPhone' || p === 'iPod' ){
		iOS = true;
	}
	if ( iOS === true ) {
		$('.share').addClass('icon-share');
	} else {
		console.log('not iOS');
	}

	$('.landing h4, .landing h1, .slide#first .watch').addClass('from-bottom');
	$('.landing p, .cta').addClass('fadeIn');

});

$( window ).load(function() {
	// console.dir(myScroll.options);
	loaded();

    //  Landing part animation : 
    TweenMax.set('.from-bottom', {y:50});
    TweenMax.staggerTo('.from-bottom', 0.5, {opacity:1,y:0,ease:Power3.easeOut,delay:0.5}, 0.1);
    TweenMax.staggerTo('.fadeIn', 0.8, {opacity:1,ease:Power3.easeOut,delay:1.2}, 0.1);

    // Hide arrow down when page is scrolling
    myScroll.on('scrollStart', function(){ TweenMax.to('.arrow-down', 0.25, {opacity:0}); });
    myScroll.on('scrollEnd', function(){ TweenMax.to('.arrow-down', 0.25, {opacity:1}); });

    // arrow-link trigger first scroll : 
    $('body').on('click', '.cta a', function(){
    	myScroll.scrollToElement(document.querySelector('#scroller #first'), 1000);
    	setTimeout(function(){TweenMax.to('.arrow-down', 0.25, {opacity:1});}, 500);
    });

    // arrow down behaviour :
    $('body').on('click', '.arrow-down', function(){
    	var my = {
    		slideH : ( $('#first').height() + 30 ) * -1,
			landingH : ( $('.landing').height() + 30 ) * -1,
			topOffset : $('#scroller > div').offset().top
    	};
    		
    	console.log(my.slideH, my.landingH, my.topOffset);

    	if ( my.topOffset > my.landingH ) {
    		// move to the first 
    		myScroll.scrollToElement(document.querySelector('#scroller #first'), 800, null, true);
    	} else if ( my.topOffset <= my.landingH && my.topOffset > (my.slideH + my.landingH) ) {
    		// move to the second one
    		myScroll.scrollToElement(document.querySelector('#scroller .slide:nth-child(3)'), 800, null, true);
    	} else if ( my.topOffset <= (my.slideH + my.landingH) && my.topOffset > ((my.slideH*2) + my.landingH) ) {
    		// move to third
    		myScroll.scrollToElement(document.querySelector('#scroller .slide:nth-child(4)'), 800, null, true);
    	} else if ( my.topOffset <= ((my.slideH*2) + my.landingH) && my.topOffset > ((my.slideH*3) + my.landingH) ) {
    		// move to fourth
    		myScroll.scrollToElement(document.querySelector('#scroller .slide:nth-child(5)'), 800, null, true);
    	} else if ( my.topOffset <= ((my.slideH*3) + my.landingH) && my.topOffset > ((my.slideH*4) + my.landingH) ) {
    		// move to fourth
    		myScroll.scrollToElement(document.querySelector('#scroller .slide.last'), 800, null, null);
    		TweenMax.to('.arrow-down', 0.25, {opacity:1});
    	}
    });
});

