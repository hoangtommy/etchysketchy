let container = document.querySelector('#container');

function setGridCol(num) {
	let autoTimes = '';
	for (let i = 0; i < num; i++) {
		autoTimes += ' auto'; // 'auto auto '
	}
	return autoTimes;
}

function askUser () {
	let number = prompt('how many squares per side would you like?');
	return number;
}

function makeBoxes() {
	let num = askUser();
	// num = num(); //this is a callback to the askUser function
	container.setAttribute('style', `grid-template-columns: repeat(${num}, 1fr); grid-template-rows: repeat(${num}, 1fr);`);
	for (let i = 0; i < num**2; i++) {
		let box = document.createElement('div');
		box.classList.add('box');
		container.appendChild(box);
	}
}

function colorBoxes() {
	let boxes = document.querySelectorAll('.box');
	boxes.forEach((box) => {
		box.addEventListener('mouseover', () => {
			box.classList.add('color1');	
			if (box.getAttribute('class').includes('color1')) {
				box.addEventListener('mouseover', () => {
					box.classList.add('color2');
				});
			}
		});
	});
};

let resetBtn = document.querySelector('#reset');
resetBtn.addEventListener('click', reset);
function reset() {
	container.innerHTML = '';
	makeBoxes();
	colorBoxes();
}