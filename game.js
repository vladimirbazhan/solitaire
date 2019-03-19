class Pile {
	constructor() {
		this.cards = [];
	}

	add(card) {
		this.cards.push(card);
	}
}

class Configuration {
	constructor() {
		this.cardImagePath = 'images/cards/';
		this.cardImageExtension = '.png';
		this.cardImageBack = 'red_back.png';
		this.suits = ['Clubs', 'Diamonds', 'Hearts', 'Spades'];
		this.drawPilesCoordinates = { x: 50, y: 50 };
		this.playPilesCoordinates = { x: 50, y: 200 };
		this.finalPilesCoordinates = { x: 450, y: 70 };
	}
}

class Game {
	constructor() {
		this.drawPiles = this.createPiles(4);
		this.playPiles = this.createPiles(8);
		this.finalPiles = this.createPiles(4);
		this.config = new Configuration();
	}

	createPiles(count) {
		let array = [];
		for (let i = 0; i < count; i++) {
			array.push(new Pile());
		}
		return array;
	}

	initialize() {
		const deck = new Deck();
		for (let i = 0; i < deck.cards.length; i++) {
			this.playPiles[i % 8].add(deck.cards[i]);
		}
	}

	getCardImagePath(config, card) {
		return config.cardImagePath + card.value + card.suit[0] + config.cardImageExtension;
	}

	drawDrawPiles() {
		for (var i = 0; i < 4; i++) {
			const styles = ['left: ' + (i * 100 + this.config.drawPilesCoordinates.x), 'top: ' + this.config.drawPilesCoordinates.y];
			const img = $('<img>');
			img
				.attr('draggable', true)
				.attr('src', this.config.cardImagePath + this.config.cardImageBack)
				.attr('style', styles.join(';'));
			img.appendTo('#container');
		}
	}

	drawFinalPiles() {
		const _this = this;
		$.each(_this.config.suits, function(i, suit) {
			const styles = ['left: ' + (i * 100 + _this.config.finalPilesCoordinates.x), 'top: ' + _this.config.finalPilesCoordinates.y];
			const img = $('<img>');
			img
				.attr('src', _this.config.cardImagePath + suit + _this.config.cardImageExtension)
				.attr('style', styles.join(';'));
			img.appendTo('#container');
		});
	}

	drawPlayPiles() {
		const _this = this;
		$.each(this.playPiles,
			function(i, pile) {
				_this.drawPlayPile.call(_this, i, pile);
			});
	}

	drawPlayPile(index, pile) {
		const _this = this;
		$.each(pile.cards, function (i, card) {
			const styles = ['left: ' + (index * 100 + _this.config.playPilesCoordinates.x), 'top: ' + (i * 45 + _this.config.playPilesCoordinates.y)];
			const img = $('<img>');
			img
				.attr('id', card.suit + '_' + card.value)
				.attr('draggable', true)
				.attr('src', _this.getCardImagePath(_this.config, card))
				.attr('style', styles.join(';'));
			img.appendTo('#container');
		});
	}
}