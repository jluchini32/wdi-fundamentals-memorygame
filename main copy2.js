console.log("Up and running!");

var cards = ["queen" , "queen" , "king" , "king"]

var cardsInPlay = ['cardOne', 'cardTwo', 'cardThree', 'CardFour'];
cardsInPlay.push("cards[cardId]");

var checkForMatch =function(){
	if (cardsInPlay[0] === cardsInPlay[1]){
		console.log("You found a match!");
	} else {
		console.log("Sorry, try again.");
}
}

var flipCard = function(cardId) {
	console.log("User flipped " + cards[cardId]);
};
flipCard(0);
flipCard(2);
checkForMatch();

if (cardsInPlay.length === 2) {
console.log("You found a match!");

} else if (cardsInPlay[0] === cardsInPlay[1]) {
window.alert("You found a match!");

} else if (cardsInPlay[0] != cardsInPlay[1]) {
window.alert("Sorry, try again");
}

