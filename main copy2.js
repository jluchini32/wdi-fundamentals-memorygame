console.log("Up and running!");

var cards = ["queen" , "queen" , "king" , "king"]

var cardsInPlay = ['cardOne', 'cardTwo', 'cardThree', 'CardFour'];


var cardOne = cards[0];
cardsInPlay.push(cardOne);
console.log("User flipped " + cardOne);

var cardTwo = cards[2];
cardsInPlay.push(cardTwo);
console.log("User flipped " + cardTwo);

if (cardsInPlay.length === 2) {
console.log("You found a match!");
} else if (cardsInPlay[0] === cardsInPlay[1]) {
window.alert("You found a match!");
} else if (cardsInPlay[0] != cardsInPlay[1]) {
window.alert("Sorry, try again");
}