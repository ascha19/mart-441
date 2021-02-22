console.log(document.title);
console.log(document.URL);
console.dir(document);

//Variable for image tags and back of cards
var imageTags = ["image1", "image2", "image3", "image4", "image5", "image6", "image7", "image8", "image9", "image10", "image11", "image12"];
var imageBackPath = "./imgs/nebula-back.jpg";

//Varialble for numbers
var numberUno = -1;
var numberDos = -1;
var numberTres = -1;
var numberCuatro = -1;
var numberCinco = -1;
var numberSeis = -1;

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

//Function to flip cards
function flipCard(number) {
  document.getElementById(imageTags[number]).src= matchingImages[number];
}

//Function to make images disappear at end of game
function goodbyeCards() {
  document.getElementById(imageTags[numberUno]).src = imageBackPath;
  document.getElementById(imageTags[numberDos]).src = imageBackPath;
  document.getElementById(imageTags[numberTres]).src = imageBackPath;
  document.getElementById(imageTags[numberCuatro]).src = imageBackPath;
  document.getElementById(imageTags[numberCinco]).src = imageBackPath;
  document.getElementById(imageTags[numberSeis]).src = imageBackPath;

  numberUno = -1;
  numberDos = -1;
  numberTres = -1;
  numberCuatro = -1;
  numberCinco = -1;
  numberSeis = -1;
}

//Player information; add to JSON from player info page and pull info from JSON at end of game
function thisIsPlayer() {
  var firstName = document.getElementById("playerFirstName").value;
  var lastName = document.getElementById("playerLastName").value;
  var age = document.getElementById("playerAge").value;

  player.firstname = firstName;
  player.lastname = lastName;
  player.age = age;

  localStorage.setItem("readyPlayerOne", JSON.stringify(player));
  window.location = "index.html";
}

function readyPlayerOne() {
  var playerInformation = localStorage.getItem("readyPlayerOne");
  playerInfo = JSON.parse(playerInformation);
  var info = "Player: " + playerInfo.playerFirstName + " " + playerInfo.playerLastName + ", " + playerInfo.age + "<br>" + "Moves: " + playerInfo.score;
  if(document.getElementById("gameFinish") != null) {
    document.getElementById("gameFinish").innerHTML = info;
  }
}
