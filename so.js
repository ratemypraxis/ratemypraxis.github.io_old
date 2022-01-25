let bg;
let meat1;
let meat2;
let meat3;
// let carrot;
// let tomato;
// let potato;
let veggy2;
let veggy3;
let broth1;
let broth2;
let broth3;
let b1;
let b2;
let b3;
let delay;
let reverb;
let distortion;
var kick;
var zap;
var clap;
var carrot;
var tomato;
var potato;
let kickSound;
let zapSound;
let clapSound;
let carrotSound;
let tomatoSound;
let potatoSound;
// var v1;
// var v2;
// var v3;


function onSoundLoadSuccess(e){
  console.log("load sound success",e);
}
function onSoundLoadError(e){
  console.log("load sound error",e);
}
function onSoundLoadProgress(e){
  console.log("load sound progress",e);
}
function preload() {
 soundFormats('mp3', 'ogg');
 kickSound = loadSound("http://127.0.0.1:5500/kick.mp3",onSoundLoadSuccess,onSoundLoadError,onSoundLoadProgress);
 zapSound = loadSound("http://127.0.0.1:5500/fastKick.mp3",onSoundLoadSuccess,onSoundLoadError,onSoundLoadProgress);
 clapSound = loadSound("http://127.0.0.1:5500/drop.mp3",onSoundLoadSuccess,onSoundLoadError,onSoundLoadProgress);
 carrotSound = loadSound("http://127.0.0.1:5500/melody1.mp3",onSoundLoadSuccess,onSoundLoadError,onSoundLoadProgress);
 tomatoSound = loadSound("http://127.0.0.1:5500/melody2.mp3",onSoundLoadSuccess,onSoundLoadError,onSoundLoadProgress);
 potatoSound = loadSound("http://127.0.0.1:5500/melody3.mp3",onSoundLoadSuccess,onSoundLoadError,onSoundLoadProgress);

  
  m1 = loadImage('m1.png');
  m2 = loadImage('m2.png');
  m3 = loadImage('m3.png');
  b1 = loadImage('b1.png');
  b2 = loadImage('b2.png');
  b3 = loadImage('b3.png');
  v1 = loadImage('carrot.png');
  v2 = loadImage('v2.png');
  v3 = loadImage('v3.png');
  
}

function setup() {
createCanvas(860, 600); 
  bg = loadImage('soup.jpg');
    loadImage('soup.jpg', img1 => {
    image(img1, 0, 0);
  });
  
 delay = new p5.Delay();
reverb = new p5.Reverb();
 distortion = new p5.Distortion();
  
 meat1 = createButton('Add');
  meat1.position(425, 85);
  meat1.mousePressed(addMeat1);
  
   meat2 = createButton('Add');
  meat2.position(595, 85);
  meat2.mousePressed(addMeat2);
  
     meat3 = createButton('Add');
  meat3.position(755, 85);
  meat3.mousePressed(addMeat3);
  
  veggy1 = createButton('Add');
  veggy1.position(445, 285);
  veggy1.mousePressed(addCarrot);
  
  veggy2 = createButton('Add');
  veggy2.position(570, 285);
  veggy2.mousePressed(addTomato);
  
  veggy3 = createButton('Add');
  veggy3.position(690, 285);
  veggy3.mousePressed(addPotato);
  
  broth1 = createButton('Add');
  broth1.position(455, 565);
  broth1.mousePressed(addChikn);
  
  broth2 = createButton('Add');
  broth2.position(595, 565);
  broth2.mousePressed(addVeggie);
  
  broth3 = createButton('Add');
  broth3.position(735, 565);
  broth3.mousePressed(addBrown);
}

function draw(){

}
function addMeat1() {
    kickSound.loop(); 
    image(m1, 160, 300, 70, 70);
}

function addMeat2() {
    zapSound.loop(); 
   image(m2, 70, 230, 70, 70);
}

function addMeat3() {
    zapSound.loop(); 
  image(m3, 200, 200, 70, 70);
}

function addCarrot() {
    carrotSound.loop(); 
  image(v1, 140, 230, 70, 70);
}

function addTomato() {
    potatoSound.loop(); 
  image(v2, 80, 290);
}

function addPotato() {
    tomatoSound.loop(); 
  image(v3, 200, 270, 50, 50);
}

function addChikn() {
  image(b1, 35, 170, 250, 200);
  delay.process(carrotSound, .12, .7, 2300);
  delay.process(tomatoSound, .12, .7, 2300);
  delay.process(potatoSound, .12, .7, 2300);
  delay.process(zapSound, .12, .7, 2300);
  delay.process(clapSound, .12, .7, 2300);
  delay.process(kickSound, .12, .7, 2300);  
  
}

function addVeggie() {
  image(b2, 35, 170, 250, 200);
  reverb.process(carrotSound, .12, .7, 2300);
  reverb.process(tomatoSound, .12, .7, 2300);
  reverb.process(potatoSound, .12, .7, 2300);
  reverb.process(zapSound, .12, .7, 2300);
  reverb.process(clapSound, .12, .7, 2300);
  reverb.process(kickSound, .12, .7, 2300);  
  
}
  
function addBrown() {
  image(b3, 35, 170, 250, 200);
  distortion.process(carrotSound, .12, .7, 2300);
  distortion.process(tomatoSound, .12, .7, 2300);
  distortion.process(potatoSound, .12, .7, 2300);
  distortion.process(zapSound, .12, .7, 2300);
  distortion.process(clapSound, .12, .7, 2300);
  distortion.process(kickSound, .12, .7, 2300); 
}

// function mouseReleased() {
//     clickSound.pause(); 
// }

function keyPressed(){
  if (keyCode == UP_ARROW) {
    upSound.loop(); 
  } else if (keyCode == DOWN_ARROW) {
    downSound.loop(); 
  } else if (keyCode == LEFT_ARROW) {
    leftSound.loop(); 
  } else if (keyCode == RIGHT_ARROW) {
    rightSound.loop(); 
  }else if (key == ' ') {
    spaceBarSound.loop(); 
  }
}

// function keyReleased(){
//   if (keyCode == UP_ARROW) {
//     upSound.pause(); 
//   } else if (keyCode == DOWN_ARROW) {
//     downSound.pause(); 
//   } else if (keyCode == LEFT_ARROW) {
//     leftSound.pause(); 
//   } else if (keyCode == RIGHT_ARROW) {
//     rightSound.pause(); 
//   }else if (key == ' ') {
//     spaceBarSound.pause(); 
//   }
// }

