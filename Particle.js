class Particle {
  constructor() {
    this.pos = createVector(width / 2, height / 2);
    this.rays = [];
    this.xoff = random(100);
    this.yoff = random(100);
    let rays = 1500;
    for (let a = 0; a < 359.9; a += 360 / rays) {
      this.rays.push(new Ray(this.pos, radians(a)));
    }
  }

  update(x, y) {
    this.pos.set(x, y);
    this.xoff += 0.001;
    this.yoff += 0.001;
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
        let r = noise(this.xoff) * 255;
        let g = noise(this.yoff) * 255;
        stroke(r, g, 100, 127);
        strokeWeight(0.1);
        line(this.pos.x, this.pos.y, closest.x, closest.y);
      }
    }
  }

  show() {
    noStroke();
    fill(255);
  }
}
