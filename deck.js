class Deck {
	constructor() {
		let cardValues = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
		let cardSuits = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];

		this.cards = [];
		let _this = this;
		cardSuits.forEach(function(suit) {
			cardValues.forEach(function (val) {
				_this.cards.push(new Card(suit, val));
			});
		});
		this.shuffle();
	}

	shuffle() {
		for (let i = this.cards.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
		}
		return this.cards;
	}
}