$("#next").click(function(){
    var curr = $(".active");
    var nextImg = curr.next();

    if (nextImg.length != 0){
        curr.removeClass("active");
        nextImg.addClass("active");
    }
    else{
        curr.removeClass("active");
        $("#first").addClass("active");
    }
});

$("#prev").click(function(){
    var curr = $(".active");
    var prevImg = curr.prev();

    if (prevImg.length != 0){
        curr.removeClass("active");
        prevImg.addClass("active");
    }
    else{
        curr.removeClass("active");
        $("#last").addClass("active");
    }
});

$("#next2").click(function(){
    var curr = $(".active2");
    var nextImg = curr.next();

    if (nextImg.length != 0){
        curr.removeClass("active2");
        nextImg.addClass("active2");
    }
    else{
        curr.removeClass("active2");
        $("#one").addClass("active2");
    }
});

$("#prev2").click(function(){
    var curr = $(".active2");
    var prevImg = curr.prev();

    if (prevImg.length != 0){
        curr.removeClass("active2");
        prevImg.addClass("active2");
    }
    else{
        curr.removeClass("active2");
        $("#two").addClass("active2");
    }
});
