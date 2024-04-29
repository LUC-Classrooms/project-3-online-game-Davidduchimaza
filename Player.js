function Player(tempX, tempY) {
  // properties
  this.x = tempX;
  this.y = tempY;
  this.s = 0.4; // scale
  this.diam = 50;
  this.angle = 0;

  this.display = function () {
    beginShape();
    // Draw the dog shape
    push(); // Create a new drawing state
    translate(this.x, this.y); // Move the origin point
    rotate(this.angle); // Rotate the dog

    // Draw the body
    fill(255, 204, 153); // Light brown
    ellipse(0, 0, 100, 80); // Body

    // Draw the head
    fill(255, 204, 153); // Light brown
    ellipse(30, -40, 60, 60); // Head

    // Draw the ears
    fill(255, 204, 153); // Light brown
    ellipse(50, -40, 20, 20); // Left ear
    ellipse(10, -40, 20, 20); // Right ear

    // Draw the eyes
    fill(0); // Black
    ellipse(20, -50, 10, 10); // Left eye
    ellipse(40, -50, 10, 10); // Right eye

    // Draw the nose
    fill(0); // Black
    ellipse(30, -30, 10, 10); // Nose

    // Draw the legs
    fill(255, 204, 153); // Light brown
    rect(-20, 20, 15, 50); // Front left leg
    rect(15, 20, 15, 50); // Front right leg
    rect(-30, 50, 15, 50); // Back left leg
    rect(25, 50, 15, 50); // Back right leg

    pop(); // Restore original drawing state
    endShape();
  };

  this.move = function () {
    // Follow the mouse
    this.x = mouseX;
    this.y = mouseY;
  };
}
