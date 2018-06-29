var d = new Date();


document.getElementById("d-output").innerHTML = d;

var dFixed = new Date(2012, 11, 24, 10, 33, 30, 5200);

document.getElementById("date-arguments-output").innerHTML = dFixed;

var dYear = d.getUTCFullYear;
document.getElementById("date-year").innerHTML = dYear;

var dHour = d.getHours;
document.getElementById("date-hour").innerHTML = dHour;