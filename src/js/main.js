
$(".btn-menu").on('click', function(e) {
    e.preventDefault();
    $(this).toggleClass("active");
    $(".menu-navigation-wrap").toggleClass('show-menu');
    $("body").toggleClass('overflow-hidden');
});

$('.menu-navigation-wrap a').click(function(){
    $('.btn-menu').removeClass("active");
    $(".menu-navigation-wrap").removeClass('show-menu');
    $("body").removeClass('overflow-hidden');
});

$( function() {
    $( "#tabs" ).tabs();
} );

$('.slider-blog').slick({
    dots: true,
    prevArrow: $('.prev'),
    nextArrow: $('.next'),
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        }
    ]
});