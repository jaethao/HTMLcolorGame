$(document).ready(function(){

  //restart button refresh page
  $("#restart").click(function() {
    location.reload();
  });

  //game logic
  //variables to store wins, losses, and time
  var wins = 0;
  var losses = 0;
  var time = 30;

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

var squares = document.querySelectorAll(".square");
var pickedColor = colors[Math.floor(Math.random()*colors.length)];
var colorDisplay = document.getElementById("colorDisplay");

colorDisplay.textContent = pickedColor;




});
