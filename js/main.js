/**
 * Created by the, rogue Pixxel on 07/26/2017.
 */
$(document).ready(function(){


    var owl = $('#homeCarousel');

    owl.owlCarousel({
        items: 1,
        loop: true,
        nav: true,
        dots: false
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
    var $teamMate = $('.teammate');
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
    $teamMate.hover(
        function(){
            TweenMax.to($(this).find('.teammateImg .overlay'), 1, {y:'0%', opacity:1}),
            TweenMax.staggerTo($(this).find('.teammateDetails').children(), .4, {y:-100, color:'#fff'}, .2),
            TweenMax.to($(this).find('.teammateAbout'), .8, {y:-50, opacity:1, ease: CustomEase.create("custom", "M0,0,C0,0,0.454,-0.001,0.602,0.01,0.765,0.022,0.776,0.204,0.822,0.366,0.924,0.726,1,1,1,1")})
        },function(){
            TweenMax.to($(this).find('.teammateImg .overlay'), .4, {y:'-50%', opacity:0}),
            TweenMax.staggerTo($(this).find('.teammateDetails').children(), .4, {y:0, color:''}, .2),
            TweenMax.to($(this).find('.teammateAbout'), .4, {y:-100, opacity:0})
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