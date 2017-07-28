/**
 * Created by the, rogue Pixxel on 07/26/2017.
 */
$(document).ready(function(){


    var owl = $('.owl-carousel');

    owl.owlCarousel({
        items: 1,
        loop: true,
        nav: true,
        dots: false
    });


    owl.on('initialize.owl.carousel initialized.owl.carousel changed.owl.carousel',
        function (){
            var slide = $('.owl-item .text').children();
            TweenMax.killAll();
            tween(slide)
        }
    );
    function tween(slide) {
        TweenMax.staggerFromTo(slide, 1, {opacity: 0, y: 80}, {opacity: 1, y:0}, 0.2)
    }
    tween($('.owl-item.active .text').children());

    var $serviceLogo = $('.serviceItem');
    $serviceLogo.hover(
        function(){
            console.log($(this).find('.wrap>.icon'));
            $(this).toggleClass("active");
            // TweenMax.fromTo($(this).children('.wrap>.icon'), .8, {scale: 1.5, opacity : 0}, {scale:1, opacity:1});
        }
    );



    $(window).on('scroll', function(e) {

        if( $(this).scrollTop()  > 32) {
            $('body').addClass('fixed-nav');
            $('.navbar').addClass('fixed-top');
        } else {
            $('body').removeClass('fixed-nav');            
            $('.navbar').removeClass('fixed-top');
        }

    });

});