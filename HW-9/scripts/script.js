
$.fn.divStyles = function(){
  this.css("margin", "auto");
  this.css("background-color", "rgb(187, 233, 205)");
  this.css("border-radius", "15px");
  this.css("width", "50%");
};

$(document).ready(function(){
    //$("body").ready(function(){
        var bgUrl = "./imgs/animal-crossing-wp.jpg";
        $(".background").css("background-image", "url(" + bgUrl + ")");
        $("#makeDivPretty").divStyles();
    //});
});
