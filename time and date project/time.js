function currentTime() {
  var date = new Date(); /* creating object of Date class */
  var hour = date.getHours();
  var min = date.getMinutes();
  var sec = date.getSeconds();
  var day = date.getDate();
  var month = date.getMonth();
  var year = date.getFullYear();

  hours = updateTime(hour);
  mins = updateTime(min);
  secs = updateTime(sec);

var d = new Date();
document.getElementById("dateIs").innerHTML = d.toDateString();
  document.getElementById("timeIs").innerText = hour + " : " + min + " : " + sec; 
  /* adding time to the div */
    var t = setInterval(function(){ currentTime() }, 1000); /* setting timer */
}

function updateTime(k) {
  if (k < 10) {
    return "0" + k;
  }
  else {
    return k;
  }
}

currentTime(); 
