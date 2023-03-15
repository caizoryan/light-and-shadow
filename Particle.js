class Particle {
  constructor() {
    this.pos = createVector(width / 2, height / 2);
    this.rays = [];
    this.xoff = random(100);
    this.yoff = random(100);
    let rays = 900;
    for (let a = 0; a < 359.9; a += 360 / rays) {
      this.rays.push(new Ray(this.pos, radians(a)));
    }
  }

  update(mouse) {
    if (!mouse) {
      this.xoff += 0.005;
      this.yoff += 0.005;
      let x = noise(this.xoff) * width;
      let y = noise(this.yoff) * height;
      this.pos.set(x, y);
    } else {
      this.pos.set(mouseX, mouseY);
    }
  }

  look(walls) {
    for (let ray of this.rays) {
      let closest = null;
      let record = Infinity;

      for (let wall of walls) {
        let pt = ray.cast(wall);
        if (pt) {
          const d = p5.Vector.dist(this.pos, pt);
          if (d < record) {
            closest = pt;
            record = d;
          }
        }
      }

      if (closest) {
        stroke(255, 0, 0, 10);
        stroke(255, 100);
        stroke(255, 51, 71, 100);
        // stroke(0, 100);
        // stroke(235, 1, 110, 100);
        strokeWeight(0.4);
        line(this.pos.x, this.pos.y, closest.x, closest.y);
      }
    }
  }

  show() {
    noStroke();
    fill(255);
  }
}
