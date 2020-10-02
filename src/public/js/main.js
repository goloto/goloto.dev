'use strict';

document.addEventListener("DOMContentLoaded", function (event) {
	logoEmojiShower();
	colorSwitcher();
	fitMainBlock();
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

	function getNewColor(previewColor) {
		let colors = {
			main: [
				'rgb(88, 143, 152)',
				'rgb(28, 93, 103)',
				'rgb(41, 71, 107)',
				'rgb(94, 109, 184)',
				'rgb(158, 76, 149)',
				'rgb(135, 58, 97)',
				'rgb(133, 74, 214)',
				'rgb(194, 2, 94)',
				'rgb(255, 137, 126)',
				'rgb(81, 135, 255)',],
			hover: [
				'rgb(68, 123, 132)',
				'rgb(8, 73, 83)',
				'rgb(21, 51, 87)',
				'rgb(74, 89, 164)',
				'rgb(138, 56, 129)',
				'rgb(115, 38, 77)',
				'rgb(113, 54, 194)',
				'rgb(174, 0, 74)',
				'rgb(235, 117, 106)',
				'rgb(61, 115, 235)',],
			doubleHover: [
				'rgb(48, 103, 112)',
				'rgb(0, 53, 63)',
				'rgb(1, 31, 67)',
				'rgb(54, 69, 144)',
				'rgb(118, 36, 109)',
				'rgb(95, 18, 57)',
				'rgb(93, 34, 174)',
				'rgb(154, 0, 54)',
				'rgb(215, 97, 86)',
				'rgb(41, 95, 215)',],
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
		let dynamicStyles = document.getElementById('dynamic-styles');
		let toChangeElements = document.querySelectorAll("*[class*='to-change']");

		dynamicStyles.innerHTML =
			'.main .personal .contacts-list__item::before {color: ' + color.main + '}' +
			'.main .timeline__item:hover .timeline__line .circle_tech {background-color: ' + color.main + '; transition: background-color 0.2s ease-in}' +
			'.header__menu .menu__item:hover {background-color:' + color.hover + '}' +
			'.header__menu .menu__item .pop-up-menu .pop-up-menu__item:hover {background-color:' + color.doubleHover + '}' +
			'.main ul.projects .project:first-child .project__line {background: linear-gradient(aliceblue, ' + color.main + ', ' + color.main + ')}' +
			'.main ul.projects .project:last-child .project__line {background: linear-gradient(' + color.main + ', ' + color.main + ', aliceblue)}' +
			'@media screen and (max-width: 740px) { .main .timeline .timeline__item.timeline__item_tech .timeline__line.timeline__line_tech {background:linear-gradient(black 0%, ' + color.main + ' 30%, ' + color.main + ' 70%, black 100%)} }';

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
}

function fitMainBlock() {
	let header = document.getElementById('header');
	let footer = document.getElementById('footer');
	let main = document.getElementById('main');

	main.style.minHeight = 'calc(100vh - ' + (header.offsetHeight + footer.offsetHeight) + 'px)';
}