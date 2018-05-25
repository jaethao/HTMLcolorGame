$(document).ready(function(){

  //restart button refresh page
  $("#restart").click(function() {
    location.reload();
  });

  //game logic
  //variables to store wins, losses, and time
  var wins = 0;
  var losses = 0;

//colors stored in an array
  var colors = [
    "aliceBlue",
    "azure",
    "cornsilk",
    "floralWhite",
    "ghostWhite",
    "aquamarine",
    "cyan",
    "lightSeaGreen",
    "mediumSpringGreen",
    "mediumTurquoise",
    "salmon",
    "pink",
    "peahcPuff",
    "mistyRose",
    "coral",
    "antiqueWhite",
    "bique",
    "blanchedAlmond",
    "lemonChiffon",
    "navajoWhite",
    "cadetBlue",
    "darkSlateGray",
    "steelBlue",
    "teal",
    "crimson",
    "darkRed",
    "fireBrick",
    "indianRed",
    "maroon",
    "yellowGreen",
    "springGreen",
    "chartreuse",
    "lime",
    "lawnGreen",
    "blueViolet",
    "darkOrchid",
    "darkViolet",
    "mediumPurple",
    "rebeccaPurple",
    "deepPink",
    "fuchsia",
    "hotPink",
    "magenta",
    "violet",
    "yellow",
    "gold",
    "goldenRod",
    "khaki",
    "papayaWhip",
    "orangeRed",
    "darkSalmon",
    "orange",
    "tomato",
    "thistle",
    "plum",
    "lghtPink",
    "paleVioletRed",
    "orchid",
    "silver",
    "lightSteelBlue",
    "lightGrey",
    "lavender",
    "gainsboro",
    "blue",
    "darkBlue",
    "indigo",
    "navy",
    "midnightBlue",
    "wheat",
    "tan",
    "sandyBrown",
    "rosyBrown",
    "peru",
    "brown",
    "chocolate",
    "saddleBrown",
    "sienna",
    "honeyDew",
    "ivory",
    "lavenderBlush",
    "linen",
    "mintCream",
    "slateBlue",
    "royalBlue",
    "dodgerBlue",
    "cornflowerBlue",
    "gray",
    "darkGray",
    "dimGray",
    "slateGray"
      ];

//select all the square class
var squares = document.querySelectorAll(".square");

//pick four rand colors from the array
//while loop to pick four random colors from the colors array
var randColors = [];
do {
randColors[randColors.length] = colors.splice(Math.floor(Math.random() * colors.length) , 1)[0];
} while (randColors.length < 4);

//pick a random color from the randColors array
var pickedColor = randColors[Math.floor(Math.random()*randColors.length)];

//store the random color to the colorDisplay div
var colorDisplay = document.getElementById("colorDisplay");

//display the random color in the div
colorDisplay.textContent = pickedColor;

//loop thru the colors and squares
for(var i = 0; i < squares.length; i++){
//add four randColors to the squares
squares[i].style.backgroundColor = randColors[i];

//add click listeners to colorSquares
squares[i].addEventListener("click", function(){

  //grab color of click square and compare to pickedColor
  var clickedColor = this.style.backgroundColor;

  var header = document.getElementsByTagName('header');

  //compare color to pickedColor
  if(clickedColor === pickedColor){
    alert("Correct!");
  }  else {
    alert("Wrong!!!");
  }
});
};

});
