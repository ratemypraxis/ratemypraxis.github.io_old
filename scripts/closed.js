var button2;
var button8;

let mosquito;
function preload() {
  soundFormats('mp3');
  mosquito = loadSound('../audio/mosquito.mp3');
}

function setup() {      
  background(255);   

  button2 = createImg('../images/window.gif'); 
  button2.position(135, 165);  
  button2.size(350, 350);  
  button2.mousePressed(closeWin);   
   
  button8 = createImg('../images/closeText.png'); 
  button8.position(170, 135);  
  button8.size(312, 22);  
  mosquito.play();
}

function preload(){
  mosquito = loadSound('../audio/mosquito.mp3');

}

function closeWin() {     
  window.open('../index.html');
  window.close('closed.html');
}












      

        

