$( document ).ready(function(){
	var isMobile = window.matchMedia('only screen and (max-width: 760px)');

    if (isMobile.matches) {
        //Conditional script here
        console.log('It\'s Mobile !');
    } else {
        console.log('It\'s Not !');
    }
});