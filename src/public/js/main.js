'use strict';

document.addEventListener("DOMContentLoaded", function (event) {
	showEmojiOnLogo();
});

function getRandomInt(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);

	return Math.floor(Math.random() * (max - min)) + min;
}

function showEmojiOnLogo() {
	let header = document.getElementById('header');

	header.addEventListener('mouseenter', function () {
		let emoji = ['🤖', '👽', '😻', '🤢', '👻', '👾', '🎃', '👨‍💻', '🤟', '🌈', '💥', '🍕', '☕️', '🎮', '🚀', '🌌',
			'💾', '☢️', '🌐', '☄️', '📚', '🧻', '🛸', '🍩', '🎂', '🧄', '⚡️', '🌊', '🪐', '🍓', '🦾', '👀', '🍭', '🍦',
			'🎓', '🔋'];
		let logoEmoji = document.getElementById('logo-emoji');

		logoEmoji.innerHTML = emoji[getRandomInt(0, emoji.length)];
	});
}