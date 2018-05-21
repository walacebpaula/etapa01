var x = 100;
var y = 100;

function setup() {
  createCanvas(512, 512);
}

function draw() {
  if (keyIsDown(LEFT_ARROW)) {
    x -= 5;
  }

  if (keyIsDown(RIGHT_ARROW)) {
    x += 5;
  }

  if (keyIsDown(UP_ARROW)) {
    y -= 5;
  }

  if (keyIsDown(DOWN_ARROW)) {
    y += 5;
  }

  clear();
  fill(255, 0, 0);
  ellipse(x, y, 50, 50);
  rect(300, 120, 50, 40);
}
