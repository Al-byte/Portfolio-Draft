$(document).ready(function() {
    $("#work-btn").hover(function() {
       $('.fa-caret-right').toggleClass('flip');
    });
    $("#work-btn").click(function(){            
        $('html, body').animate({
                scrollTop: $("#about-container").position().top-50
            }, 1000);
    });
    $('.navbar-nav>li>a').on('click', function(){
        $('.navbar-collapse').collapse('hide');
    });
    $("#nav-home").click(function(){            
        $('html, body').animate({
                scrollTop: $("#home").position().top-50
            }, 1000);
    })
    $("#nav-about").click(function(){            
        $('html, body').animate({
                scrollTop: $("#about-container").position().top-50
            }, 1000);
    });
    $("#nav-portfolio").click(function(){            
        $('html, body').animate({
                scrollTop: $("#portfolio").position().top-70
            }, 1000);
    });
    $("#nav-contact").click(function(){            
        $('html, body').animate({
                scrollTop: $("#contact").position().top-50
            }, 1000);
    });
    $("#top-icon").click(function(){            
        $('html, body').animate({
                scrollTop: $("#home").position().top-50
            }, 1000);
    });
    $("#thumb-1, #thumb-2, #thumb-3, #thumb-4, #thumb-5, #thumb-6").mouseenter(function(){
        $(this).find('.text').animate({top: '+=35%'}, '200');
        $(this).find('button').animate({bottom: '+=25%'}, '200');
      });
    $("#thumb-1, #thumb-2, #thumb-3, #thumb-4, #thumb-5, #thumb-6").mouseleave(function(){
        $(this).find('.text').animate({top: '-=35%'}, '200');
        $(this).find('button').animate({bottom: '-=25%'}, '200');
      });
})
