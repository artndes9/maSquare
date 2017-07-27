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
        function (e){
        var slide = $('.owl-item.active .text').children();
            console.log(slide);            
            tween(e, slide)
        }
    );
    function tween(e, slide) {
        TweenMax.staggerFromTo(slide, 1, {opacity: 0, y: 80}, {opacity: 1, y:0}, 0.2)
    }
});