let img; // Declare variable 'img'.
let imgUrl = "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Bruce_McCandless_II_during_EVA_in_1984.jpg/1920px-Bruce_McCandless_II_during_EVA_in_1984.jpg"

function preload(){
  img = loadImage(imgUrl); // Load the image
}

function setup() {
  // pixelDensity(2); 14745600
  pixelDensity(1); 14745600
  createCanvas(900, 600);
}

function draw() {
  // Displays the image at its actual size at point (0,0)
  img.loadPixels();
  image(img, 0, 0, width, height);
}