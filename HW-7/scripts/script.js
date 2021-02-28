var viewfinderArray = new Array ();

//class for image title
class GalleryViewfinderTitle {
  constructor(title) {
    this.title = title;
  }

  toString() {
    return "Title: " + this.title;
  }

  get imageTitle() {
    return this.title;
  }
}

//class for image author/actor/etc
class GalleryViewfinderAuthor {
  constructor(author) {
    this.author = author;
  }

  toString() {
    return "By " + this.author;
  }

  get imageAuthor() {
    return this.author;
  }
}

//class for image year
class GalleryViewfinderYear {
  constructor(year) {
    this.year = year;
  }

  toString() {
    return "Year: " + this.title;
  }

  get imageYear() {
    return this.year;
  }
}

//class for image description
class GalleryViewfinderDescription {
  constructor(description) {
    this.description = description;
  }

  toString() {
    return "Description: " + this.description;
  }

  get imageDescription() {
    return this.description;
  }
}
