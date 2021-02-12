console.log(document.title);
console.log(document.URL);
console.dir(document);

var imageTags = ["image1", "image2", "image3", "image4", "image5", "image6", "image7", "image8", "image9", "image10", "image11", "image12"];

var imageBackPath = "./imgs/nebula-back.jpg";

var matchingImages = new Array();

function cardBacks() {

  randomizedImage() {
    for(var i = 0; i <imageTags.length; i++) {
      document.getElementById(imageTags[i]).src= imageBackPath;
    }
  }
}

function randomizedImage() {

  var matchingImagesPath = ["./imgs/aries.jpg", "./imgs/taurus.jpg", "./imgs/gemini.jpg", "./imgs/cancer.jpg", "./imgs/leo.jpg", "./imgs/virgo.jpg", "./imgs/libra.jpg", "./imgs/scorpio.jpg", "./imgs/sag.jpg", "./imgs/capricorn.jpg", "./imgs/aquarius.jpg", "./imgs/pisces.jpg"];

  var count = [0,0];

  while(matchingImages.length < 12) {

    var randomNumber = Math.floor(Math.random() * matchingImagesPath.length)

    if(count[randomNumber] < 2) {
      matchingImages.push(matchingImagesPath[randomNumber]);

      count[randomNumber] = count[randomNumber] + 1;
    }
  }
}

function flipCard(number) {
  document.getElementById(imageTags[number]).src= matchingImages[number];
}
