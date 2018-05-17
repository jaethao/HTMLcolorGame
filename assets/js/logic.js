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

  colorGame = [
      {color: "azure",
      answers: ["aliceblue", "azure", "cornsilk", "floralwhite"],
      correct: 1
    },{
      color: "light sea green",
      answers: ["aquamarine", "cyan", "lightseagreen", "mediumturquoise"],
      correct: 2
    },{
      color: "peach puff",
      answers: ["salmon", "pink", "mistyrose", "peachpuff"],
      correct: 3
    },{
      color: "navajo white",
      answers: ["antiquewhite", "bisque", "blanchedalmond", "navajowhite"],
      correct: 3
    },{
      color: "steel blue",
      answers: ["cadetblue", "darkslategray", "steelblue", "teal"],
      correct: 2
    },{
      color: "fire brick",
      answers: ["crimson", "darkred", "indianred", "firebrick"],
      correct: 3
    },{
      color: "lawn green",
      answers: ["lawngreen", "yellowgreen", "springgreen", "chartreuse"],
      correct: 0
    },{
      color: "dark orchid",
      answers: ["blueviolet", "darkorchid", "darkviolet", "rebeccapurple"],
      correct: 1
    },{
      color: "hot pink",
      answers: ["deeppink", "fuchsia", "hotpink", "magenta"],
      correct: 2
    },{
      color: "papaya whip",
      answers: ["papayawhip", "gold", "khaki", "goldenrod"],
      correct: 0
    },{
      color: "tomato",
      answers: ["coral", "orangered", "tomato", "orange"],
      correct: 2
    },{
      color: "thistle",
      answers: ["plum", "thistle", "lightpink", "palevioletred"],
      correct: 1
    },{
      color: "light grey",
      answers: ["silver", "gainsboro", "lavender", "lightgrey"],
      correct: 3
    },{
      color: "navy",
      answers: ["midnightblue", "darkblue", "navy", "indigo"],
      correct: 2
    },{
      color: "sandy brown",
      answers: ["wheat", "sandybrown", "rosybrown", "peru"],
      correct: 1
    },{
      color: "dodger blue",
      answers: ["steelblue", "cornflowerblue", "royalblue", "dodgerblue"],
      correct: 3
    },{
      color: "linen",
      answers: ["linen", "honeydew", "ivory", "mintcream"],
      correct: 0
    },{
      color: "grey",
      answers: ["cadetblue", "slategrey", "gray", "dimgray"],
      correct: 2
    },{
      color: "chocolate",
      answers: ["brown", "chocolate", "sienna", "saddlebrown"],
      correct: 1
    }];

});
