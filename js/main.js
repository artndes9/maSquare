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
        }
    );
    var $featureItem = $('.featureItem');
    TweenMax.set($('.featureIcon'), {y:50});
    TweenMax.set($('.featureDescription'), {y:100});
    $featureItem.hover(
        function(){
            // $(this).toggleClass("active");
            TweenMax.to($(this).find('.featureIcon'), .4, {y:0}),
            TweenMax.to($(this).find('.material-icons'), .4, {color:'#fff'}),
            TweenMax.to($(this).find('.featureDescription'), .4, {y:0, scale:1})
        },function(){
            TweenMax.to($(this).find('.featureIcon'), .4, {y:50}),
            TweenMax.to($(this).find('.material-icons'), .4, {color:''}),
            TweenMax.to($(this).find('.featureDescription'), .4, {y:100, scale:0})
        }
    );
});