document.addEventListener('DOMContentLoaded', function () {
	const game = new Game();
	game.initialize();
	game.drawDrawPiles();
	game.drawFinalPiles();
	game.drawPlayPiles();
}, false);