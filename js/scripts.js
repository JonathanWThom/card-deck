//var numberCounter = 0;
//var suitCounter = 0;
var suits = ["clubs", "hearts", "diamonds", "spades"];
var numbers = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "jack", "queen", "king", "ace"];


$(document).ready(function(){
  debugger;
  suits.forEach(function(suit) {
    debugger;
    //suit = suits[suitCounter];
    numbers.forEach(function(number) {
      //number = numbers[numberCounter];
      $(".list").append("<li>" + number + " of " + suit + "</li>");
      //numberCounter++;
    });
  //numberCounter = 0;
  //suitCounter++;
  });
});


// Use a forEach() loop within another forEach() loop to build an array representing a deck of cards. A deck consists of 52 cards - 13 ranks in each of 4 suits.
// Then, display a list of every card in the deck. (Hint: Each element of the array should read something like "ace of spades" or "4 of hearts").
