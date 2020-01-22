var targetNumber;
var aquamarine;
var amethyst;
var opal;
var topaz;
var userWins = 0;
var userLosses = 0;

var crystalSum;
//math.ceil rounds to the next number up 1.1->2
//math.floor goes 1.9->1

function loadPage() {
  targetNumber = Math.floor(Math.random() * 101) + 19;
  aquamarine = Math.floor(Math.random() * 11) + 1;
  amethyst = Math.floor(Math.random() * 11) + 1;
  opal = Math.floor(Math.random() * 11) + 1;
  topaz = Math.floor(Math.random() * 11) + 1;

  //.text function prints pure static text on the selector
  //.html will display as whatever tag you use
  //.append adds the element inside the parent element(targetNumber) and keeps adding from top to bottom
  //.prepend changed the order, from bottom to top (even though bottom already trumps top)
  //.empty wipes out all the children in a parent element
  //dynamic stuff is always inside the parent element

  $("#target-number").text(targetNumber);

  //left side is the selector, right side is the function of the selector
  //attr with 2 arguments does the storing/assignments

  $("#aquamarine").attr("data-number", aquamarine);
  $("#amethyst").attr("data-number", amethyst);
  $("#opal").attr("data-number", opal);
  $("#topaz").attr("data-number", topaz);
  $("#aquamarine").attr("class", "image-btn");
  $("#amethyst").attr("class", "image-btn");
  $("#opal").attr("class", "image-btn");
  $("#topaz").attr("class", "image-btn");

  $("#win-loss-counter").empty();
  $("#total-score").empty();

  crystalSum = 0;

  //.on has 2 arguments,
  //callback function is treated as an argument of another function

  $(".image-btn").on("click", function() {
    //one argument does the data reading of the attribute
    var getDataNumber = $(this).attr("data-number");

    getDataNumber = parseInt(getDataNumber);
    crystalSum = crystalSum + getDataNumber;

    if (crystalSum > targetNumber) {
      alert("You lost!");

      loadPage();
    } else if (crystalSum === targetNumber) {
      alert("You win!");

      loadPage();
    }

    $("#total-score").text(crystalSum);
  });
}

loadPage();

// var targetNumber = 28;

//   $("#number-to-guess").text(targetNumber);

//   var counter = 0;

//   // Here we created code that selects a number either 10 or 11.
//   // We'll set this number at the start of the "game".
//   var numberOptions = [10, 11];
//   var increment = numberOptions[Math.round(Math.random())];

//   $(".crystal-image").on("click", function() {

//     // We'll then increment theunter each time by the randomly selected number.
//     // If the number is 11, then users can win. (11 + 11 + 11 + 11 + 11 = 55)
//     // If the number is 10, then there is no way for the user to win. (10 + 10 + 10 + 10 + 10 = 60)
//     counter += increment;

//     alert("New score: " + counter);

//     if (counter === targetNumber) {
//       alert("You win!");
//     }

//     else if (counter >= targetNumber) {
//       alert("You lose!!");
//     }

//   });
