$(function(){
    $('.gnb').hover(function(){
        $(this).find('.lnb').stop().slideToggle();
        $('.background').stop().slideToggle();
    });

    $('.slidein').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
      });
}); // jquery