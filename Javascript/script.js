var randomNumber1 = Math.floor(Math.random()*6) +1;
var randomNumber2 = Math.floor(Math.random()*6) +1;
var image = "images/"+ "dice" + randomNumber1 + ".png";
var image2 = "images/"+ "dice" + randomNumber2 + ".png";
var img1 = document.querySelectorAll('img')[0];
img1.setAttribute("src", image);
var img2 = document.querySelectorAll('img')[1];
img2.setAttribute("src", image2);

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🎉P1 Wins"

}
else if(randomNumber2>randomNumber1) {
  document.querySelector("h1").innerHTML = "P2 Wins🎉"
}
else {
  document.querySelector("h1").innerHTML = "🧤Draw🧤"
}
