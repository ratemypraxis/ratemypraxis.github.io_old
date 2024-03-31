function smallText() {
    //Document Object Model
    //translates html into javaScript
    document.getElementById('textStatus').innerHTML = "Small";
    //this part of the Document Object Model translates CSS into Javascipt
    document.getElementById("all").style.fontSize = "18px";
    document.getElementById("currentText").style.fontSize = "18px";
    document.getElementById("weekd").style.fontSize = "18px";
    document.getElementById("when").style.fontSize = "18px";
    document.getElementById("textStatus").style.fontSize = "18px";
    document.getElementById("textSize").style.fontSize = "18px";
    document.getElementById("about").style.fontSize = "18px";

}
function largeText() {
    //Document Object Model
    //translates html into javaScript
    document.getElementById('textStatus').innerHTML = "Large";
    //this part of the Document Object Model translates CSS into Javascipt
    document.getElementById("all").style.fontSize = "27px";
    document.getElementById("textStatus").style.fontSize = "27px";
    document.getElementById("weekd").style.fontSize = "27px";
    document.getElementById("when").style.fontSize = "27px";
    document.getElementById("currentText").style.fontSize = "27px";
    document.getElementById("textSize").style.fontSize = "27px";
    document.getElementById("about").style.fontSize = "27px";
    document.getElementsByTagName("footer").style.fontSize = "27px";


}
