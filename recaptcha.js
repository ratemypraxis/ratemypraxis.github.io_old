//minigame to find a light switch and turn on the lights
//switch location + size variables
var x, y, w, h;
// light on variable
var on = false;
//switch flipper weight and color variables
let swOn, swOff, sOn, sOff;
//light switch highlight fill variable
let f;
//text content and fill variables
let tf;

function preload(){
    myFont = loadFont('000webfont.ttf');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  //light switch starting size and location
  w = 60;
  h = 80;
  x = random(width - width / 1.1, width / 1.1);
  y = random(height / 1.1, height - height / 1.4);
  textFont(myFont);
}

function draw() {
  if (on) {
    background("gray");
    //adds highlight
    f = "yellow";
    //light switch flipping animation through stroke weight and color
    sOn = "black";
    sOff = "gray";
    swOn = 6;
    swOff = 0;
    //message text change and color change
    tf = "black";
  } else {
    background("black");
    f = "rgba(0,0,0,0)";
    sOn = "gray";
    sOff = "black";
    swOn = 0;
    swOff = 6;
    tf = "grey";
  }

  //spotlight attached to mouse
  noStroke();
  fill("gray");
  ellipse(mouseX, mouseY, 300, 300);

  //highlight around light switch
  strokeWeight(3);
  noStroke();
  if (mouseX > x - w && mouseX < x + w && mouseY > y - w && mouseY < y + h) {
    stroke("yellow");
    strokeWeight(3);
  }

  //light switch
  rectMode(CENTER);
  noFill();
  rect(x, y, w, h);
  stroke("black");
  strokeWeight(1);
  rect(x, y, w - 2, h - 2);
  rect(x, y, w / 1.5, h / 1.5);
  // line(x, y + 8, x, y + 20);
  // line(x, y + 21, x, y + 30);

  //title
  noStroke();
  fill("black");
  textAlign(CENTER);
  textSize(64);
  text("reCAPTCHA DVD Album Release", width / 2, height - height / 1.1);

  //instruct
  textSize(64);
  fill("grey");
  text("Find the switch for info", width / 2, height - height / 2);
  text("Mobile users tap and drag", width / 2, height - height / 2.2);
    
  //lineup
  noStroke();
  fill("rgb(0,0,0)");
  textAlign(CENTER);
  textSize(64);
  text("SoLow", width / 2, height - height / 1.2);
  textSize(50);
  text("Afterlife.Online + Magpie", width / 2, height - height / 1.25);
  textSize(64);
  text("Camp Rock", width / 2, height - height / 1.4);
  textSize(50);
  text("Mercury Symbol + Soless Dialtone", width / 2, height - height / 1.475);
  textSize(64);
  text("starloop", width / 2, height - height / 1.7);
  textSize(50);
  text("Kate Williams + Cal Fish", width / 2, height - height / 1.795);
  textSize(64);
  text("reCAPTCHA", width / 2, height - height / 2.12);
  textSize(50);
  text("Syd Miller + Sim Hahahah", width / 2, height - height / 2.25);
  textSize(64);
  text("PUSHPIN (DJ)", width / 2, height - height / 2.7);

  //info
  textSize(64);
  text("Wednesday Novermber 23rd at 8pm", width / 2, height - height / 3.45);
  text("at Club Ligma Bar & Grille", width / 2, height - height / 4);
  text("ask a sim for more info", width / 2, height - height / 4.75);

  //switch on/off state
  stroke(sOn);
  strokeWeight(swOn);
  line(x, y -10, x, y);
  stroke(sOff);
  strokeWeight(swOff);
  line(x, y, x, y + 10);

bulb();
}

//turning the light on when mouse is pressed within bounds of light switch
function mousePressed() {
  if (mouseX > x - w && mouseX < x + w && mouseY > y - h && mouseY < y + h) {
    on = !on;
  }
}

function bulb(){
    noStroke();
  fill(f);
  rectMode(CENTER);
  xB = width/2;
  yB = height-height;
  rect(xB, yB, 12, 20);
  ellipse(xB, yB / 1.04, 25, 25);
}

// credits
// button switch by icm
//https://editor.p5js.org/icm/sketches/Sywrrqa2
//square rollover by icm
//https://editor.p5js.org/icm/sketches/rkLfL56h
