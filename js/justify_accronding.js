$(function () {
    $('.box').click(function () {
        $('.box').removeClass('active');
        $(this).toggleClass('active');

        let num = $(this).attr('data-title');
        $('.tab-inner').fadeOut();
        setTimeout(function () {
            $('.tab-inner').eq(num).fadeIn();
        }, 500);
    });
    $('.box').first().click();
})