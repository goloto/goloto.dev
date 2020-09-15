'use strict';

document.addEventListener("DOMContentLoaded", function (event) {
	logoEmojiShower();
	colorSwitcher();
});

function getRandomInt(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);

	return Math.floor(Math.random() * (max - min)) + min;
}

function logoEmojiShower() {
	let emoji = ['🤖', '👽', '😻', '🤢', '👻', '👾', '🎃', '👨‍💻', '🤟', '🌈', '💥', '🍕', '☕️', '🎮', '🚀', '🌌',
		'💾', '☢️', '🌐', '☄️', '📚', '🧻', '🛸', '🍩', '🎂', '🧄', '⚡️', '🌊', '🪐', '🍓', '🦾', '👀', '🍭', '🍦',
		'🎓', '🔋'];
	let logoEmoji = document.getElementById('logo__dot_bottom');
	let header = document.getElementById('header');
	let dotTop = document.getElementById('logo__dot_top');
	let dotBottom = document.getElementById('logo__dot_bottom');

	showEmojiRecursively();

	header.addEventListener('mouseenter', function () {
		if (!isEmojiShow())
			logoEmoji.innerHTML = emoji[getRandomInt(0, emoji.length)];
	});

	function showEmoji() {
		if (!isEmojiShow()) {
			logoEmoji.innerHTML = emoji[getRandomInt(0, emoji.length)];

			dotTop.classList.remove('dot_top_emoji-hide');
			dotBottom.classList.remove('dot_bottom_emoji-hide');

			dotTop.classList.add('dot_top_emoji-show');
			dotBottom.classList.add('dot_bottom_emoji-show');
		}
	}

	function hideEmoji() {
		dotTop.classList.remove('dot_top_emoji-show');
		dotBottom.classList.remove('dot_bottom_emoji-show');

		dotTop.classList.add('dot_top_emoji-hide');
		dotBottom.classList.add('dot_bottom_emoji-hide');
	}

	function showEmojiRecursively() {
		setTimeout(hideEmoji, 7500);
		setTimeout(() => {
			showEmoji();
			showEmojiRecursively();
		}, 15000);
	}

	function isEmojiShow() {
		return dotTop.classList.contains('dot_top_emoji-show') && dotBottom.classList.contains('dot_bottom_emoji-show');
	}
}

function colorSwitcher() {
	let interval = 30000;
	let currentColor = getNewColor();
	let newColor = getNewColor(currentColor.main);

	changeElementsColor(currentColor);

	setTimeout(function run() {
		changeElementsColor(newColor);

		currentColor = newColor;
		newColor = getNewColor(currentColor.main);

		setTimeout(run, interval);
	}, interval);
}

function getNewColor(previewColor) {
	let colors = {
		main: [
			'#63009c',
			'#32586e',
			'#3a4084',
			'#3a8458',
			'#792247',],
		hover: [
			'#4c0077',
			'#214458',
			'#262b5e',
			'#2e6946',
			'#5f1a37',],
		doubleHover: [
			'#3a005b',
			'#0f2a3a',
			'#181c3d',
			'#204c32',
			'#471329',]
	};
	let colorNumber;

	if (previewColor !== undefined) {
		colorNumber = getRandomInt(0, colors.main.length);

		while (colorNumber === previewColor) {
			colorNumber = getRandomInt(0, colors.main.length);
		}
	} else {
		colorNumber = getRandomInt(0, colors.main.length);
	}

	return {
		main: colors.main[colorNumber],
		hover: colors.hover[colorNumber],
		doubleHover: colors.doubleHover[colorNumber]
	};
}

function changeElementsColor(color) {
	let additionalStyles = document.head.appendChild(document.createElement("style"));
	let toChangeElements = document.querySelectorAll("*[class*='to-change']");

	additionalStyles.innerHTML =
		'.main .personal .contacts-list__item::before {color: ' + color.main + '}' +
		'.main .timeline__item:hover .timeline__line .circle_tech {background-color: ' + color.main + '; transition: background-color 0.2s ease-in}' +
		'.header__menu .menu__item:hover {background-color:' + color.hover + '}' +
		'.header__menu .menu__item .pop-up-menu .pop-up-menu__item:hover {background-color:' + color.doubleHover + '}' +
		'.main ul.projects .project:first-child .project__line {background: linear-gradient(aliceblue, ' + color.main + ', ' + color.main + ')}' +
		'.main ul.projects .project:last-child .project__line {background: linear-gradient(' + color.main + ', ' + color.main + ', aliceblue)}';

	toChangeElements.forEach((element) => {
		let className = element.className.baseVal === undefined ? element.className : element.className.baseVal;

		switch (className.substring(className.indexOf('to-change_') + 'to-change_'.length)) {
			case 'fill':
				element.style.fill = color.main;
				break;
			case 'color':
				element.style.color = color.main;
				break;
			case 'color-hover':
				element.style.color = color.hover;
				break;
			case 'background':
				element.style.backgroundColor = color.main;
				break;
			case 'background-hover':
				element.style.backgroundColor = color.hover;
				break;
			case 'border':
				element.style.borderColor = color.main;
				break;
			case 'start-timeline':
				element.style.background = 'linear-gradient(0deg, ' + color.main + ' 0%, aliceblue 100%)';
				break;
			case 'end-timeline':
				element.style.background = 'linear-gradient(0deg, aliceblue 0%, ' + color.main + ' 100%)';
				break;
		}
	})
}