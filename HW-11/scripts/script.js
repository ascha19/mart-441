var canvas;
var ctxt;
var x = 50;
var y = 50;
var sprite1, sprite2, sprite3, sprite4, sprite5, sprite6;
var direction;
var questions;
var happiness = 5;
var villagerArray = [];
var collision;

$(document).ready(function() {
  setup();

  $(this).keypress(function(event) {
    getKey(event);
  });
});

function setup() {
  canvas = document.getElementById("canvasTime");
  ctxt = canvas.getContext("2d");

  sprite1 = new Villager(100, 100, 25, 25, "red");
  sprite2 = new Villager(400, 400, 25, 25, "orange");
  //sprite3 = new Villager(200, 200, 25, 25, "yellow");
  //sprite4 = new Villager(500, 500, 25, 25, "green");
  //sprite5 = new Villager(300, 300, 25, 25, "blue");
  //sprite6 = new Villager(600, 600, 25, 25, "purple");

  $.getJSON("./data/friendlies.json", function(data) {
    for(var i = 0; i < data.villagers.length; i++) {
      villagerArray.push(new Villager(data.villagers[i].x, data.villagers[i].y, data.villagers[i].w, data.villagers[i].h, data.villagers[i].color));
    }

    drawVillager();
  })
}

function getKey(event) {
  var char = event.which || event.keyCode;
  var actualLetter = String.fromCharCode(char);

//up = w
  if(actualLetter == "w") {
    moveUp();
    direction = "up";
  }

//down = s
  if(actualLetter == "s") {
    moveDown();
    direction = "down";
  }

//left = a
  if(actualLetter == "a") {
    moveLeft();
    direction = "left";
  }

//right = d
  if(actualLetter == "d") {
    moveRight();
    direction = "right";
  }

  var test = collision(sprite1, sprite2);//, sprite3, sprite4, sprite5, sprite6);
  var test2 = false;

  for(var i = 0; i < villagerArray.length; i++) {
    test2 = collision(sprite1, villagerArray[i]);

    if(test2 == true) {
      break;
    }

    console.log(test2);
  }

  if(test || test2) {
    happiness--;

    if(direction == "left") {
      moveRight();
    }
    else if(direction == "right") {
      moveLeft();
    }
    else if(direction == "up") {
      moveDown();
    }
    else if(direction == "down"){
      moveUp();
    }
  }

  drawVillager();
}

function moveUp() {
  sprite1.y-=10;
}
function moveDown(){
  sprite1.y+=10;
}
function moveRight() {
  sprite1.x+=10;
}
function moveLeft() {
  sprite1.x-=10;
}

function drawVillager() {
  ctxt.clearRect(0, 0, 800, 600);

  ctxt.fillStyle = sprite1.mainColor;
  ctxt.fillRect(sprite1.x, sprite1.y, sprite1.width, sprite1.height, sprite1.image);

  ctxt.fillStyle = sprite2.mainColor;
  ctxt.fillRect(sprite2.x, sprite2.y, sprite2.width, sprite2.height, sprite2.image);

  //ctxt.fillStyle = sprite3.mainColor;
  //ctxt.fillRect(sprite3.x, sprite3.y, sprite3.width, sprite3.height, sprite3.image);

  //ctxt.fillStyle = sprite4.mainColor;
  //ctxt.fillRect(sprite4.x, sprite4.y, sprite4.width, sprite4.height, sprite4.image);

  //ctxt.fillStyle = sprite5.mainColor;
  //ctxt.fillRect(sprite5.x, sprite5.y, sprite5.width, sprite5.height, sprite5.image);

  //ctxt.fillStyle = sprite6.mainColor;
  //ctxt.fillRect(sprite6.x, sprite6.y, sprite6.width, sprite6.height, sprite6.image);

  for(var i = 0; i < villagerArray[i].length; i++) {
    ctxt.fillStyle = villagerArray[i].mainColor;
    ctxt.fillRect(villagerArray[i].x, villagerArray[i].y, villagerArray[i].width, villagerArray[i].height, villagerArray[i].image);
  }

  ctxt.font = "100% FinkHeavy";
  ctxt.fillText("Happiness: " + happiness, 10, 50);
}

function didCollide(object1, object2) {
  return!(
    ((object1.y + object1.height) < (object2.y)) ||
    (object1.y > (object2.y + object2.height)) ||
    ((object1.x + object1.width) < object2.x) ||
    (object1.x > (object2.x + object2.width))
  );
}
