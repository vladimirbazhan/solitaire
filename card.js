class Card {
	constructor(suit, value) {
		this.suit = suit;
		this.value = value;

		switch (suit) {
			case 'Hearts':
			case 'Diamonds':
				this.color = 'red';
				break;
			case 'Clubs':
			case 'Spades':
				this.color = 'black';
				break;
		}
	}

	compareValue(anotherCard) {
		return getIntValue(this.value) - getIntValue(anotherCard.value);
	}

	getIntValue(value) {
		switch (value) {
		case '2':
		case '3':
		case '4':
		case '5':
		case '6':
		case '7':
		case '8':
		case '9':
		case '10':
			return parseInt(value);
		case 'J':
			return 11;
		case 'Q':
			return 12;
		case 'K':
			return 13;
		case 'A':
			return 1;
		}
	}


}