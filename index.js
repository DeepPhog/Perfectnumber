//perfect number function
function is_perfect(number) {
  var number = parseFloat(number);
  var temp = 0;
  for (var i = 1; i <= number / 2; i++) {
    if (number % i === 0) {
      temp += i;
    }
  }
  if (temp === number && temp !== 0) {
    console.log(number + " is a perfect number.");
  } else {
    console.log(number + " is not a perfect number.");
  }
}

//Perfect number varibles
var submit = document.getElementById("button1");
var random = document.getElementById("button2");
//submit
submit.onclick = function getnumber() {
  var number = document.getElementById("number").value;
  is_perfect(number);
};
//random button
random.onclick = function randomnum() {
  var number = Math.round(Math.random() * 255);
  is_perfect(number);
};
document.getElementById("color-type").oninput = function () {
  colorfunc2();
};
//color changer
document.getElementById("myRange1").oninput = function () {
  colorfunc();
};
document.getElementById("myRange2").oninput = function () {
  colorfunc();
};
document.getElementById("myRange3").oninput = function () {
  colorfunc();
};
//colorfunc 1
function colorfunc() {
  var r = document.getElementById("myRange1").value;
  var g = document.getElementById("myRange2").value;
  var b = document.getElementById("myRange3").value;
  console.log("rgb(" + r + "," + g + "," + b + ")");

  document.body.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
}
//colorfun 2

function colorfunc2() {
  var color = document.getElementById("color-type").value;
  console.log(color);

  document.body.style.backgroundColor = color
}
