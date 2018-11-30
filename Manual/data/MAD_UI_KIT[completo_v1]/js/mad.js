
               
    var loader = function() {

        $("<div id='modal-load'>").prependTo('body');

        $("<div class='overloader'><div class='txt_load'>Cargando...</div></div>").appendTo('#modal-load');
            var pageLimit = 9;

            $("<div>")
              .addClass("sk-cube-grid")
              .prependTo(".overloader");

            for (var i = 1; i <= pageLimit; i++) {
                $("<div>")
                    .addClass("sk-cube sk-cube" + i)
                    .appendTo(".sk-cube-grid");
            }

    };


    var removeloader = function() {

        $('#modal-load').remove();

    };




var btnsDropdowns = (function(){
  
    $( ".btn-group" ).each(function() {
        
      var $thisDrop = $( this );
 
      $thisDrop.click(function() {
        $thisDrop.find( ".dropdown-menu" ).toggleClass( "selected");
        
      });
    });
    
})();


var popUpsEmbebed = (function(){
    
    $('div[data-popup], button[data-popup], span[data-popup]').each(function(idx){
        
       var popdata = $(this).data('popup');
       var tooltitulo = $(this).data('popup-titulo');
       var toolcontenido = $(this).data('popup-cont');
        
        
        function popCont(){
            
            $("<div class='popover " + idx + "' id='" + popdata + "'><div class='arrow'></div><div class='btn-close "+ idx +"'><div class='fa fa-close'></div></div><h3 class='popover-title'>" + tooltitulo + "</h3><div class='popover-content'><p>" + toolcontenido + "</p></div></div>").appendTo('body');
            
            $(".popover .btn-close").click(function(){
                
                    $(this).parent().remove();

            });
        }
   
        
        $( this ).click(function() {
            

          switch ( popdata ) {
            case 'normal' :
                   
                  
              break;
            case 'arriba' :
                  
                  popCont();
                  
                  TweenLite.to( ".popover#arriba" , 0.4, { top:'4%', opacity: 1, display: 'block', ease: Sine.easeIn });
                  
            
              break;
            case 'abajo' :
                  
                 popCont();
                  
                TweenLite.to( '.popover#abajo' , 0.4, { bottom:'4%', opacity: 1, display: 'block', ease: Sine.easeIn });

              break;
            case 'derecha' :
                  
                popCont();
                  
                TweenLite.to( '.popover#derecha' , 0.4, { right:'4%', opacity: 1, display: 'block', ease: Sine.easeIn });
              
              break;
                  
            case 'izquierda' :
                  
                 popCont();
                  
                TweenLite.to( '.popover#izquierda' , 0.4, { left:'4%', opacity: 1, display: 'block', ease: Sine.easeIn });
              
              break;
            case 'modal' :

                  $("<div id ='temp-modal' class='bkg-modal'><div class='popover popcenter' id='center'><div class='btn-close'><div class='fa fa-close'></div></div><h3 class='popover-title'>" + tooltitulo + "</h3><div class='popover-content'><p>" + toolcontenido + "</p></div></div></div>").appendTo('body');
                  
                  TweenLite.to('.popover#center', 0.4, { top:'40%',display: 'block', ease: Sine.easeIn });
                  
                  
                  $('.bkg-modal, #btn-close').click(function() {
                      SetTimeextendBtn(this);
                    });

                    function SetTimeextendBtn() {
                      $('#temp-modal').remove();
                    }
                                    
              break;
          }

        });
         
    });
    
    
})();


var toolTips = (function(){
    
 
    
    $( 'div[data-tooltip], button[data-tooltip], span[data-tooltip]' ).each(function() {
        
        var tooldata = $(this).data('tooltip');
    
        $(this).hover(function(e) {
            
            $(this).append("<div class='pop-up'>" + tooldata + "</div>");
            
        }, function() {
            
            $('.pop-up' ).remove();
            
        });


        
    });
    
    
})();


var tabs = (function(){
    
        $("#tabs").tabs({
            activate: function (event, ui) {
                var active = $('#tabs').tabs('option', 'active');
               
            }
        }

    );
    
})();