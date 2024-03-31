// <!-- date object code built from an example and notes by Professor Sofy Yuditskaya -->
// <!-- using the date object to get the day of the week then changing the page background color to a different shade of purple each day -->


//refreshTheClock() has a variable called "refreshInterval" which we set to 1000 milliseconds,
//the standard time measurement unit in most programming languages
//and a variable called mytime which runs the built-in function setTimeout()
//setTimeout() is being passed clockDisplay() via its parentheses and the value of refreshInterval
function refreshTheClock() {
  var refreshInterval = 1000; 
  var mytime = setTimeout(clockDisplay, refreshInterval);
}

function clockDisplay() {
  var d = new Date();
  var weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  var hours = d.getHours();
  var minutes = d.getMinutes().toString().padStart(2, '0'); // minutes always have two digits (add a zero to single digit times)
  var days = weekday[d.getDay()];
  var clock = " at " + hours + ":" + minutes;
  
  document.getElementById("weekd").innerHTML = days;
  document.getElementById("when").innerHTML = clock;
  
  refreshTheClock(); // refreshTheClock after updating the time
}

clockDisplay();