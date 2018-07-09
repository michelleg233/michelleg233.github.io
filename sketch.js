function setup() {
createCanvas(600, 400);
background(0, 0, 50);
}

function draw() {
noStroke();
  fill(0, 0, 100);
  ellipse (mouseX, mouseY, 10, 10);

  fill (50, 0, 0);
  triangle (300, 100, 350, 300, 400, 100);

  fill(255);
  rect(200, 250, 75, 50);

  fill("orange");
  textSize(32);
  text("hello friends", 50, 80);
}
