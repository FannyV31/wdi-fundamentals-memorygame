var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];
var cardId = [0, 1 , 2, 3];

var checkForMatch = function() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
console.log("You found a match!");
} else {
console.log("Sorry, try again.");};};

var flipCard = function(cardId) {
cardsInPlay.push(cards[cardId]) ;
console.log("User flipped" + " " + cards[cardId]);
};	
flipCard(0);
flipCard(2);
checkForMatch(flipCard)



