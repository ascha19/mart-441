class Villager{

//constructor
  constructor(vX, vY, vHeight, vWidth, vColor) {
    this.vX = vX;
    this.vY = vY;
    this.vHeight = veHeight;
    this.vWidth = vWidth;
    this.vColor = vColor;
  }

//x value
  get x() {
    return this.vX;
  }
  set x(value) {
    return this.vX = value;
  }

//y value
  get y() {
    return this.vY;
  }
  set y(value) {
    return this.vY = value;
  }

//height value
  get height() {
    return this.vHeight;
  }
  set height(value) {
    return this.vHeight = value;
  }

//width value
  get width() {
    return this.vWidth;
  }
  set width(value) {
    return this.vWidth = value;
  }

//color
  get mainColor() {
    return this.vColor;
  }

//image
  get image() {
    return this.vSprite;
  }
}
