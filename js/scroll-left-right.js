
    const element = document.getElementById( "carousel-of-images" );

    const getImageWidth = () => document.getElementById( "slide-1" ).getBoundingClientRect().width;

    setTimeout( () => element.scrollBy( getImageWidth() * 1.5, 0 ), 500 );

    document.getElementById( "left-arrow" ).addEventListener( "click", function() {

        element.scrollBy( getImageWidth() * -1.5, 0 );

    } );

    document.getElementById( "right-arrow" ).addEventListener( "click", function() {

        element.scrollBy( getImageWidth() * 1.5, 0 );

    } );