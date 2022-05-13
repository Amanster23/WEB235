// Slider
$(document).ready(function () {
    $('.slider').slick({
        arrows: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
        ]
    })
});

// VUE
var demo = new Vue({
    el: '#vue',
    data: {
        footerInfo: '\251 Copyright 2022'
    },
});


// Nav Bar Highlight
$(function () {
    $('a').each(function () {
        if ($(this).prop('href') == window.location.href) {
            $(this).addClass('active');
            $(this).parents('div').addClass('active');
        }
    });
});

// Article Animation
$(document).ready(function () {
    $(".articleImage").mouseover(function() {
         $(this).animate({'height':'120px', 'width': '105%'})
     });
     $(".articleImage").mouseout(function() {
        $(this).animate({'height':'100px', 'width': '100%'})
    });
});

// Table Highlight
$(document).ready(function () {
    $(".column tr").hover(function () {
        $(this).css("background-color", "yellow");
    }, function () {
        $(this).css("background-color", "whitesmoke");
    });
});

// Form Validation
$(document).ready(function () {
    $("#basic-form").validate();
});

// Gifs
$(document).ready(function () {
    $('.mjutah').mouseover(function () {
        var newSrc = $(this).attr("src").replace("mjutah.jpg", "mjutah.gif");
        $(this).attr("src", newSrc);
    });
    $('.mjutah').mouseout(function () {
        var newSrc = $(this).attr("src").replace("mjutah.gif", "mjutah.jpg");
        $(this).attr("src", newSrc);
    });
});

$(document).ready(function () {
    $('.kobeshaq').mouseover(function () {
        var newSrc = $(this).attr("src").replace("kobeshaq.jpg", "shaqkobe.webp");
        $(this).attr("src", newSrc);
    });
    $('.kobeshaq').mouseout(function () {
        var newSrc = $(this).attr("src").replace("shaqkobe.webp", "kobeshaq.jpg");
        $(this).attr("src", newSrc);
    });
});

$(document).ready(function () {
    $('.mjdunk').mouseover(function () {
        var newSrc = $(this).attr("src").replace("mjdunk.jpg", "mjdunk.gif");
        $(this).attr("src", newSrc);
    });
    $('.mjdunk').mouseout(function () {
        var newSrc = $(this).attr("src").replace("mjdunk.gif", "mjdunk.jpg");
        $(this).attr("src", newSrc);
    });
});

$(document).ready(function () {
    $('.rayshot').mouseover(function () {
        var newSrc = $(this).attr("src").replace("rayshot.jpg", "rayshot.gif");
        $(this).attr("src", newSrc);
    });
    $('.rayshot').mouseout(function () {
        var newSrc = $(this).attr("src").replace("rayshot.gif", "rayshot.jpg");
        $(this).attr("src", newSrc);
    });
});

$(document).ready(function () {
    $('.kawhishot').mouseover(function () {
        var newSrc = $(this).attr("src").replace("kawhishot.jpg", "kawhi.webp");
        $(this).attr("src", newSrc);
    });
    $('.kawhishot').mouseout(function () {
        var newSrc = $(this).attr("src").replace("kawhi.webp", "kawhishot.jpg");
        $(this).attr("src", newSrc);
    });
});