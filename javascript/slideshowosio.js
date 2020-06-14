


var slideshow = (function(){

    slideshow();

    
    var numeroFotografia = 0;

    function slideshow(){

        // Condizione di cambio
        if( numeroFotografia < 1 )
            numeroFotografia++;
        else   
            numeroFotografia  = 0;

        // Variables
        var photoSlider = document.querySelector('#photoSlider');

        // Change 
        photoSlider.style.backgroundImage = 'url("source/slideshow_osio/'+ numeroFotografia + '.jpg")';

        setTimeout(slideshow, 3000); // Change image every 2 seconds
    
    }


 })();

    
