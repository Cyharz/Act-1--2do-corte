// Activador de jQuery - Función principal de jQuery
$(document).ready(function(){

    // Funciones de Abrir y Cerrar el Menú Responsive
    $('a#abrir-menu').click(function(){
        $('aside#menu-moviles').animate({
            right: 0
        },500,'easeOutExpo');

        $('a#abrir-menu').hide();
        $('a#cerrar-menu').show();

        event.preventDefault();
    });

    $('a#cerrar-menu, aside#menu-moviles nav a').click(function(){
        $('aside#menu-moviles').animate({
            right: -290
        },1000,'easeOutElastic');

        $('a#abrir-menu').show();
        $('a#cerrar-menu').hide();

        event.preventDefault();
    });
    
    // Activación de Slick Slider
    $('.slick-slider').slick({
        autoplay: true,
        fade: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 300,
        arrows: true
    });
    

});