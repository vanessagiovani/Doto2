$("#skill1_info").hide();
$("#skill2_info").hide();
$("#skill3_info").hide();
$("#skill4_info").hide();

$("#skill1").click(function(){
    $("#skill1").fadeTo(0, 1);
    $("#skill2").fadeTo(0, 0.15);
    $("#skill3").fadeTo(0, 0.15);
    $("#skill4").fadeTo(0, 0.15);
    $("#skill2_info").slideUp();
    $("#skill3_info").slideUp();
    $("#skill4_info").slideUp();
    $("#skill1_info").delay(400).slideToggle();
})

$("#skill2").click(function(){
    $("#skill1").fadeTo(0, 0.15);
    $("#skill2").fadeTo(0, 1);
    $("#skill3").fadeTo(0, 0.15);
    $("#skill4").fadeTo(0, 0.15);
    $("#skill1_info").slideUp();
    $("#skill3_info").slideUp();
    $("#skill4_info").slideUp();
    $("#skill2_info").delay(400).slideToggle();
})

$("#skill3").click(function(){
    $("#skill1").fadeTo(0, 0.15);
    $("#skill2").fadeTo(0, 0.15);
    $("#skill3").fadeTo(0, 1);
    $("#skill4").fadeTo(0, 0.15);
    $("#skill1_info").slideUp();
    $("#skill2_info").slideUp();
    $("#skill4_info").slideUp();
    $("#skill3_info").delay(400).slideToggle();
})

$("#skill4").click(function(){
    $("#skill1").fadeTo(0, 0.15);
    $("#skill2").fadeTo(0, 0.15);
    $("#skill3").fadeTo(0, 0.15);
    $("#skill4").fadeTo(0, 1);
    $("#skill1_info").slideUp();
    $("#skill2_info").slideUp();
    $("#skill3_info").slideUp();
    $("#skill4_info").delay(400).slideToggle();
})