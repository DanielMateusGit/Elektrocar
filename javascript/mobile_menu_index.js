var menu_mobile = (function(){

    var navigazione = document.querySelector("#pannello-mobile");
    var pulsanteApertura = document.querySelector(".open");
    var pulsanteChiusura = document.querySelector(".close");
    var lista = document.querySelectorAll(".mobile-link");


    pulsanteApertura.addEventListener("click", function() {
        navigazione.classList.remove("invisible");
    });   

    pulsanteChiusura.addEventListener("click", function() {
        navigazione.classList.add("invisible");
    });


    for( var i = 0 ; i < lista.length; i++ ){

        lista[i].addEventListener("click", function() {
            navigazione.classList.add("invisible");
        });
    
    }

 })();