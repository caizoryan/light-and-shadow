// From Daniel Shiffman's Coding Challenge #145: 2D Raycasting
// https://youtu.be/TOEi6T2mtHo

let walls = [];
let particles = [];
let mouse;
let font;
let points;

function preload() {
  font = loadFont("./Poppins-Regular.ttf");
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  points = font.textToPoints("INTERACTION LAB", 400, height - 400, 170);

  walls.push(new Boundary(0, 0, width, 0));
  walls.push(new Boundary(width, 0, width, height));
  walls.push(new Boundary(width, height, 0, height));
  walls.push(new Boundary(0, height, 0, 0));

  for (let i = 0; i < points.length; i++) {
    if (i + 2 > points.length) break;
    console.log(points);
    let p1 = points[i];
    let p2 = points[i + 1];
    let wall = new Boundary(p1.x, p1.y, p2.x, p2.y);
    walls.push(wall);
  }

  // for (let i = 0; i < 10; i++) {
  //   // use points from poppins to make a letter here
  //   let x1 = random(width);
  //   let y1 = random(height);
  //   let x2 = random(width);
  //   let y2 = random(height);
  //   let wall = new Boundary(x1, y1, x2, y2);
  //   walls.push(wall);
  // }

  for (let i = 0; i < 1; i++) {
    particles.push(new Particle());
  }
  mouse = new Particle();
}

function draw() {
  background(0, 05);
  // for (const particle of particles) {
  //   particle.show();
  //   particle.look(walls);
  //   particle.update(false);
  // }
  mouse.show();
  mouse.look(walls);
  mouse.update(true);
  for (let wall of walls) {
    wall.show();
  }
}
