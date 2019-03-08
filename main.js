console.log("Up and running!");

var cards = ["queen" , "queen" , "king" , "king"]

var cardsInPlay = [];
cardsInPlay.push('cardOne');
cardsInPlay.push('cardTwo');

var cardOne = cards[0];
console.log("User flipped queen");

var cardTwo = cards[2];
console.log("User flipped king");

if (cardsInPlay.length === 2) {
console.log("You found a match!");
} else if (cardsInPlay[0] === cardsInPlay[1]) {
window.alert("You found a match!");
} else if (cardsInPlay[0] != cardsInPlay[1]) {
window.alert("Sorry, try again");
}