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

  $(".words").fadeOut().fadeIn();

  //$("#special").toggle();
    setInterval(moveObject, 1000);

  $(itsHim[0].theSelector).fadeOut().fadeIn();

  $("p").html(function(index, html) {
  return "We don't have to think it's funny when we feel like we need some extra comfort. I sometimes sing about that to children, but, as you know, I believe there's a child somewhere in each of us. We all have times like that--times when an extra measure of care is needed. We need comfort and so does everyone else. And it's nothing to be ashamed of. - Fred Rogers";
})

$("p").html(function(index, html) {
return "Transitions are almost always signs of growth, but they can bring feelings of loss. To get somewhere new, we may have to leave somewhere else behind. - Fred Rogers";
})

});

});

function moveObject() {
  $("#trolley").animate({left:250}).animate({top:400}).animate({left:0}).animate({top:300});
}
