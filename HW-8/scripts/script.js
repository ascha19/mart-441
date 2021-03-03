var mrRogersSelector = "#mrr";
var itsHim = new Array();

class RogersInfo {
  constructor(selector, imagePath) {
    this.selector = selector;
    this.imagePath = imagePath;
  }

  get theSelector() {
    return this.selector;
  }

  get theImagePath() {
    return this.imagePath;
  }

  toString() {
    return this.selector + ":" + this.imagePath;
  }
}

function initializeArray() {
  var mrr = new RogersInfo("#mrr", "./imgs/mister-rogers-01.jpg");
  var mrr2 = new RogersInfo("#mrr", "./imgs/mister-rogers-02.jpg");
  var mrr3 = new RogersInfo("#mrr", "./imgs/mister-rogers-03.jpg");

  itsHim.push(mrr);
  itsHim.push(mrr2);
  itsHim.push(mrr3);
  }

$(document).ready(function(){
  initializeArray();
  console.log(itsHim.length);
  console.log(itsHim[0].toString());
  console.log(itsHim[0].theSelector);
  console.log(itsHim[0].theImagePath);

$(itsHim[0].theSelector).attr("src", itsHim[0].theImagePath);

$("button").click(function(){

  $(".words").fadeOut();

  $("#special").toggle();
    setInterval(moveObject, 1000);

  $(itsHim[0].theSelector).fadeOut().fadeIn();

  $("mrr").html(function(index, html) {
  return "[" + (index + 1) + "]" + html;
})

});

});

function moveObject() {
  $("#trolley").animate({left:250}).animate({top:400}).animate({left:0}).animate({top:300});
}
