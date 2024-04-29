function Box(_x, _y) {
  this.x = _x;
  this.y = _y;

  this.xSpeed = 0;
  this.ySpeed = random(1, 2); // 1 - 2 (falling)
  this.rSpeed = random(-0.02, 0.02); // rotation speed
  this.angle = 0;

  this.display = function () {
    push();
    translate(this.x, this.y);
    scale(0.7);

    fill(166, 118, 61); // Cookie color
    stroke(83, 55, 15); // Chocolate chip color
    strokeWeight(2);

    // Cookie shape
    ellipse(0, 0, 80, 60); // Main cookie

    // Chocolate chips
    ellipse(-20, 0, 10, 10); // Chocolate chip 1
    ellipse(20, 0, 10, 10); // Chocolate chip 2
    ellipse(0, -20, 10, 10); // Chocolate chip 3
    ellipse(0, 20, 10, 10); // Chocolate chip 4

    pop();
  };

  this.move = function () {
    this.y += this.ySpeed; // Move down (falling)
  };

  this.spin = function () {
    this.angle += this.rSpeed; // Spin
  };
}
