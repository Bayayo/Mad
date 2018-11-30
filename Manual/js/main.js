window.onload = function() {
    
    hiddenAllcontent();
    loader();
    
    setTimeout( function () {
            iniciaApp();
        }, 1000);
    
};

var hiddenAllcontent = function(){
    
    $('#kit ,#componentes ,#documentacion ,#reglas ,#colores, #funciones').addClass('hidden');

    
}


var iniciaApp = function () {
    
        removeloader();
        
        initTl = new TimelineMax();
    
        initTl
            .to("header", 0.7, { top:0, display: 'block', ease: Sine.easeIn })
            .to("#kit", 0.2, { top:0, className:'-=hidden', ease: Sine.easeIn })
            .to(".imagotipo", 0.3, { opacity: 1, marginTop: "50px", ease: Sine.easeIn })
            .to(".index", 0.3, { opacity: 1, marginTop: "0px", ease: Sine.easeIn })
            .to("#boxInicial", 0.3, { opacity: 1, className:'-=hidden' , marginTop: "0px", ease: Sine.easeIn });
                  
};




var navButtons = (function(){
    
    
    
    $('header nav ul li').click(function () {

            hiddenAllcontent();
        
            var index = $(this).index();

            switch (index) {
                case 0:
                    $("#kit").removeClass('hidden');

                break;

                case 1:
                    $("#documentacion").removeClass('hidden');
                    
                    break;
                    
                case 2:
                    $("#componentes").removeClass('hidden');

                 break;
                    
                 case 3:
                    $("#reglas").removeClass('hidden');

                 break;
                    
                 case 4:
                    $("#colores").removeClass('hidden');

                 break;
                    
                 case 5:
                    $("#funciones").removeClass('hidden');

                 break;
     

                default:
                    break;
            }
        });
})();
