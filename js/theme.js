// faz funcionar os tamanhos iguais das divs
$(function () {
    equalheight = function (container) {

        var currentTallest = 0,
            currentRowStart = 0,
            rowDivs = new Array(),
            $el,
            topPosition = 0;
        $(container).each(function () {

            $el = $(this);
            $($el).height('auto')
            topPostion = $el.position().top;

            if (currentRowStart != topPostion) {
                for (currentDiv = 0; currentDiv < rowDivs.length; currentDiv++) {
                    rowDivs[currentDiv].height(currentTallest);
                }
                rowDivs.length = 0; // empty the array
                currentRowStart = topPostion;
                currentTallest = $el.height();
                rowDivs.push($el);
            } else {
                rowDivs.push($el);
                currentTallest = (currentTallest < $el.height()) ? ($el.height()) : (currentTallest);
            }
            for (currentDiv = 0; currentDiv < rowDivs.length; currentDiv++) {
                rowDivs[currentDiv].height(currentTallest);
            }
        });
    }

    $(window).load(function () {
        equalheight('.equalh');
    });

    $(window).load(function () {
        equalheight('.custom-box-equalh');
    });

    // faz o tool tip funcionar
    $('[data-toggle="tooltip"]').tooltip();


    // Faz funciona as tabs
    $(".tabs-menu a").click(function (event) {
        event.preventDefault();
        $(this).parent().addClass("current");
        $(this).parent().siblings().removeClass("current");
        var tab = $(this).attr("href");
        $(".tab-content").not(tab).css("display", "none");
        $(tab).fadeIn();
    });


    // faz o menu tabs responsivo
    if ($(window).width() < 768) {
        $('.tabs-menu a').addClass('item-resp');

    } else {
        $('.tabs-menu a').removeClass('item-resp');
        $('tabs-menu').css({display: "block"});
    }

    $('#toggle-btn-menu').on('click', function (e) {
        e.preventDefault();
        $('.tabs-menu').slideToggle();
    });
    $('.tabs-menu .item-resp').on('click', function (e) {
        e.preventDefault();
        $('.tabs-menu').slideToggle();
    });

});