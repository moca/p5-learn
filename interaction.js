let blasts = [];
let partyR = 255;
let partyG = 255;
let partyB = 255;


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);

  noFill();
  stroke(255);
  strokeWeight(2);

  ellipse(width / 3, height / 2, 80, 60);
  ellipse(width / 3, height / 2, 60, 80);
  quad(100, 131, 126, 120, 149, 163, 90, 176);
  push();
  translate(width - 200, height - 200)
  shearX(radians(31));
  rect(0, 0, 110, 70);
  pop();
  triangle(width / 5 * 4, height / 4, width / 5 * 4 - 50, height / 4 + 65, width / 5 * 4 + 50, height / 4 + 65);
  square(width / 5 * 4 - 100, height / 4 + 100, 50);

  for (let i = 0; i < 25; i++) {
    point(random(width), random(height));
  }

  noStroke();
  fill(255);

  push();
  // Spaceship follows the mouse position
  translate(mouseX, mouseY);
  triangle(0, -25, -20, 25, 20, 25);
  pop();

  // Create the rainbow blasts when the mouse is pressed
  if (mouseIsPressed) {
    partyR = random(255);
    partyG = random(255);
    partyB = 255;
    fill(partyR, partyG, partyB);
  }
  else {
    fill(255);
  }
  for (let i = 0; i < blasts.length; i++) {
    let xpos = blasts[i][0];
    let ypos = blasts[i][1];

    ellipse(xpos, ypos, 8, 8);

    blasts[i][1] -= 5;
  }

  for (let i = blasts.length - 1; i >= 0; i--) {
    if (blasts[i][1] < 0) {
      blasts.splice(i, 1);
    }
  }
}

// Trigger the blaster by pressing the spacebar
function keyPressed() {
  if (key === ' ') {
    blasts.push([mouseX, mouseY]);
  }
}