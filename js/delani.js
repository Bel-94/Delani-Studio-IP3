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