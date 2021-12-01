//disco ball proportions dependent upon canvas size

var r;
var g;
var b;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  backgroundColor();
  discoBall();
}

function backgroundColor() {
  if (frameCount % 30 === 0) {
    r = random(255);
    g = random(255);
    b = random(255);
  }
  background(r, g, b);
}

function discoBall() {
  strokeWeight(5);
  stroke(0);
  line(width / 2, 0, width / 2, height / 2);
  fill(181, 181, 181);
  ellipse(width / 2, height / 2, width / 4, height / 4);

  strokeWeight(2);
  line(width / 2, 0, width / 2, height / 1.6);
  line(width / 2.2, height * 0.385, width / 2.2, height / 1.63);
  line(width / 1.83, height * 0.385, width / 1.83, height / 1.63);
  line(width / 2.4, height * 0.405, width / 2.4, height / 1.68);
  line(width / 1.72, height * 0.405, width / 1.72, height / 1.68);

  line(width * 0.375, height / 2, width * 0.629, height / 2);
  line(width * 0.39, height / 2.3, width * 0.61, height / 2.3);
  line(width * 0.39, height / 1.78, width * 0.61, height / 1.78);
}
