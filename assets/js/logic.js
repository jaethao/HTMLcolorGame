$(document).ready(function(){

  //restart button refresh page and load new colors
  $("#restart").click(function() {
    location.reload();
  });

  //game logic

//colors stored in an array
  var colors = [
    "aliceblue",
    "azure",
    "cornsilk",
    "floralwhite",
    "ghostwhite",
    "aquamarine",
    "cyan",
    "lightseagreen",
    "mediumspringgreen",
    "mediumturquoise",
    "salmon",
    "pink",
    "peachpuff",
    "mistyrose",
    "coral",
    "antiquewhite",
    "bisque",
    "blanchedalmond",
    "lemonchiffon",
    "navajowhite",
    "cadetblue",
    "darkslategray",
    "steelblue",
    "teal",
    "crimson",
    "darkred",
    "firebrick",
    "indianred",
    "maroon",
    "yellowgreen",
    "springgreen",
    "chartreuse",
    "lime",
    "lawngreen",
    "blueviolet",
    "darkorchid",
    "darkviolet",
    "mediumpurple",
    "rebeccapurple",
    "deeppink",
    "fuchsia",
    "hotpink",
    "magenta",
    "violet",
    "yellow",
    "gold",
    "goldenrod",
    "khaki",
    "papayawhip",
    "orangered",
    "darksalmon",
    "orange",
    "tomato",
    "thistle",
    "plum",
    "lightpink",
    "palevioletred",
    "orchid",
    "silver",
    "lightsteelblue",
    "lightgrey",
    "lavender",
    "gainsboro",
    "blue",
    "darkblue",
    "indigo",
    "navy",
    "midnightblue",
    "wheat",
    "tan",
    "sandybrown",
    "rosybrown",
    "peru",
    "brown",
    "chocolate",
    "saddlebrown",
    "sienna",
    "honeydew",
    "ivory",
    "lavenderblush",
    "linen",
    "mintcream",
    "slateblue",
    "royalblue",
    "dodgerblue",
    "cornflowerblue",
    "gray",
    "darkgray",
    "dimgray",
    "slategray"
      ];

//select all the square class
var squares = document.querySelectorAll(".square");

//pick four rand colors from the array
//while loop to pick four random colors from the colors array to display on the 4 squares
var randColors = [];
do {
randColors[randColors.length] = colors.splice(Math.floor(Math.random() * colors.length) , 1)[0];
} while (randColors.length < 6 );

//pick a random color from the randColors array
var pickedColor = randColors[Math.floor(Math.random()*randColors.length)];

console.log(pickedColor);

//store the random color to the colorDisplay div
var colorDisplay = document.getElementById("colorDisplay");

//display the random color in the div
colorDisplay.textContent = pickedColor;

//loop thru the colors and squares
  for(var i = 0; i < squares.length; i++){
//add four randColors to the squares
squares[i].style.backgroundColor = randColors[i];

//add click listener function to colorSquares
squares[i].addEventListener("click", function(){

  //grab color of click square and compare to pickedColor
  var clickedColor = this.style.backgroundColor;
  console.log(clickedColor);

  var header = $("header");

  //compare color to pickedColor
  if(clickedColor === pickedColor){
    header.css("background-color", pickedColor);
    $("#message").text("Good Job!");
    $("#restart").text("Play again!");
    changeColors(clickedColor);
  }  else {
    $("#message").text("Try again!");
    this.style.backgroundColor = "white";
  }

});
};

function changeColors(color){
  for(var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = color;
  }
};

});
