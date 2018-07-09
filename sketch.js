function setup() {
createCanvas(600, 400);
background('green');
}

function draw() {
noStroke();
  ellipse (mouseX, mouseY, 10, 10);

  fill("orange")
  textSize(32);
  text("happy copenhagen", 50, 80);
}
