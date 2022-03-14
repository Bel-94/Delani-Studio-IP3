$(document).ready(function(){
    $(".design").click(function(){
        $(".p").toggle();
        $(".design").toggle();
    });
    $(".p").click(function(){
        $(".design").toggle();
        $(".p").toggle();
    });
});



$(document).ready(function(){
    $(".development").click(function(){
        $(".p1").toggle();
        $(".development").toggle();
    });
    $(".p1").click(function(){
        $(".development").toggle();
        $(".p1").toggle();
    });
});

$(document).ready(function(){
    $(".product").click(function(){
        $(".p2").toggle();
        $(".product").toggle();
    });
    $(".p2").click(function(){
        $(".product").toggle();
        $(".p2").toggle();
    });
});



$(document).ready(function(){
    $("#portfoliocard1").hover(function(){
        $("#imgoverlay1").toggle(1000)
        $("#imgdescription1").toggle(1000)
    })
});

$(document).ready(function(){
    $("#portfoliocard2").hover(function(){
        $("#imgoverlay2").toggle(1000)
        $("#imgdescription2").toggle(1000)
    })
});

$(document).ready(function(){
    $("#portfoliocard3").hover(function(){
        $("#imgoverlay3").toggle(1000)
        $("#imgdescription3").toggle(1000)
    })
});

$(document).ready(function(){
    $("#portfoliocard4").hover(function(){
        $("#imgoverlay4").toggle(1000)
        $("#imgdescription4").toggle(1000)
    })
});





