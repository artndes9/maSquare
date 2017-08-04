/**
 * Created by the, rogue Pixxel on 07/26/2017.
 */
$(document).ready(function(){


    var owl = $('#homeCarousel');

    owl.owlCarousel({
        items: 1,
        loop: true,
        nav: true,
        dots: false,
        navText:["<span class='fa fa-chevron-left'>","<span class='fa fa-chevron-right'>"] 
    });


    owl.on('initialize.owl.carousel initialized.owl.carousel changed.owl.carousel',
        function (){
            var slide = $('#homeCarousel .owl-item .text').children();
            TweenMax.killAll();
            tween(slide)
        }
    );
    $('#clientsCarousel').owlCarousel({
        autoplay:true,
        items:5,
        nav:false,
        margin:40,
        dots:false
    });
    function tween(slide) {
        TweenMax.staggerFromTo(slide, 1, {opacity: 0, y: 80}, {opacity: 1, y:0}, 0.1);
    }
    tween($('.owl-item.active .text').children());


    var $featureItem = $('.featureItem');
    TweenMax.set($('.featureIcon'), {y:50});
    TweenMax.set($('.featureDescription'), {y:50});
    TweenMax.set($(this).find('.teammateImg .overlay'),{y:'-50%', opacity:0});
    TweenMax.set($(this).find('.teammateAbout'),{y:-100, opacity:0});

    $featureItem.hover(
        function(){
            TweenMax.to($(this).find('.featureIcon'), .4, {y:0}),
            TweenMax.to($(this).find('.material-icons'), .4, {color:'#fff'}),
            TweenMax.to($(this).find('.featureDescription'), .4, {y:0, scale:1})
        },function(){
            TweenMax.to($(this).find('.featureIcon'), .4, {y:50}),
            TweenMax.to($(this).find('.material-icons'), .4, {color:''}),
            TweenMax.to($(this).find('.featureDescription'), .4, {y:50, scale:0})
        }
    );


    var rellax = new Rellax('.rellax');

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