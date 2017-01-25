var colors = ['rgb(46,98,235)', 'rgb(255,128,0)', 'rgb(255,128,128)', 'rgb(138, 44, 232)', 'rgb(218, 226, 40)'];

$(function () {
    "use strict";
    //设置随机颜色
    //var colorIndex = Math.floor(Math.random() * colors.length);
    //$('body').css('background-color', colors[colorIndex]);
    $('span.glyphicon').click(function () {
        var colorIndex = Math.floor(Math.random() * colors.length);
        $('body').animate({
            backgroundColor: colors[colorIndex]
        }, 2000);
        //$('body').css('background-color', colors[colorIndex]);
        $.ajax({
            headers: {
                'X-Mashape-Key': 'OivH71yd3tmshl9YKzFH7BTzBVRQp1RaKLajsnafgL2aPsfP9V',
                'Accept': 'application/json'
            },
            url: "https://andruxnet-random-famous-quotes.p.mashape.com/cat=",
            success: function (response) {
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

            }
        });

    });
});
