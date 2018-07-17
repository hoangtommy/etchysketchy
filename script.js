let container = document.querySelector('#container');

function askUser () {
	let number = prompt('how many squares per side would you like?');
	return number;
}

function makeBoxes(num) {
	// let num = askUser();
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
			if (box.getAttribute('class').includes('color2')) { //bug, requires two mouseovers to add class color3
				box.addEventListener('mouseover', () => {
					box.classList.add('color3');
				});
			}
			if (box.getAttribute('class').includes('color3')) {
				box.classList.add('color4');
			}
		});
	});

};

let resetBtn = document.querySelector('#reset');
resetBtn.addEventListener('click', reset);
function reset() {
	container.innerHTML = '';
	makeBoxes(askUser());
	colorBoxes();
}

makeBoxes(24);
colorBoxes();