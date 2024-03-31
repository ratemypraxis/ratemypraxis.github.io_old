// <!-- date object code built from an example and notes by Professor Sofy Yuditskaya -->
// <!-- using the date object to get the day of the week then changing the page background color to a different shade of purple each day -->


//refreshTheClock() has a variable called "refreshInterval" which we set to 1000 milliseconds,
//the standard time measurement unit in most programming languages
//and a variable called mytime which runs the built-in function setTimeout()
//setTimeout() is being passed clockDisplay() via its parentheses and the value of refreshInterval
function refreshTheClock() {
  var refreshInterval = 1000; // Refresh rate in milli seconds
  var mytime = setTimeout('clockDisplay()', refreshInterval);
}

//clockDisplay() is the function that displays the clock as we developed it in class
function clockDisplay() {
  // new instance of the date object
  // and passing that object's info into a variable I am calling "d"
  var d = new Date();
  var weekday = new Array(7);
  var weekday2 = new Array(7);
  // a variable I am calling hours getting the information from the getHours() method of the Date() object passed into it
  //  var days = d.getDay();
  weekday[0] = "Sunday";
  weekday[1] = "Monday";
  weekday[2] = "Tuesday";
  weekday[3] = "Wednesday";
  weekday[4] = "Thursday";
  weekday[5] = "Friday";
  weekday[6] = "Saturday";
  // weekday2[0] = "#4b276a";
  // weekday2[1] = "#492d78";
  // weekday2[2] = "#483284";
  // weekday2[3] = "#473690";
  // weekday2[4] = "#463a9a";
  // weekday2[5] = "#4540a8";
  // weekday2[6] = "#4345b6";
  var hours = d.getHours();
  var minutes = d.getMinutes();
  var days = weekday[d.getDay()];
  var days2 = weekday2[d.getDay()];
  // a variable I called "clock" that contains the concatenation of text and number variables
  var clock = " at " + hours + ":" + minutes;
  //  var week = days;
  document.getElementById("weekd").innerHTML = days;
  document.getElementById("when").innerHTML = clock;
  // document.getElementById("bod").style.backgroundColor = days2;
  //document.getElementById("weekd").innerHTML = week;
  //after we write the current time into the element with "demo" ID, we run refreshTheClock();
  refreshTheClock();
}