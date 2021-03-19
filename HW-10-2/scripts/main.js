var canvas = document.getElementById("canvasTime");
var ctxt = canvas.getContext("2d");
var x = 25;
var y = 25;
var x2 = 50;
var y2 = 50;
var protag;
var goal;
var barrier;
var gameState = "serve";
var attempts = 0;

//Start game
function gameStart() {
  console.log("click");

  gameState = "play";
  document.getElementById("explain").style.display = "none";
}
