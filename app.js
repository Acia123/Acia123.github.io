var main =  function() {
  $(".bild2").click(function(){
    $(".meny").animate({
      left: "0px"
  }, 200);
  $("body").animate({
    left: "300px"
  }, 200);
  });
  $(".bild3").click(function(){
    $(".meny").animate({
  left: "-300px"
    }, 200);
    $("body").animate({
      left: "0px"
    }, 200);
  });
};
$(document).ready(main);

var hover = function(){
  $(".nyhet").mouseenter(function(){
    $(".nyhet").css("background-color", "lightgray");
    });
    $(".nyhet").mouseleave(function(){
      $(".nyhet").css("background-color", "none")
    });
};

$(document).ready(hover);
