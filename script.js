
let container = document.querySelector('#container');

function setGridCol(num) {
	let autoTimes = '';
	for (let i = 0; i < num; i++) {
		autoTimes += 'auto '; // 'auto auto '
	}
	return autoTimes;
}

function makeBoxes(num) {
	num = num(); //this is a callback to the askUser function
	container.setAttribute('style', `grid-template-columns: ${setGridCol(num)};`);
	for (let i = 0; i < num**2; i++) {
		let box = document.createElement('div');
		box.classList.add('box');
		container.appendChild(box);
	}
}

function askUser () {
	let number = prompt('how many rows would you like?');
	return number;
}

makeBoxes(askUser);