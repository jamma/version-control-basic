import p5 from 'p5';

export const sketch = (p: p5) => {
  const particles: Particle[] = [];
  const numParticles = 100; // Number of particles
  const maxSpeed = 2; // Maximum speed of particles
  const particleSize = 10; // Base size of particles

  class Particle {
    x: number;
    y: number;
    speedX: number;
    speedY: number;
    color: p5.Color;
    angle: number;

    constructor() {
      this.x = p.random(p.width);
      this.y = p.random(p.height);
      this.speedX = p.random(-maxSpeed, maxSpeed);
      this.speedY = p.random(-maxSpeed, maxSpeed);
      this.color = p.color(p.random(255), p.random(255), p.random(255), 150);
      this.angle = p.random(p.TWO_PI);
    }

    move() {
      // Update position
      this.x += this.speedX;
      this.y += this.speedY;

      // Wrap around the screen
      if (this.x > p.width) this.x = 0;
      if (this.x < 0) this.x = p.width;
      if (this.y > p.height) this.y = 0;
      if (this.y < 0) this.y = p.height;

      // Update angle for spinning effect
      this.angle += 0.05;
    }

    display() {
      p.push();
      p.translate(this.x, this.y);
      p.rotate(this.angle);

      // Draw the particle
      p.noStroke();
      p.fill(this.color);
      p.ellipse(0, 0, particleSize, particleSize);

      // Add some extra flair
      p.stroke(this.color);
      p.line(-particleSize, 0, particleSize, 0);
      p.line(0, -particleSize, 0, particleSize);

      p.pop();
    }
  }

  p.setup = () => {
    p.createCanvas(window.innerWidth, window.innerHeight);
    p.background(0);

    // Create particles
    for (let i = 0; i < numParticles; i++) {
      particles.push(new Particle());
    }
  };

  p.draw = () => {
    p.background(0, 20); // Add a slight fade effect

    // Update and display particles
    for (const particle of particles) {
      particle.move();
      particle.display();
    }
  };

  p.windowResized = () => {
    p.resizeCanvas(window.innerWidth, window.innerHeight);
  };
};