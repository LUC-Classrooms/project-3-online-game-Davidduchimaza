this.display = function () {
  beginShape();
  // Draw cat body
  push();
  translate(this.x, this.y);
  rotate(this.angle);
  fill(255, 128, 0); // Orange color
  ellipse(0, 0, 60, 40); // Cat's body

  // Draw cat head
  ellipse(-25, -15, 30, 30); // Cat's head
  fill(225); // Black color
  ellipse(-31, -20, 10, 10); // Left eye
  ellipse(-19, -20, 10, 10); // Right eye

  // black pupil
  fill(0); //  black color
  ellipse(-31, -20, 5, 9); // Left eye
  ellipse(-19, -20, 5, 9); // right eye

  fill(0, 150, 0); // Green inside part of the eye
  ellipse(-31, -20, 2, 11); // Left eye
  ellipse(-19, -20, 2, 11); // right eye

  // Draw nose
  fill(255, 192, 203); // Pink color
  triangle(-30, -13, -25, -8, -20, -13); // Nose (pink triangle)

  // Draw cat ears
  fill(255, 128, 0); // Orange color
  triangle(-40, -25, -50, -50, -30, -25); // Left ear
  triangle(-20, -25, -10, -40, 0, -25); // Right ear

  // Draw cat legs
  stroke(0); // Black color
  line(-20, 10, -30, 20); // Front left leg
  line(-20, 10, -10, 20); // Front right leg
  line(10, 10, 0, 20); // Rear left leg
  line(10, 10, 20, 20); // Rear right leg

  pop();
  endShape();
};
