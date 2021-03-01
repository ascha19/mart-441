var viewfinderArray = new Array ();

//class for viewfinder info
class GalleryViewfinder {
  constructor(title, author, year, image, description) {
    this.title = title;
    this.author = author;
    this.year = year;
    this.image = image;
    this.description = description;
  }

  toString() {

        return (this.title + "<br>" + this.author + "<br>" + this.year + "<br>" + this.image + "<br>" + this.description);
      }

  get info() {

    return (this.title, this.author, this.year, this.image, this.description);

  }

}

//intializing array
function doTheArrayThing() {
  var viewfinder = new GalleryViewfinder("Milky Way (NGC 6744)", "Image credit: Nick Risinger", "Year discovered: 1610", "<img src='./imgs/milky-way.jpg'></img>", "The Milky Way contains the sun and its solar system, including Earth.");
  var viewfinder1 = new GalleryViewfinder("Andromeda (NGC 224)", "Image credit: Wikimedia Commons", "Year discovered: 1923", "<img src='./imgs/andromeda.jpg'></img>", "Andromeda is the closest big galaxy to the Milky Way and it's said that these two galaxies will collide to form a new galaxy named Milkomeda in around four billion years.");
  var viewfinder2 = new GalleryViewfinder("Backward Galaxy (NGC 4622)", "Image credit: Learn to Skywatch (Twitter)", "Year discovered: 2001", "<img src='./imgs/ngc-4622.jpg'></img>", "The Backward Galaxy got its name from the direction in which it rotates, which is opposite than other galaxies.");
  var viewfinder3 = new GalleryViewfinder("Black Eye Galaxy (NGC 4826)", "Image credit: NASA", "Year discovered: 1779", "<img src='./imgs/black-eye.jpg'></img>", "The Black Eye Galaxy received its name from the dark band of dust that sits in front of its bright nucleus.");
  var viewfinder4 = new GalleryViewfinder("Cartwheel Galaxy", "Image credit: Hubblesite", "Year discovered: 1994", "<img src='./imgs/cartwheel.jpg'></img>", "The Cartwheel Galaxy received its name because of its appearance, which is similar to that of a spoked cartwheel.");

  viewfinderArray.push(viewfinder);
  viewfinderArray.push(viewfinder1);
  viewfinderArray.push(viewfinder2);
  viewfinderArray.push(viewfinder3);
  viewfinderArray.push(viewfinder4);
}

function accessInfo() {
  document.getElementById("info").innerHTML = viewfinderArray[0].toString();
  document.getElementById("info").innerHTML = viewfinderArray[1].toString();
  document.getElementById("info").innerHTML = viewfinderArray[2].toString();
  document.getElementById("info").innerHTML = viewfinderArray[3].toString();
  document.getElementById("info").innerHTML = viewfinderArray[4].toString();
}
