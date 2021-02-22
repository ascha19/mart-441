console.log(document.title);
console.log(document.URL);
console.dir(document);

//Variable for image tags and back of cards
var imageTags = ["image1", "image2", "image3", "image4", "image5", "image6", "image7", "image8", "image9", "image10", "image11", "image12"];
var imageBackPath = "./imgs/nebula-back.jpg";

//Varialble for numbers
var numberUno = -1;
var numberDos = -1;

//Variables for amount of moves made and final score
var move = 0;
var foundAllMatches = 0;

//Variable for player information (JSON)
var playerInfo = {"firstName": "", "lastName":"", "age":""};

//Variable for card array
var matchingImages = new Array();

//Setting up randomized images and making cards appear
function cardBacks() {

  randomizedImage();
    for(var i = 0; i <imageTags.length; i++) {
      document.getElementById(imageTags[i]).src= imageBackPath;
    }
}

function randomizedImage() {

  var matchingImagesPath = ["./imgs/aries.jpg", "./imgs/taurus.jpg", "./imgs/gemini.jpg", "./imgs/cancer.jpg", "./imgs/leo.jpg", "./imgs/virgo.jpg", "./imgs/libra.jpg", "./imgs/scorpio.jpg", "./imgs/sag.jpg", "./imgs/capricorn.jpg", "./imgs/aquarius.jpg", "./imgs/pisces.jpg"];

  var count = [0,0,0,0,0,0,0,0,0,0,0,0];

  while(matchingImages.length < 12) {

    var randomNumber = Math.floor(Math.random() * matchingImagesPath.length)

    if(count[randomNumber] < 2) {
      matchingImages.push(matchingImagesPath[randomNumber]);

      count[randomNumber] = count[randomNumber] + 1;
    }
  }
}

//Function to flip cards and add score
function flipCard(number) {
  //document.getElementById(imageTags[number]).src= matchingImages[number];

  if(numberUno >= 0) {
    numberDos = number;
    document.getElementById(imageTags[number]).src = matchingImages[numberDos];
  }
  else if(numberUno < 0) {
    numberUno = number;
    document.getElementById(imageTags[numberUno]).src = matchingImages[numberUno];
  }

  if(matchingImages[numberDos] != matchingImages[numberUno] && numberUno >= 0 && numberDos >=0) {
    move++;
    setTimeout(goodbyeCards, 1000);
  }
  else if(matchingImages[numberDos] == matchingImages[numberUno] && numberUno >= 0 && numberDos >= 0) {
    move++;
    foundAllMatches++;

    numberUno = -1;
    numberDos = -1;

    if(foundAllMatches == matchingImages.length/2) {
      playerInfo.move = move;
      localStorage.setItem("readyPlayerOne", JSON.stringify(playerInfo));
      window.location = "finalscreen.html";
    }
  }
}

//Function to make images disappear at end of game
function goodbyeCards() {
  document.getElementById(imageTags[numberUno]).src = imageBackPath;
  document.getElementById(imageTags[numberDos]).src = imageBackPath;

  numberUno = -1;
  numberDos = -1;
}

//Player information; add to JSON from player info page and pull info from JSON at end of game
function thisIsPlayer() {
  var firstName = document.getElementById("playerFirstName").value;
  var lastName = document.getElementById("playerLastName").value;
  var age = document.getElementById("playerAge").value;

  playerInfo.firstname = playerFirstName;
  playerInfo.lastname = playerLastName;
  playerInfo.age = playerAge;

  localStorage.setItem("readyPlayerOne", JSON.stringify(playerInfo));
  window.location = "index.html";
}

function readyPlayerOne() {
  var playerInformation = localStorage.getItem("readyPlayerOne");
  playerInfo = JSON.parse(playerInformation);
  var info = "Player: " + playerInfo.playerFirstName + " " + playerInfo.playerLastName + ", " + playerInfo.age + "<br>" + "Moves: " + playerInfo.move;
  if(document.getElementById("gameFinish") != null) {
    document.getElementById("gameFinish").innerHTML = info;
  }
}
