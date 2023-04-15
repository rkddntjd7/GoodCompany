$(function(){
    $('.gnb').hover(function(){
        $(this).find('.lnb').stop().slideToggle();
        $('.background').stop().slideToggle();
    });
}); // jquery