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
 kickSound = loadSound("audio/kick.mp3",onSoundLoadSuccess,onSoundLoadError,onSoundLoadProgress);
 zapSound = loadSound("audio/fastKick.mp3",onSoundLoadSuccess,onSoundLoadError,onSoundLoadProgress);
 clapSound = loadSound("audio/drop.mp3",onSoundLoadSuccess,onSoundLoadError,onSoundLoadProgress);
 carrotSound = loadSound("audio/melody1.mp3",onSoundLoadSuccess,onSoundLoadError,onSoundLoadProgress);
 tomatoSound = loadSound("audio/melody2.mp3",onSoundLoadSuccess,onSoundLoadError,onSoundLoadProgress);
 potatoSound = loadSound("audio/melody3.mp3",onSoundLoadSuccess,onSoundLoadError,onSoundLoadProgress);

  
  m1 = loadImage('images/tofu.png');
  m2 = loadImage('images/mushroom.png');
  m3 = loadImage('images/fishBall.png');
  b1 = loadImage('images/chiknBroth.png');
  b2 = loadImage('images/veggieBroth.png');
  b3 = loadImage('images/mushroomBroth.png');
  v1 = loadImage('images/carrot.png');
  v2 = loadImage('images/tomato.png');
  v3 = loadImage('images/potato.png');
  
}

function setup() {
createCanvas(890, 620); 
  bg = loadImage('images/soup.png');
    loadImage('images/soup.png', img1 => {
    image(img1, 0, 0);
  });
  
 delay = new p5.Delay();
reverb = new p5.Reverb();
 distortion = new p5.Distortion();
  
 meat1 = createButton('Add Tofu');
  meat1.position(435, 169);
  meat1.mousePressed(addMeat1);
  
   meat2 = createButton('Add Mushroom');
  meat2.position(585, 169);
  meat2.mousePressed(addMeat2);
  
     meat3 = createButton('Add Fishball');
  meat3.position(745, 169);
  meat3.mousePressed(addMeat3);
  
  veggy1 = createButton('Add Carrot');
  veggy1.position(435, 385);
  veggy1.mousePressed(addCarrot);
  
  veggy2 = createButton('Add Tomato');
  veggy2.position(590, 385);
  veggy2.mousePressed(addTomato);
  
  veggy3 = createButton('Add Potato');
  veggy3.position(745, 385);
  veggy3.mousePressed(addPotato);
  
  broth1 = createButton('Add Chikn Broth');
  broth1.position(415, 580);
  broth1.mousePressed(addChikn);
  
  broth2 = createButton('Add Veggie Broth');
  broth2.position(575, 580);
  broth2.mousePressed(addVeggie);
  
  broth3 = createButton('Add Mushroom Broth');
  broth3.position(715, 580);
  broth3.mousePressed(addBrown);
}

function draw(){

}
function addMeat1() {
    kickSound.loop(); 
    image(m1, 155, 300, 70, 70);
}

function addMeat2() {
    zapSound.loop(); 
   image(m2, 70, 230, 70, 70);
}

function addMeat3() {
    clapSound.loop(); 
  image(m3, 200, 220, 70, 70);
}

function addCarrot() {
    carrotSound.loop(); 
  image(v1, 120, 220, 100, 100);
}

function addTomato() {
    potatoSound.loop(); 
  image(v2, 80, 300, 80, 80);
}

function addPotato() {
    tomatoSound.loop(); 
  image(v3, 200, 290, 100, 100);
}

function addChikn() {
  image(b1, 1, 1, 885, 640);
  delay.process(carrotSound, .12, .7, 2300);
  delay.process(tomatoSound, .12, .7, 2300);
  delay.process(potatoSound, .12, .7, 2300);
  delay.process(zapSound, .12, .7, 2300);
  delay.process(clapSound, .12, .7, 2300);
  delay.process(kickSound, .12, .7, 2300);  
  
}

function addVeggie() {
  image(b2, 1, 1, 885, 640);
  reverb.process(carrotSound, .12, .7, 2300);
  reverb.process(tomatoSound, .12, .7, 2300);
  reverb.process(potatoSound, .12, .7, 2300);
  reverb.process(zapSound, .12, .7, 2300);
  reverb.process(clapSound, .12, .7, 2300);
  reverb.process(kickSound, .12, .7, 2300);  
  
}
  
function addBrown() {
  image(b3, 1, 1, 885, 640);
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

