$(document).ready(function () {
    // aside begin
    $('.showMenu').on('click', function () {       
        $('.aside, .main').toggleClass('active');
    });

    $('.closeMenu').on('click', function () {
        $('.aside, .main').removeClass('active');
    });
    // aside end

    // heart begin
    $('.heart>i').on('click',function () {
        $(this).toggleClass('fas')
    });
    // heart end

});


