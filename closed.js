var button2;
var button8;


function setup() {      
  background(255);   
  button2 = createImg('window.png'); 
  button2.position(135, 165);  
  button2.size(350, 350);  
  button2.mousePressed(closeWin);   
   
  button8 = createImg('closeText.png'); 
  button8.position(170, 135);  
  button8.size(312, 22);  
  button8.mousePressed(closeWin);   
}

function closeWin() {     
  window.open('open.html');
 // window.close('closed.html');
}












      

        

