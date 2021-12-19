var button;
var button1;
var button9;
let door;

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
 door = loadSound("door.mp3",onSoundLoadSuccess,onSoundLoadError,onSoundLoadProgress);
}


function setup() {      
  createCanvas(windowWidth, windowHeight);      
  background(255);   
  button = createImg('doorOpen.png');     
  button.position(width/2.4, height/2.8);  
  button.size(256, 256);  
  button.mousePressed(openWin); 
  button9 = createImg('openText.png');     
  button9.position(width/3, height/5);  
  button9.size(518, 22);  
  button9.mousePressed(openWin);      
}
     


       
function openWin() {          
  background(0);
  button1 = createImg('doorClosed.png');  
  button1.position(width/2.4, height/2.8);  
  button1.size(256, 256);  
  button.size(0,0);
  button9.size(0,0);
  window.open('closed.html', "_blank","width=480","height=480");
  door.play();
      
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}


      
        