//Meine Win/Lose Funktion leider nicht.

let x = 0;
let y = 0;
let selected = 0;
let speed = 0;

function back() {
  noStroke();
  background(0, 0, 26);
  fill(158, 158, 158);
  rect(0, 450, 700, 200, 10); //Boden
  fill(120, 120, 120);
  circle(90, 500, 20, 20);
  fill(55, 55, 55);
  circle(90, 500, 10, 30); //1
  fill(120, 120, 120);
  circle(200, 590, 20, 20);
  fill(55, 55, 55);
  circle(200, 590, 10, 30); //2
  fill(120, 120, 120);
  circle(300, 530, 20, 20);
  fill(55, 55, 55);
  circle(300, 530, 10, 30); //3
  fill(120, 120, 120);
  circle(400, 490, 20, 20);
  fill(55, 55, 55);
  circle(400, 490, 10, 30); //4
  fill(120, 120, 120);
  circle(490, 540, 20, 20);
  fill(55, 55, 55);
  circle(490, 540, 10, 30); //3
  // Hintergrund
}

function spaceship() {
  noStroke();
  fill(255, 193, 193);
  circle(300 + x, 80 + y, 20);
  triangle(270 + x, 130 + y, 300 + x, 80 + y, 330 + x, 130 + y);
  fill(55, 55, 55);
  circle(300 + x, 80 + y, 10);
  y = y + 1.5;
  if (y > 320) {
    y = y - 1.5;
    //spaceship
  }
}

function engine() {
  fill(255, 0, 0);
  triangle(290 + x, 130 + y, 300 + x, 160 + y, 310 + x, 130 + y); //großes Dreieick
  fill(255, 0, 0);
  triangle(290 + x, 130 + y, 310 + x, 145 + y, 280 + x, 148 + y); //linkes Dreieck
  triangle(310 + x, 130 + y, 320 + x, 147 + x + y, 300 + x, 145 + y); //rechtes Dreieck
}

function startButton() {
  if (selected === 1) {
    fill(0, 154, 205);
    rect(90, 50, 70, 40, 10);
    fill(0, 0, 0);
    textSize(20);
    textFont("PHOSPHATE");
    text("Start", 100, 75);
  } else {
    fill(255, 255, 255);
    rect(90, 50, 70, 40, 10);
    fill(0, 0, 0);
    textSize(20);
    textFont("PHOSPHATE");
    text("Start", 100, 75);
  }

  // Start Button
}

function resetButton() {
  if (selected === 2) {
    fill(205, 92, 92);
    rect(450, 50, 70, 40, 10);
    fill(0, 0, 0);
    textSize(20);
    textFont("PHOSPHATE");
    text("Reset", 460, 75);
  } else {
    fill(255, 255, 255);
    rect(450, 50, 70, 40, 10);
    fill(0, 0, 0);
    textSize(20);
    textFont("PHOSPHATE");
    text("Reset", 460, 75);
  }
  //Reset Button
}

function platformBlue() {
  fill(0, 0, 128);
  rect(390, 410, 100, 40);
}

function keyPressed() {
  if (keyCode === 37) {
    x = x - 20; //left
  }
  if (keyCode === 38) {
    y = y - 30; //up
    engine();
  }
  if (keyCode === 39) {
    x = x + 20; //right
  }
  if (keyCode === 40) {
    y = y + 5; //down
  }
}

function draw() {
  back();
  spaceship();
  startButton();
  resetButton();
  platformBlue();

  if (mouseX > 390 && mouseX < 490 && mouseY < 450 && mouseY > 410) {
    fill(255, 0, 0);
    textSize(40);
    text("You win", 200, 250);
    console.log("hi");
  }
  if ((x >= 0 && x <= 380 && y === 451) || (x > 490 && x < 680 && y === 451)) {
    fill(255, 0, 0);
    textSize(40);
    text("You lose", 200, 250);
  }
}
console.log(x);
//Speed
if (mouseX > 90 && mouseX < 160 && mouseY > 50 && mouseY < 90) {
  y = y + speed;
  if (keyIsDown(38)) {
    speed = speed - 0.1;
  } else {
    speed = speed + 0.1;
  }
}

if (y > 300) {
  y = 300;
  speed = speed + 0;
}
console.log(speed);

function mousePressed() {
  startButton();
  if (mouseX > 90 && mouseX < 160 && mouseY > 50 && mouseY < 90) {
    y = 50;
    selected = 1;
    speed = -1.0;
  }

  if (mouseX > 450 && mouseX < 520 && mouseY > 50 && mouseY < 90) {
    resetButton();
    y = 50;
    selected = 2;
    speed = -1.0;
  }
}
