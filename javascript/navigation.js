

var navigation = (function(){

    var navigazione = document.querySelector("#navigazione");
    var informazioni = document.querySelector(".lista-informazioni");
    var titoloinformazioni = document.querySelector(".black");
    var locationTitle = document.querySelector(".location");

    window.onscroll = function() {

        if (document.body.scrollTop > 350 || document.documentElement.scrollTop > 350) {
            navigazione.classList.remove("invisible");
            titoloinformazioni.classList.remove("invisible");
            informazioni.classList.remove("invisible");
        }else{
            navigazione.classList.add("invisible");
        }
        
        if(document.body.scrollTop > 900 || document.documentElement.scrollTop > 900){
            locationTitle.classList.remove("invisible");
        }

    }

 })();

