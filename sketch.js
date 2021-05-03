var button;
var button2;
var button3;
var button4;
let x = 325;
let y = 1;
let x2 = 325;
let y2 = 725;
let x3 = 749;
let y3 = 325;
let x4 = 75;
let y4 = 445;
let xspeed = 1;
let yspeed = 1;
let x2speed = 1;
let y2speed = 1;
let x3speed = 1;
let y3speed = 1;
let x4speed = 1;
let y4speed = 1;
let r = 10;
let changeX;
let changeY;


function setup() {
  button = createImg('pixelIconBig.png');
  button2 = createImg('videoIconBig.png');
  button3 = createImg('soundIconBig.png');
  button4 = createImg('contactIconBig.png');

  var canvas = createCanvas(750, 750);
      canvas.parent("p5Canvas");

  for (let i = 0; i < 4; i++) {
    changeX = random(-1, 1);
    changeY= random(-1, 1);
  }
}

function draw() {
// code for dynamics adapted from the coding train bouncing ball example: https://thecodingtrain.com/beginners/p5js/3.2-bouncing-ball.html

  // Add the current speed to the position.
  x = x - xspeed;

  if ((x > width+r) || (x < r)) {
    xspeed = xspeed * -1;
  }

    // Add the current speed to the position.
  x2 = x2 + xspeed;

  if ((x2 < width+r) || (x2 < r)) {
    x2speed = x2speed * -1;
  }


    // Add the current speed to the position.
  y3 = y3 - y3speed;


  if ((y3 > height+r) || (y3 < r)) {
    y3speed = y3speed * -1;
  }

    // Add the current speed to the position.
  y4 = y4 + y4speed;


  if ((y4 > height+r) || (y4 < r)) {
    y4speed = y4speed * -1;
  }

  // Display circle at x position

  button.position(x,y).parent("p5Canvas");
  button.size(200,200);
  button.alt = "A 32-bit pixel rendition of a canvas featuring a pink painted heart symbol. Green text centered in the foreground reads Pixels.";
  button.mousePressed(openLink);


  button2.position(x2,y2).parent("p5Canvas");
  button2.size(200,200);
  button2.alt = "A 32-bit drawing of a pink double music note on top of a blue circle, in the centered foreground green text reads Music.";
  button2.mousePressed(openLink2);

   button3.position(x3,y3).parent("p5Canvas");
  button3.size(200,200);
  button3.alt = "A 32-bit pixel rendition of a pink anteanna television set with the text Video in the centered foreground in green.";
  button3.mousePressed(openLink3);

  button4.position(x4,y4).parent("p5Canvas");
  button4.size(200,200);
  button4.alt = "A 32-bit image of a pink question mark in front of a blue circle. In the centered foreground green text reads About.";
  button4.mousePressed(openLink4);

}

function openLink() {
  window.open("pixelArt.html","_self");

}

function openLink2() {
  window.open("video.html","_self");

}

function openLink3() {
  window.open("music.html","_self");

}

function openLink4() {
  window.open("contact.html","_self");

}
