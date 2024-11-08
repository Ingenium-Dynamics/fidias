$(document).ready(function() {
    // Efecto de entrada cuando la tarjeta es visible en el viewport
    $(window).on('scroll', function() {
        $('.salsa-card').each(function() {
            if ($(this).offset().top < $(window).scrollTop() + $(window).height()) {
                $(this).addClass('show-card');
            }
        });
    });

    // Efecto de zoom para la imagen cuando el cursor está encima
    $('.card').hover(
        function() {
            $(this).find('.card-img-top').css('transform', 'scale(1.1)');
        },
        function() {
            $(this).find('.card-img-top').css('transform', 'scale(1)');
        }
    );
});