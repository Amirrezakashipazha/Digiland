$(document).ready(function () {

    if ($(window).scrollTop() <= 50) {
        $('.nav').css({
            'position': 'fixed',
            'top': '90px',
            'transition': '0s'
        });
    } else {
        $('.nav').css({ //برای اینکه تو رفرش نپره بیاد بالا
            'position': 'fixed',
            'top': '0px',
            'transition': ' 0.0s'
        });
    }

    $(window).scroll(function () {

        if ($(window).scrollTop() >= 140 && $(window).scrollTop() <= 200) {
            $('.nav').css({
                'position': 'fixed',
                'top': '-43px',
                'transition': '0s'
            });
        } else if ($(window).scrollTop() >= 201) {
            $('.nav').css({
                'position': 'fixed',
                'top': '0px',
                'transition': ' 0.3s'
            });
        } else if ($(window).scrollTop() <= 201) {
            $('.nav').css({
                'position': 'absolute',
                'top': '100px',
                'transition': '0s'
            });
        }

        if ($(window).scrollTop() >= 600) {
            $('.return-to-top').css('display', 'inline');
        } else if ($(window).scrollTop() < 600) {
            $('.return-to-top').css('display', 'none');
        }
    });

    $('#i-1').click(function () {
        if ($('.ul-mobile').css('display') == 'none') {
            $('.ul-mobile').slideDown();
            $('#i-1').removeClass('fa fa-plus');
            $('#i-1').addClass('fa fa-minus');
        } else {
            $('.ul-mobile').slideUp();
            $('#i-1').removeClass('fa fa-minus');
            $('#i-1').addClass('fa fa-plus');
        }
    });
    $('#i-2').click(function () {
        if ($('.ul-tablet').css('display') == 'none') {
            $('.ul-tablet').slideDown();
            $('#i-2').removeClass('fa fa-plus');
            $('#i-2').addClass('fa fa-minus');

        } else {
            $('.ul-tablet').slideUp();
            $('#i-2').removeClass('fa fa-minus');
            $('#i-2').addClass('fa fa-plus');
        }
    });
    $('#i-3').click(function () {
        if ($('.ul-laptop').css('display') == 'none') {
            $('.ul-laptop').slideDown();
            $('#i-3').removeClass('fa fa-plus');
            $('#i-3').addClass('fa fa-minus');

        } else {
            $('.ul-laptop').slideUp();
            $('#i-3').removeClass('fa fa-minus');
            $('#i-3').addClass('fa fa-plus');
        }
    });
    $('#i-4').click(function () {
        if ($('.ul-gajet').css('display') == 'none') {
            $('.ul-gajet').slideDown();
            $('#i-4').removeClass('fa fa-plus');
            $('#i-4').addClass('fa fa-minus');



        } else {
            $('.ul-gajet').slideUp();
            $('#i-4').removeClass('fa fa-minus');
            $('#i-4').addClass('fa fa-plus');
        }
    });
    $('#i-1-child-4').click(function () {
        if ($('.ul-child-1-gajet').css('display') == 'none') {
            $('.ul-child-1-gajet').slideDown();
            $('#i-1-child-4').removeClass('fa fa-plus');
            $('#i-1-child-4').addClass('fa fa-minus');
        } else {
            $('.ul-child-1-gajet').slideUp();
            $('#i-1-child-4').removeClass('fa fa-minus');
            $('#i-1-child-4').addClass('fa fa-plus');
        }
    });
    $('#i-2-child-4').click(function () {

        if ($('.ul-child-2-gajet').css('display') == 'none') {
            $('.ul-child-2-gajet').slideDown();
            $('#i-2-child-4').removeClass('fa fa-plus');
            $('#i-2-child-4').addClass('fa fa-minus');
        } else {
            $('.ul-child-2-gajet').slideUp();
            $('#i-2-child-4').removeClass('fa fa-minus');
            $('#i-2-child-4').addClass('fa fa-plus');
        }
    });
    $('#i-5').click(function () {
        if ($('.ul-console').css('display') == 'none') {
            $('.ul-console').slideDown();
            $('#i-5').removeClass('fa fa-plus');
            $('#i-5').addClass('fa fa-minus');

        } else {
            $('.ul-console').slideUp();
            $('#i-5').removeClass('fa fa-minus');
            $('#i-5').addClass('fa fa-plus');
        }
    });
    $('#i-1-child-5').click(function () {
        if ($('.ul-child-1-console').css('display') == 'none') {
            $('.ul-child-1-console').slideDown();
            $('#i-1-child-5').removeClass('fa fa-plus');
            $('#i-1-child-5').addClass('fa fa-minus');
        } else {
            $('.ul-child-1-console').slideUp();
            $('#i-1-child-5').removeClass('fa fa-minus');
            $('#i-1-child-5').addClass('fa fa-plus');
        }
    });
    $('#i-2-child-5').click(function () {

        if ($('.ul-child-2-console').css('display') == 'none') {
            $('.ul-child-2-console').slideDown();
            $('#i-2-child-5').removeClass('fa fa-plus');
            $('#i-2-child-5').addClass('fa fa-minus');
        } else {
            $('.ul-child-2-console').slideUp();
            $('#i-2-child-5').removeClass('fa fa-minus');
            $('#i-2-child-5').addClass('fa fa-plus');
        }
    });
    $('#i-6').click(function () {
        if ($('.ul-lavazem').css('display') == 'none') {
            $('.ul-lavazem').slideDown();
            $('#i-6').removeClass('fa fa-plus');
            $('#i-6').addClass('fa fa-minus');

        } else {
            $('.ul-lavazem').slideUp();
            $('#i-6').removeClass('fa fa-minus');
            $('#i-6').addClass('fa fa-plus');
        }
    });
    $('#i-1-child-6').click(function () {
        if ($('.ul-1-child-child').css('display') == 'none') {
            $('.ul-1-child-child').slideDown();
            $('#i-1-child-6').removeClass('fa fa-plus');
            $('#i-1-child-6').addClass('fa fa-minus');
        } else {
            $('.ul-1-child-child').slideUp();
            $('#i-1-child-6').removeClass('fa fa-minus');
            $('#i-1-child-6').addClass('fa fa-plus');
        }
    });
    $('#i-2-child-6').click(function () {
        if ($('.ul-2-child-child').css('display') == 'none') {
            $('.ul-2-child-child').slideDown();
            $('#i-2-child-6').removeClass('fa fa-plus');
            $('#i-2-child-6').addClass('fa fa-minus');
        } else {
            $('.ul-2-child-child').slideUp();
            $('#i-2-child-6').removeClass('fa fa-minus');
            $('#i-2-child-6').addClass('fa fa-plus');
        }
    });
    $('#i-3-child-6').click(function () {
        if ($('.ul-3-child-child').css('display') == 'none') {
            $('.ul-3-child-child').slideDown();
            $('#i-3-child-6').removeClass('fa fa-plus');
            $('#i-3-child-6').addClass('fa fa-minus');
        } else {
            $('.ul-3-child-child').slideUp();
            $('#i-3-child-6').removeClass('fa fa-minus');
            $('#i-3-child-6').addClass('fa fa-plus');
        }
    });
    $('#i-4-child-6').click(function () {
        if ($('.ul-4-child-child').css('display') == 'none') {
            $('.ul-4-child-child').slideDown();
            $('#i-4-child-6').removeClass('fa fa-plus');
            $('#i-4-child-6').addClass('fa fa-minus');
        } else {
            $('.ul-4-child-child').slideUp();
            $('#i-4-child-6').removeClass('fa fa-minus');
            $('#i-4-child-6').addClass('fa fa-plus');
        }
    });
    $('#i-5-child-6').click(function () {
        if ($('.ul-5-child-child').css('display') == 'none') {
            $('.ul-5-child-child').slideDown();
            $('#i-5-child-6').removeClass('fa fa-plus');
            $('#i-5-child-6').addClass('fa fa-minus');
        } else {
            $('.ul-5-child-child').slideUp();
            $('#i-5-child-6').removeClass('fa fa-minus');
            $('#i-5-child-6').addClass('fa fa-plus');
        }
    });
    $('#i-6-child-6').click(function () {
        if ($('.ul-6-child-child').css('display') == 'none') {
            $('.ul-6-child-child').slideDown();
            $('#i-6-child-6').removeClass('fa fa-plus');
            $('#i-6-child-6').addClass('fa fa-minus');
        } else {
            $('.ul-6-child-child').slideUp();
            $('#i-6-child-6').removeClass('fa fa-minus');
            $('#i-6-child-6').addClass('fa fa-plus');
        }
    });
    $('#i-7').click(function () {
        if ($('.ul-tv').css('display') == 'none') {
            $('.ul-tv').slideDown();
            $('#i-7').removeClass('fa fa-plus');
            $('#i-7').addClass('fa fa-minus');

        } else {
            $('.ul-tv').slideUp();
            $('#i-7').removeClass('fa fa-minus');
            $('#i-7').addClass('fa fa-plus');
        }
    });


    $('.d-child-maghalat-bazdid1').hover(function () {
        $('.img-scal1').css({
            'transition': ' all 0.3s',
            'transform': 'scale(1.15)'
        });
    }, function () {
        $('.img-scal1').css({
            'transition': ' all 0.3s',
            'transform': 'scale(1)'
        });
    });
    $('.d-child-maghalat-bazdid2').hover(function () {
        $('.img-scal2').css({
            'transition': ' all 0.3s',
            'transform': 'scale(1.15)'
        });
    }, function () {
        $('.img-scal2').css({
            'transition': ' all 0.3s',
            'transform': 'scale(1)'
        });
    });
    $('.d-child-maghalat-bazdid3').hover(function () {
        $('.img-scal3').css({
            'transition': ' all 0.3s',
            'transform': 'scale(1.15)'
        });
    }, function () {
        $('.img-scal3').css({
            'transition': ' all 0.3s',
            'transform': 'scale(1)'
        });
    });
    $('.d-child-maghalat-bazdid4').hover(function () {
        $('.img-scal4').css({
            'transition': ' all 0.3s',
            'transform': 'scale(1.15)'
        });
    }, function () {
        $('.img-scal4').css({
            'transition': ' all 0.3s',
            'transform': 'scale(1)'
        });
    });

    $('.d-imoji span').click(function () {
        let select_imoji = $(this).val();
        if (select_imoji == null) {
            console.log('خالی است');
        } else {
            $('textarea').val(select_imoji);
        }

    });

    $('.messege-poshtiban').css('left', '60px');

    $('#i-1-mobile').click(function () {
        if ($('.ul-mobile-mobile').css('display') == 'none') {
            $('.ul-mobile-mobile').slideDown();
            $('#i-1').removeClass('fa fa-plus');
            $('#i-1').addClass('fa fa-minus');
        } else {
            $('.ul-mobile-mobile').slideUp();
            $('#i-1').removeClass('fa fa-minus');
            $('#i-1').addClass('fa fa-plus');
        }
    });
    $('#i-2-mobile').click(function () {
        if ($('.ul-tablet-mobile').css('display') == 'none') {
            $('.ul-tablet-mobile').slideDown();
            $('#i-2').removeClass('fa fa-plus');
            $('#i-2').addClass('fa fa-minus');

        } else {
            $('.ul-tablet-mobile').slideUp();
            $('#i-2').removeClass('fa fa-minus');
            $('#i-2').addClass('fa fa-plus');
        }
    });
    $('#i-3-mobile').click(function () {
        if ($('.ul-laptop-mobile').css('display') == 'none') {
            $('.ul-laptop-mobile').slideDown();
            $('#i-3').removeClass('fa fa-plus');
            $('#i-3').addClass('fa fa-minus');

        } else {
            $('.ul-laptop-mobile').slideUp();
            $('#i-3').removeClass('fa fa-minus');
            $('#i-3').addClass('fa fa-plus');
        }
    });
    $('#i-4-mobile').click(function () {
        if ($('.ul-gajet-mobile').css('display') == 'none') {
            $('.ul-gajet-mobile').slideDown();
            $('#i-4').removeClass('fa fa-plus');
            $('#i-4').addClass('fa fa-minus');



        } else {
            $('.ul-gajet-mobile').slideUp();
            $('#i-4').removeClass('fa fa-minus');
            $('#i-4').addClass('fa fa-plus');
        }
    });
    $('#i-1-child-4-mobile').click(function () {
        if ($('.ul-child-1-gajet-mobile').css('display') == 'none') {
            $('.ul-child-1-gajet-mobile').slideDown();
            $('#i-1-child-4-mobile').removeClass('fa fa-plus');
            $('#i-1-child-4-mobile').addClass('fa fa-minus');
        } else {
            $('.ul-child-1-gajet-mobile').slideUp();
            $('#i-1-child-4-mobile').removeClass('fa fa-minus');
            $('#i-1-child-4-mobile').addClass('fa fa-plus');
        }
    });
    $('#i-2-child-4-mobile').click(function () {

        if ($('.ul-child-2-gajet-mobile').css('display') == 'none') {
            $('.ul-child-2-gajet-mobile').slideDown();
            $('#i-2-child-4-mobile').removeClass('fa fa-plus');
            $('#i-2-child-4-mobile').addClass('fa fa-minus');
        } else {
            $('.ul-child-2-gajet-mobile').slideUp();
            $('#i-2-child-4-mobile').removeClass('fa fa-minus');
            $('#i-2-child-4-mobile').addClass('fa fa-plus');
        }
    });
    $('#i-5-mobile').click(function () {
        if ($('.ul-console-mobile').css('display') == 'none') {
            $('.ul-console-mobile').slideDown();
            $('#i-5-mobile').removeClass('fa fa-plus');
            $('#i-5-mobile').addClass('fa fa-minus');

        } else {
            $('.ul-console-mobile').slideUp();
            $('#i-5-mobile').removeClass('fa fa-minus');
            $('#i-5-mobile').addClass('fa fa-plus');
        }
    });
    $('#i-1-child-5-mobile').click(function () {
        if ($('.ul-child-1-console-mobile').css('display') == 'none') {
            $('.ul-child-1-console-mobile').slideDown();
            $('#i-1-child-5-mobile').removeClass('fa fa-plus');
            $('#i-1-child-5-mobile').addClass('fa fa-minus');
        } else {
            $('.ul-child-1-console-mobile').slideUp();
            $('#i-1-child-5-mobile').removeClass('fa fa-minus');
            $('#i-1-child-5-mobile').addClass('fa fa-plus');
        }
    });
    $('#i-2-child-5-mobile').click(function () {

        if ($('.ul-child-2-console-mobile').css('display') == 'none') {
            $('.ul-child-2-console-mobile').slideDown();
            $('#i-2-child-5-mobile').removeClass('fa fa-plus');
            $('#i-2-child-5-mobile').addClass('fa fa-minus');
        } else {
            $('.ul-child-2-console-mobile').slideUp();
            $('#i-2-child-5-mobile').removeClass('fa fa-minus');
            $('#i-2-child-5-mobile').addClass('fa fa-plus');
        }
    });
    $('#i-6-mobile').click(function () {
        if ($('.ul-lavazem-mobile').css('display') == 'none') {
            $('.ul-lavazem-mobile').slideDown();
            $('#i-6-mobile').removeClass('fa fa-plus');
            $('#i-6-mobile').addClass('fa fa-minus');

        } else {
            $('.ul-lavazem-mobile').slideUp();
            $('#i-6-mobile').removeClass('fa fa-minus');
            $('#i-6-mobile').addClass('fa fa-plus');
        }
    });
    $('#i-1-child-6-mobile').click(function () {
        if ($('.ul-1-child-child-mobile').css('display') == 'none') {
            $('.ul-1-child-child-mobile').slideDown();
            $('#i-1-child-6-mobile').removeClass('fa fa-plus');
            $('#i-1-child-6-mobile').addClass('fa fa-minus');
        } else {
            $('.ul-1-child-child-mobile').slideUp();
            $('#i-1-child-6-mobile').removeClass('fa fa-minus');
            $('#i-1-child-6-mobile').addClass('fa fa-plus');
        }
    });
    $('#i-2-child-6-mobile').click(function () {
        if ($('.ul-2-child-child-mobile').css('display') == 'none') {
            $('.ul-2-child-child-mobile').slideDown();
            $('#i-2-child-6-mobile').removeClass('fa fa-plus');
            $('#i-2-child-6-mobile').addClass('fa fa-minus');
        } else {
            $('.ul-2-child-child-mobile').slideUp();
            $('#i-2-child-6-mobile').removeClass('fa fa-minus');
            $('#i-2-child-6-mobile').addClass('fa fa-plus');
        }
    });
    $('#i-3-child-6-mobile').click(function () {
        if ($('.ul-3-child-child-mobile').css('display') == 'none') {
            $('.ul-3-child-child-mobile').slideDown();
            $('#i-3-child-6-mobile').removeClass('fa fa-plus');
            $('#i-3-child-6-mobile').addClass('fa fa-minus');
        } else {
            $('.ul-3-child-child-mobile').slideUp();
            $('#i-3-child-6-mobile').removeClass('fa fa-minus');
            $('#i-3-child-6-mobile').addClass('fa fa-plus');
        }
    });
    $('#i-4-child-6-mobile').click(function () {
        if ($('.ul-4-child-child-mobile').css('display') == 'none') {
            $('.ul-4-child-child-mobile').slideDown();
            $('#i-4-child-6-mobile').removeClass('fa fa-plus');
            $('#i-4-child-6-mobile').addClass('fa fa-minus');
        } else {
            $('.ul-4-child-child-mobile').slideUp();
            $('#i-4-child-6-mobile').removeClass('fa fa-minus');
            $('#i-4-child-6-mobile').addClass('fa fa-plus');
        }
    });
    $('#i-5-child-6-mobile').click(function () {
        if ($('.ul-5-child-child-mobile').css('display') == 'none') {
            $('.ul-5-child-child-mobile').slideDown();
            $('#i-5-child-6-mobile').removeClass('fa fa-plus');
            $('#i-5-child-6-mobile').addClass('fa fa-minus');
        } else {
            $('.ul-5-child-child-mobile').slideUp();
            $('#i-5-child-6-mobile').removeClass('fa fa-minus');
            $('#i-5-child-6-mobile').addClass('fa fa-plus');
        }
    });
    $('#i-6-child-6-mobile').click(function () {
        if ($('.ul-6-child-child-mobile').css('display') == 'none') {
            $('.ul-6-child-child-mobile').slideDown();
            $('#i-6-child-6-mobile').removeClass('fa fa-plus');
            $('#i-6-child-6-mobile').addClass('fa fa-minus');
        } else {
            $('.ul-6-child-child-mobile').slideUp();
            $('#i-6-child-6-mobile').removeClass('fa fa-minus');
            $('#i-6-child-6-mobile').addClass('fa fa-plus');
        }
    });
    $('#i-7-mobile').click(function () {
        if ($('.ul-tv-mobile').css('display') == 'none') {
            $('.ul-tv-mobile').slideDown();
            $('#i-7-mobile').removeClass('fa fa-plus');
            $('#i-7-mobile').addClass('fa fa-minus');

        } else {
            $('.ul-tv-mobile').slideUp();
            $('#i-7-mobile').removeClass('fa fa-minus');
            $('#i-7-mobile').addClass('fa fa-plus');
        }
    });


    // let price = document.querySelector('.price-toman');
    // let namojod = document.querySelector('.namojod');
    // console.log(price.innerHTML);
    // console.log($('.price-toman').innerHTML);
    // if ($('.price-toman').innerHTML == "0 تومان") {
    //     $('.namojod').style.display = "flex";
    // }else{

    // }


    // let price = document.getElementById('price-toman').innerHTML;
    // let namojod = document.getElementById('namojod');
    // if (price == "0 تومان") {
    //     namojod.style.display = "inline";
    // }

});

function scroll_to_left() {

    document.querySelector('.slider-big').scrollBy({
        left: -900,
        behavior: 'smooth'
    });

}

function scroll_to_right() {

    document.querySelector('.slider-big').scrollBy({
        left: 900,
        behavior: 'smooth'
    });

}

function goright1() {
    document.querySelector('.apple-body-mahsolat').scrollBy({
        left: 904,
        behavior: 'smooth'
    });
}

function goleft1() {
    document.querySelector('.apple-body-mahsolat').scrollBy({
        left: -904,
        behavior: 'smooth'
    });
}

function goright2() {
    document.querySelector('.sumsung-body-mahsolat').scrollBy({
        left: 904,
        behavior: 'smooth'
    });
}

function goleft2() {
    document.querySelector('.sumsung-body-mahsolat').scrollBy({
        left: -904,
        behavior: 'smooth'
    });
}

function goright3() {
    document.querySelector('.xiaomi-body-mahsolat').scrollBy({
        left: 904,
        behavior: 'smooth'
    });
}

function goleft3() {
    document.querySelector('.xiaomi-body-mahsolat').scrollBy({
        left: -904,
        behavior: 'smooth'
    });
}

function goright4() {
    document.querySelector('.sayer-body-mahsolat').scrollBy({
        left: 904,
        behavior: 'smooth'
    });
}

function goleft4() {
    document.querySelector('.sayer-body-mahsolat').scrollBy({
        left: -904,
        behavior: 'smooth'
    });
}

function goright5() {
    document.querySelector('.hanz-body-mahsolat').scrollBy({
        left: 904,
        behavior: 'smooth'
    });
}

function goleft5() {
    document.querySelector('.hanz-body-mahsolat').scrollBy({
        left: -904,
        behavior: 'smooth'
    });
}

function goright6() {
    document.querySelector('.console-body-mahsolat').scrollBy({
        left: 904,
        behavior: 'smooth'
    });
}

function goleft6() {
    document.querySelector('.console-body-mahsolat').scrollBy({
        left: -904,
        behavior: 'smooth'
    });
}

function goright7() {
    document.querySelector('.spiker-body-mahsolat').scrollBy({
        left: 904,
        behavior: 'smooth'
    });
}

function goleft7() {
    document.querySelector('.spiker-body-mahsolat').scrollBy({
        left: -904,
        behavior: 'smooth'
    });
}

function goright8() {
    document.querySelector('.saat-body-mahsolat').scrollBy({
        left: 904,
        behavior: 'smooth'
    });
}

function goleft8() {
    document.querySelector('.saat-body-mahsolat').scrollBy({
        left: -904,
        behavior: 'smooth'
    });
}

function goright9() {
    document.querySelector('.laptop-body-mahsolat').scrollBy({
        left: 904,
        behavior: 'smooth'
    });
}

function goleft9() {
    document.querySelector('.laptop-body-mahsolat').scrollBy({
        left: -904,
        behavior: 'smooth'
    });
}

function return_top() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

function right_brand() {
    document.querySelector('.brands').scrollBy({
        left: 1200,
        behavior: 'smooth'
    });
}

function left_brand() {
    document.querySelector('.brands').scrollBy({
        left: -1200,
        behavior: 'smooth'
    });
}

function show_imoji() {
    let imoji = document.querySelector('.d-imoji');
    let check_width = window.innerWidth;
    if (check_width < 768) {
        if (imoji.style.bottom == '0px') {
            imoji.style.bottom = '-300px';
        } else {
            imoji.style.bottom = '0px';
        }
    } else if (check_width >= 768) {
        if (imoji.style.bottom == '0px') {
            imoji.style.bottom = '-320px';
        } else {
            imoji.style.bottom = '0px';
        }
    }

}

function show_safhe_chat() {
    document.querySelector('.safhe-call-poshtiban').style.bottom = '0';
}

function close_safhe_chat() {
    document.querySelector('.safhe-call-poshtiban').style.bottom = '-110%';
}

function submit_email() {
    let check = document.getElementById('checkbox_email');
    if (check.checked != true) {
        alert('هشدار: شما باید با حریم خصوصی موافقت نمایید!');
    }
}

function close_poshtiban() {
    document.querySelector('.messege-poshtiban').style.display = 'none';
}

function check_privicy() {
    let checkbox_email = document.querySelector('#checkbox_email');
    if (checkbox_email.checked == true) {
        checkbox_email.checked = false;
    } else {
        checkbox_email.checked = true;
    }
}

function close_peygham_harim_khososi() {
    document.querySelector('.d-father-peygham-harim-khososi').style.display = 'none';
    document.querySelector('body').style.overflowY = 'scroll';
}

function show_peygham_harim_khososi() {
    document.querySelector('.d-father-peygham-harim-khososi').style.display = 'flex';
    document.querySelector('body').style.overflowY = 'hidden';
}

function check_valid() {
    let val_input_val = document.querySelector('.input-peygiri').value;
    let erorr_input = document.querySelector('.error-input-peygiri');
    erorr_input.style.display = 'flex';
    if (isNaN(val_input_val) && val_input_val != '') {
        erorr_input.innerHTML = 'متاسفانه سفارشی بر اساس اطلاعات وارد شده یافت نشد!';
        erorr_input.style.color = '#a94442';
    } else if (val_input_val == '') {
        erorr_input.innerHTML = 'لطفاً اطلاعات درخواستی را وارد نمائید';
        erorr_input.style.color = '#a94442';
    } else if (!isNaN(val_input_val) && val_input_val.length == 11 && val_input_val[0] == 0) {
        erorr_input.innerHTML = 'پیگیری سفارش شما را در اسرع وقت به اطلاع شما میرسانیم';
        erorr_input.style.color = 'green';
    } else if (!isNaN(val_input_val) && val_input_val.length == 11 && val_input_val[0] !== 0) {
        erorr_input.innerHTML = 'متاسفانه سفارشی بر اساس اطلاعات وارد شده یافت نشد!';
        erorr_input.style.color = '#a94442';
    } else if (!isNaN(val_input_val) && val_input_val.length !== 11) {
        erorr_input.innerHTML = 'متاسفانه سفارشی بر اساس اطلاعات وارد شده یافت نشد!';
        erorr_input.style.color = '#a94442';
    }
    for (let i = 0; i < val_input_val.length; i++) {
        if (val_input_val[i] == '@') {
            erorr_input.innerHTML = 'پیگیری سفارش شما را در اسرع وقت به اطلاع شما میرسانیم';
            erorr_input.style.color = 'green';
        }
    }
}

function show_sabad_kharid_mobile() {
    document.querySelector('.sabad-kharid-mobile').style.left = '0';
    document.querySelector('.bg-dark').style.display = 'inline';
}

function close_everithing() {
    document.querySelector('.sabad-kharid-mobile').style.left = '-80%';
    document.querySelector('.burger-menu-mobile').style.right = '-100%';
    document.querySelector('.bg-dark').style.display = 'none';
}

function show_item_hame() {
    let show_item_hame = document.getElementById('toggle-menu');
    if (show_item_hame.style.display === 'inline') {
        show_item_hame.style.display = 'none';
    } else {
        show_item_hame.style.display = 'inline';
    }
}

function show_search_mobile() {

    let search_mobile = document.querySelector('.search-mobile');
    let show_item_hame2 = document.getElementById('toggle-menu');
    if (search_mobile.style.top == '62px') {
        search_mobile.style.top = '-100px';
        show_item_hame2.style.display = 'none';
    } else {
        search_mobile.style.top = '62px';
    }
}

function show_burger_menu() {
    document.querySelector('.burger-menu-mobile').style.right = '0';
    document.querySelector('.bg-dark').style.display = 'inline';
}

function close_burger_menu() {
    document.querySelector('.burger-menu-mobile').style.right = '-100%';
    document.querySelector('.bg-dark').style.display = 'none';
}

function write_imoji(code) {
    if (code == 1) {
        document.getElementById("text-area").value += document.getElementById("imoji-1").innerHTML;
    }
    if (code == 2) {
        document.getElementById("text-area").value += document.getElementById("imoji-2").innerHTML;
    }
    if (code == 3) {
        document.getElementById("text-area").value += document.getElementById("imoji-3").innerHTML;
    }
    if (code == 4) {
        document.getElementById("text-area").value += document.getElementById("imoji-4").innerHTML;
    }
    if (code == 5) {
        document.getElementById("text-area").value += document.getElementById("imoji-5").innerHTML;
    }
    if (code == 6) {
        document.getElementById("text-area").value += document.getElementById("imoji-6").innerHTML;
    }
    if (code == 7) {
        document.getElementById("text-area").value += document.getElementById("imoji-7").innerHTML;
    }
    if (code == 8) {
        document.getElementById("text-area").value += document.getElementById("imoji-8").innerHTML;
    }
    if (code == 9) {
        document.getElementById("text-area").value += document.getElementById("imoji-9").innerHTML;
    }
    if (code == 10) {
        document.getElementById("text-area").value += document.getElementById("imoji-10").innerHTML;
    }
    if (code == 11) {
        document.getElementById("text-area").value += document.getElementById("imoji-11").innerHTML;
    }
    if (code == 12) {
        document.getElementById("text-area").value += document.getElementById("imoji-12").innerHTML;
    }
    if (code == 13) {
        document.getElementById("text-area").value += document.getElementById("imoji-13").innerHTML;
    }
    if (code == 14) {
        document.getElementById("text-area").value += document.getElementById("imoji-14").innerHTML;
    }
    if (code == 15) {
        document.getElementById("text-area").value += document.getElementById("imoji-15").innerHTML;
    }
    if (code == 16) {
        document.getElementById("text-area").value += document.getElementById("imoji-16").innerHTML;
    }
    if (code == 17) {
        document.getElementById("text-area").value += document.getElementById("imoji-17").innerHTML;
    }
    if (code == 18) {
        document.getElementById("text-area").value += document.getElementById("imoji-18").innerHTML;
    }
    if (code == 19) {
        document.getElementById("text-area").value += document.getElementById("imoji-19").innerHTML;
    }
    if (code == 20) {
        document.getElementById("text-area").value += document.getElementById("imoji-20").innerHTML;
    }
    if (code == 21) {
        document.getElementById("text-area").value += document.getElementById("imoji-21").innerHTML;
    }
    if (code == 22) {
        document.getElementById("text-area").value += document.getElementById("imoji-22").innerHTML;
    }
    if (code == 23) {
        document.getElementById("text-area").value += document.getElementById("imoji-23").innerHTML;
    }
    if (code == 24) {
        document.getElementById("text-area").value += document.getElementById("imoji-24").innerHTML;
    }
    if (code == 25) {
        document.getElementById("text-area").value += document.getElementById("imoji-25").innerHTML;
    }
    if (code == 26) {
        document.getElementById("text-area").value += document.getElementById("imoji-26").innerHTML;
    }
    if (code == 27) {
        document.getElementById("text-area").value += document.getElementById("imoji-27").innerHTML;
    }
    if (code == 28) {
        document.getElementById("text-area").value += document.getElementById("imoji-28").innerHTML;
    }
    if (code == 29) {
        document.getElementById("text-area").value += document.getElementById("imoji-29").innerHTML;
    }
    if (code == 30) {
        document.getElementById("text-area").value += document.getElementById("imoji-30").innerHTML;
    }
    if (code == 31) {
        document.getElementById("text-area").value += document.getElementById("imoji-31").innerHTML;
    }
    if (code == 32) {
        document.getElementById("text-area").value += document.getElementById("imoji-32").innerHTML;
    }
    if (code == 33) {
        document.getElementById("text-area").value += document.getElementById("imoji-33").innerHTML;
    }
    if (code == 34) {
        document.getElementById("text-area").value += document.getElementById("imoji-34").innerHTML;
    }
    if (code == 35) {
        document.getElementById("text-area").value += document.getElementById("imoji-35").innerHTML;
    }
    if (code == 36) {
        document.getElementById("text-area").value += document.getElementById("imoji-36").innerHTML;
    }
    if (code == 37) {
        document.getElementById("text-area").value += document.getElementById("imoji-37").innerHTML;
    }
    if (code == 38) {
        document.getElementById("text-area").value += document.getElementById("imoji-38").innerHTML;
    }
    if (code == 39) {
        document.getElementById("text-area").value += document.getElementById("imoji-39").innerHTML;
    }
    if (code == 40) {
        document.getElementById("text-area").value += document.getElementById("imoji-40").innerHTML;
    }
    if (code == 41) {
        document.getElementById("text-area").value += document.getElementById("imoji-41").innerHTML;
    }
    if (code == 42) {
        document.getElementById("text-area").value += document.getElementById("imoji-42").innerHTML;
    }
    if (code == 43) {
        document.getElementById("text-area").value += document.getElementById("imoji-43").innerHTML;
    }
    if (code == 44) {
        document.getElementById("text-area").value += document.getElementById("imoji-44").innerHTML;
    }
    if (code == 45) {
        document.getElementById("text-area").value += document.getElementById("imoji-45").innerHTML;
    }
    if (code == 46) {
        document.getElementById("text-area").value += document.getElementById("imoji-46").innerHTML;
    }
    if (code == 47) {
        document.getElementById("text-area").value += document.getElementById("imoji-47").innerHTML;
    }
    if (code == 48) {
        document.getElementById("text-area").value += document.getElementById("imoji-48").innerHTML;
    }
    if (code == 49) {
        document.getElementById("text-area").value += document.getElementById("imoji-49").innerHTML;
    }
    if (code == 50) {
        document.getElementById("text-area").value += document.getElementById("imoji-50").innerHTML;
    }
    if (code == 51) {
        document.getElementById("text-area").value += document.getElementById("imoji-51").innerHTML;
    }
    if (code == 52) {
        document.getElementById("text-area").value += document.getElementById("imoji-52").innerHTML;
    }
    if (code == 53) {
        document.getElementById("text-area").value += document.getElementById("imoji-53").innerHTML;
    }
    if (code == 54) {
        document.getElementById("text-area").value += document.getElementById("imoji-54").innerHTML;
    }
    if (code == 55) {
        document.getElementById("text-area").value += document.getElementById("imoji-55").innerHTML;
    }
    if (code == 56) {
        document.getElementById("text-area").value += document.getElementById("imoji-56").innerHTML;
    }
    if (code == 57) {
        document.getElementById("text-area").value += document.getElementById("imoji-57").innerHTML;
    }
    if (code == 58) {
        document.getElementById("text-area").value += document.getElementById("imoji-58").innerHTML;
    }
    if (code == 59) {
        document.getElementById("text-area").value += document.getElementById("imoji-59").innerHTML;
    }
    if (code == 60) {
        document.getElementById("text-area").value += document.getElementById("imoji-60").innerHTML;
    }
    if (code == 61) {
        document.getElementById("text-area").value += document.getElementById("imoji-61").innerHTML;
    }
    if (code == 62) {
        document.getElementById("text-area").value += document.getElementById("imoji-62").innerHTML;
    }
    if (code == 63) {
        document.getElementById("text-area").value += document.getElementById("imoji-63").innerHTML;
    }
    if (code == 64) {
        document.getElementById("text-area").value += document.getElementById("imoji-64").innerHTML;
    }
    if (code == 65) {
        document.getElementById("text-area").value += document.getElementById("imoji-65").innerHTML;
    }
    if (code == 66) {
        document.getElementById("text-area").value += document.getElementById("imoji-66").innerHTML;
    }
    if (code == 67) {
        document.getElementById("text-area").value += document.getElementById("imoji-67").innerHTML;
    }
    if (code == 68) {
        document.getElementById("text-area").value += document.getElementById("imoji68-").innerHTML;
    }
    if (code == 69) {
        document.getElementById("text-area").value += document.getElementById("imoji-69").innerHTML;
    }
    if (code == 70) {
        document.getElementById("text-area").value += document.getElementById("imoji-70").innerHTML;
    }
    if (code == 71) {
        document.getElementById("text-area").value += document.getElementById("imoji-71").innerHTML;
    }
    if (code == 72) {
        document.getElementById("text-area").value += document.getElementById("imoji-72").innerHTML;
    }
    if (code == 73) {
        document.getElementById("text-area").value += document.getElementById("imoji-73").innerHTML;
    }
    if (code == 74) {
        document.getElementById("text-area").value += document.getElementById("imoji-74").innerHTML;
    }
    if (code == 75) {
        document.getElementById("text-area").value += document.getElementById("imoji-75").innerHTML;
    }
    if (code == 76) {
        document.getElementById("text-area").value += document.getElementById("imoji-76").innerHTML;
    }
}

// (function () {
    // debugger;
    // let price = document.querySelector('#price-toman').innerHTML;
    // let namojod = document.querySelector('#namojod');
    // if (price == "0 تومان") {
    //     namojod.style.display = "flex";
    // }else if(price != "0 تومان"){
    //     namojod.style.display = "none";
    // }

// })();
