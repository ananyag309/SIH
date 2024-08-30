$(function () {
    'use strict'

    $('[data-toggle="offcanvas"]').on('click', function () {
        $('.offcanvas-collapse').toggleClass('open');
        return false;

    });
    $('body').on('click', function () {
        $('.offcanvas-collapse').removeClass('open')
    });
})



var toggleAffix = function (affixElement, scrollElement, wrapper) {

    var height = affixElement.outerHeight(),
        top = wrapper.offset().top;

    if (scrollElement.scrollTop() >= top) {
        wrapper.height(height);
        affixElement.addClass("affix");
    } else {
        affixElement.removeClass("affix");
        wrapper.height('auto');
    }

};
/*-------------------------------*/
$('[data-toggle="affix"]').each(function () {
    var ele = $(this),
        wrapper = $('<div></div>');

    ele.before(wrapper);
    $(window).on('scroll resize', function () {
        toggleAffix(ele, $(this), wrapper);
    });

    // init
    toggleAffix(ele, $(window), wrapper);
});

$(document).ready(function () {
    $('[data-toggle="tooltip"]').tooltip()
})

window.addEventListener('load', function () {
    $("#loading-center").click(function () {
        $("#loading").fadeOut(500);
    })
    $("#loading").fadeOut(500);
})
$(document).ready(function (e) {
    $('#otpsubmit').click(function () {
        $('#otp').show();

    })
    
    
   

})

 $('#themechanger').on('change', function () {
        var path = $(this).val();
        $('#color-switcher').attr('href', 'css/'+path+'.css');
      });