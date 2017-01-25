var colors = ['rgb(46,98,235)', 'rgb(255,128,0)', 'rgb(255,128,128)', 'rgb(138, 44, 232)', 'rgb(218, 226, 40)'];

$(function () {
    "use strict";
    $('img#load').hide();
    $('span.glyphicon').click(function () {
        //隐藏点击按钮
        $(this).hide();
        $('img#load').show();


        $.ajax({
            headers: {
                'X-Mashape-Key': 'OivH71yd3tmshl9YKzFH7BTzBVRQp1RaKLajsnafgL2aPsfP9V',
                'Accept': 'application/json'
            },
            url: "https://andruxnet-random-famous-quotes.p.mashape.com/cat=",
            success: function (response) {
                $('img#load').hide();
                $('span.glyphicon').show();
                response = JSON.parse(response);
                $('#text').animate({
                    opacity: 0
                }, 1000, function () {
                    $(this).animate({
                        opacity: 1
                    }, 1000);
                    $(this).text(response.quote);
                });
                $('#author').animate({
                    opacity: 0
                }, 1000, function () {
                    $(this).animate({
                        opacity: 1
                    }, 1000);
                    $(this).text(response.author);
                });
                var colorIndex = Math.floor(Math.random() * colors.length);
                $('body').animate({
                    backgroundColor: colors[colorIndex]
                }, 2000);
            }
        });

    });
});
