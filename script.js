$('.menu-btn').on('click', function(e){
    e.preventDefault;
    $(this).toggleClass('active');
    $('.header__menu').toggleClass('active');
    $('body').toggleClass('lock');
});