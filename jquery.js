document.getElementById("screenimage").src = "images/1.jpg";

$(document).ready(function() {
    $("body").css("background-image", "url('images/1.jpg')");
    $("body").css("background-size", "cover") ;
    $("body").css("background-repeat", "no-repeat") ;
  $(".btn").click(function() {
    let mysrc = $(this).children("img").attr("src")
    $("#screenimage").attr("src",mysrc);
    $("body").css("background-image", "url(" + mysrc + ")");
    $("body").css("background-size", "cover") ;
 
  })
 

})
