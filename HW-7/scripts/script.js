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

        return ("Title: " + this.title + "<br>" + this.author + ", " + this.year + "<br>" + this.image + "<br>" + this.description);
      }

  get info() {

    return (this.title, this.author, this.year, this.image, this.description);

  }

}

//intializing array
function doTheArrayThing() {
  var viewfinder = new GalleryViewfinder("Image 01");
  var viewfinder1 = new GalleryViewfinder("Image 02");
  var viewfinder2 = new GalleryViewfinder("Image 03");
  var viewfinder3 = new GalleryViewfinder("Image 04");
  var viewfinder4 = new GalleryViewfinder("Image 05");

  viewfinderArray.push(viewfinder);
  viewfinderArray.push(viewfinder1);
  viewfinderArray.push(viewfinder2);
  viewfinderArray.push(viewfinder3);
  viewfinderArray.push(viewfinder4);
}

function accessInfo() {
  document.getElementById("info").innerHTML = viewfinderArray[0].toString();
}
