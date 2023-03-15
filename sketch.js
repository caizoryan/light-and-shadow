// From Daniel Shiffman's Coding Challenge #145: 2D Raycasting
// https://youtu.be/TOEi6T2mtHo

let walls = [];
let particle, particle2;
let xoff = 0;
let yoff = 02;

function setup() {
  createCanvas(windowWidth, windowHeight);

  walls.push(new Boundary(0, 0, width, 0));
  walls.push(new Boundary(width, 0, width, height));
  walls.push(new Boundary(width, height, 0, height));
  walls.push(new Boundary(0, height, 0, 0));

  for (let i = 0; i < 10; i++) {
    let x1 = random(width);
    let y1 = random(height);
    let x2 = random(width);
    let y2 = random(height);
    wall = new Boundary(x1, y1, x2, y2);
    walls.push(wall);
  }

  particle = new Particle(random(100));
  particle2 = new Particle(random(100));
}

function draw() {
  xoff += 0.007;
  yoff += 0.007;
  let xx = noise(xoff) * width;
  let yy = noise(yoff) * height;
  let xxx = noise(xoff + 100) * width;
  let yyy = noise(yoff + 11) * height;
  background(0, 06);
  particle2.show();
  particle2.look(walls);
  particle2.update(xx, yy);
  particle.update(xxx, yyy);
  particle.show();
  particle.look(walls);

  for (let wall of walls) {
    wall.show();
  }
}
