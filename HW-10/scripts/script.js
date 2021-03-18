//var canvas = document.getElementById("canvasStyles");
var ctxt = canvas.getContext("2d");
var x = 50;
var y = 50;
var x2 = 100;
var y2 = 100;
var square1;
var square2;

$.fn.canvas = function() {
  this.css("background-color", "rgb(255, 249, 201)");
  this.css("border-style", "ridge");
  this.css("border-width", "10px");
  this.css("border-color", "rgb(74, 138, 224)");
}

//$(document).ready(function() {
  //$("#canvasStyles").canvas();
//})

squareTime();
squareAppear();

setInterval(moveSquare1, 5000);

function squareTime() {
  square1 = new Square(x, y, 20, 20, "pink");
  square2 = new Square(x2, y2, 50, 50, "blue");
}

function moveSquare1() {
  square2.setX(Math.floor(Math.random() * canvas.width));
  square2.setY(Math.floor(Math.random() * canvas.height));
  squareAppear();
}

function squareAppear() {
  ctxt.clearRect(0, 0, 300, 250);
  ctxt.fillStyle = square1.theColor;
  ctxt.fillRect(square1.theX, square1.theY, square1.theWidth, square1.theHeight);
  ctxt.fillStyle = square2.theColor;
  ctxt.fillRect(square2.theX, square2.theY, square2.theWidth, square2.theHeight);
}

$(document).ready(function() {

  $("#canvasStyles").canvas();

  $(this).keypress(function (event) {
    getKey(event);
  })
})

function getKey(event) {
  var didTouch = didTheTouch(square1, square2);

  if (didTheTouch) {
    canvas.style.backgroundColor = "rgb(" + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + ")";

    square1.setWidth(square1.theWidth - 1);
    square1.setHeight(square1.theHeight - 1);

    square2.setWidth(square2.theWidth + 1);
    square2.setHeight(square2.theHeight + 1);
  }

  var char = event.which || event.keyCode;
  var actualLetter = String.fromCharCode(char);

  if (actualLetter == "w") {
    moveUp();
  }

  else if (actualLetter == "s") {
    moveDown();
  }

  else if (actualLetter == "d") {
    moveRight();
  }

  else if (actualLetter == "a") {
    moveLeft();
  }

  squareAppear();
}


function moveUp() {
  square1.setY(square1.theY - 10);
}

function moveDown() {
  square1.setY(square1.theY + 10);
}

function moveLeft() {
  square1.setX(square1.theX - 10);
}

function moveRight() {
  square1.setX(square1.theX + 10);
}


function didTheTouch(object1, object2) {
  return !(
    ((object.y + object1.height) < (object2.y)) ||
    (object1.y > (object2.y + object2.height)) ||
    ((object1.x + object1.width) < object2.x) ||
    (object1.x > (object2.x + object2.width))
  );
}
