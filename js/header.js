$(function () {
    $('.burger').on('click', function () {
        if ($(window).width() < 922) {
            // $('.head_list').slideToggle();
            $('.head_left').toggleClass('active');
        }
    })

    $('.h-b-style').on('click', function () {
        // console.log($(window).width())
        if ($(window).width() > 922) {
            $(this).find('ul').slideToggle();
        } else {
            $(this).find('ul').fadeToggle();
        }
    })
})