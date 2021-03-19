var canvas = document.getElementById("canvasTime");
var ctxt = canvas.getContext("2d");
var x = 25;
var y = 25;
var gx = 275;
var gy = 275;
var bx = 150;
var by = 150;
var protag;
var goal;
var barrier;
var gameState = "serve";
var attempts = 0;

//Create functions before use
createCharacters();
drawCharacters();

//Create character instances
function createCharacters() {
  protag = new Square(x, y, 20, 20, "blue");
  barrier = new Rectangle(bx, by, 10, 100, "green");
  goal = new Square(gx, gy, 20, 20, "pink");
}

//Timer to move barrier
setInterval(moveBarrier, 1000);

//Start game
function gameStart() {
  console.log("click");

  gameState = "play";
  document.getElementById("explain").style.display = "none";

  drawCharacters();
}

function moveBarrier() {
  barrier.velocityY = 2;
  barrier.bounceOff(edges);
  drawCharacters();
}

//Actually draw the Characters
function drawCharacters() {
  ctxt.clearRect(0, 0, 300, 300);
  ctxt.fillStyle = protag.theColor;
  ctxt.fillRect(protag.theX, protag.theY, protag.theWidth, protag.theHeight);

  ctxt.fillStyle = barrier.theColor;
  fillRect(goal.theX, goal.theY, goal.theWidth, goal.theHeight);
}

//Detect keypress
function getKey(event) {
  var collision = haveCollided(protag, barrier);

//Collision
  if (haveCollided) {
    canvas.style.backgroundColor = "red";

    protag.setWidth(protag.theWidth - 1);
    protag.setHeight(protag.theHeight - 1);
    barrier.setWidth(barrier.theWidth + 2);

    protag.setX(protag.theX);
    protag.setY(protag.theY);

    attempts = attempts + 1;
    if (deaths == 5) {
      gameState = "over";

      canvas.style.backgroundColor = "black";
      button.value = "Start over";
    }
  }

//Move protag
  var char = event.which || event.keyCode;
  var letter = String.fromCharCode(char);

  if (letter == "w") {
    moveUp() {
      protag.setY(protag.theY - 5);
    }
  }
  else if (letter == "s") {
    moveDown() {
      protag.setY(protag.theY + 5);
    }
  }
  else if (letter == "a") {
    moveLeft() {
      protag.setX(protag.theX - 5);
    }
  }
  else if (letter == "d") {
    moveRight() {
      protag.setX(protag.theX + 5);
    }
  }

  drawCharacters();
}
