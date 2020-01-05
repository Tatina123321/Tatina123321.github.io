// app 1

let appBtn = document.querySelector('#app1-button'),
app = document.querySelector('#app');

appBtn.addEventListener('click', function(e) {
	e.preventDefault();
	let start = +document.querySelector('#app1-input-1').value,
		finish = +document.querySelector('#app1-input-2').value,
		sum = 0;

	if (finish < start) {
		if (finish < 0) {
			for (let i = finish; i < start+1; i++) {
				sum += i;
			}
		} else {
			for (let j = finish; j <= start; j++) {
				sum += j;
			}
		}
	} else if ( finish > start) {
		if (start < 0) {
			for (let k = start; k < finish+1; k++) {
				sum += k;
			}
		} else {
			for (let f = 0; f <= finish; f++) {
				sum += f;
			}
		}
	} else {
		return sum;
	}

	app.textContent = "Сумма диапазона чисел равна: " + sum;
	document.querySelector('#app1-input-1').value = "";
	document.querySelector('#app1-input-2').value = "";
});


// app 2

let appBtn2 = document.querySelector('#app2-button');

appBtn2.addEventListener('click', function(e) {
	e.preventDefault();
	let a = +document.querySelector('#app2-input-1').value,
		b = +document.querySelector('#app2-input-2').value;

	if (a == 0 || b == 0) {
		app.textContent = "Ноль не имеет делителя...";
	} else {
		while (a != b) {
			if (a > b) {
				a = a - b;
			} else {
				b = b - a;
			}
		}
		app.textContent = "Наибольший общий делитель: " + a;
	}

	document.querySelector('#app2-input-1').value = "";
	document.querySelector('#app2-input-2').value = "";
});

// app 3

let appBtn3 = document.querySelector('#app3-button');

appBtn3.addEventListener('click', function(e) {
	e.preventDefault();
	let num = +document.querySelector('#app3-input-1').value,
		divider = "";

	for (let i = 1; i <= num; i++) {
		if (num % i == 0) {
			divider += i + " ";
		}
	}

	app.textContent = "Делители этого числа: " + divider;
	document.querySelector('#app3-input-1').value = "";
});

// app 4

let appBtn4 = document.querySelector('#app4-button');

appBtn4.addEventListener('click', function(e) {
	e.preventDefault();
	let num = document.querySelector('#app4-input-1').value,
		count = 0;

	for (let i = 0; i < num.length; i++) {
		count++;
	}

	app.textContent = "Количество цифр: " + count;
	document.querySelector('#app4-input-1').value = "";
});

// app 5

let appBtn5 = document.querySelector('#app5-button');

appBtn5.addEventListener('click', function(e) {
	e.preventDefault();
	let nums = document.querySelectorAll('.app5-input'),
		positive = 0,
		negative = 0,
		zero = 0,
		even = 0,
		odd = 0;
		for ( let i = 0; i < nums.length; i++) {
			if (nums[i].value < 0) {
				negative++;
				if (nums[i].value % 2 == 0) {
					odd++;
				} else {
					even++;
				}
			} else if (nums[i].value > 0) {
				positive++;
				if (nums[i].value % 2 == 0) {
					odd++;
				} else {
					even++;
				}
			} else {
				zero++;
			}
		}
	app.textContent = "Отрицательных: " + negative + ", " +
					  "Положительных: " + positive + ", " +
					  "Нолей: " + zero + ", " +
					  "Четные: " + odd + ", " +
					  "Нечетные: " + even;
	document.querySelectorAll('.app5-input').forEach(item => item.value = "");
});

// app 6

let appBtn6 = document.querySelector('#app6-button');

appBtn6.addEventListener('click', function(e) {
	e.preventDefault();
	let num1 = +document.querySelector('#app6-input-1').value,
		symbol = document.querySelector('#app6-input-2').value,
		num2 = +document.querySelector('#app6-input-3').value,
		equal = 0,
		yesNo = "";

	do {
		switch (symbol) {
			case "-":
			equal = num1 - num2;
			break;
			case "+":
			equal = num1 + num2;
			break;
			case "*":
			equal = num1 * num2;
			break;
			case "/":
			equal = num1 / num2;
			break;
			default:
			app.textContent = "Что то пошло не так :(";
			break;
		}
		app.textContent = "" + equal;

		document.querySelector('#app6-input-1').value = "";
		document.querySelector('#app6-input-2').value = "";
		document.querySelector('#app6-input-3').value = "";

		let btn = document.createElement('button'),
			btn2 = document.createElement('button'),
			parag = document.createElement('p'),
			parrent = document.querySelector('.parrent');

		parrent.appendChild(parag);
		parrent.appendChild(btn);
		parrent.appendChild(btn2);
		parag.textContent = "Повторим?";
		btn.textContent = "YES";
		btn2.textContent = "NO";

		btn.addEventListener('click', (e) => { e.preventDefault();
			yesNo = "1";
			btn.remove();
			btn2.remove();
			parag.remove();
		});
		btn2.addEventListener('click', (e) => { e.preventDefault();
			yesNo = "";
			btn2.remove();
			btn.remove();
			parag.textContent = "А жаль... хнык-хнык...";
			setTimeout(() => parag.remove(), 2000);
		});
	} while (yesNo)
});

// app 7

let appBtn7 = document.querySelector('#app7-button');

appBtn7.addEventListener('click', function(e) {
	e.preventDefault();
	let num = document.querySelector('#app7-input-1').value,
		step = +document.querySelector('#app7-input-2').value,
		newNum = "",
		stepped = "",
		old = "";

	for (let i = 0; i < step; i++) {
		stepped += num.charAt(i);
	}

	for (let j = step; j < num.length; j++) {
		old += num.charAt(j);
	}

	newNum = old + stepped;

	app.textContent = "Сдвинутое число: " + newNum;
	document.querySelector('#app7-input-1').value = "";
	document.querySelector('#app7-input-2').value = "";
});

// app 8

let appBtn8 = document.querySelector('#app8-button-1'),
	appBtn8_2 = document.querySelector('#app8-button-2'),
	title = document.querySelector('.title'),
	titleNxt = document.querySelector('.titleNext'),
	day = document.querySelector('.day'),
	counter = 0;

appBtn8.addEventListener('click', function(e) {
	e.preventDefault();
	title.classList.add('opacity');
	titleNxt.classList.remove('opacity');

	let week = [
	"Понедельник",
	"Вторник",
	"Среда",
	"Четверг",
	"Пятница",
	"Субота",
	"Воскресенье"
	];

	day.textContent = week[0];
	counter++;

	switch (counter) {
		case 1:
		day.textContent = week[0];
		break;
		case 2:
		day.textContent = week[1];
		break;
		case 3:
		day.textContent = week[2];
		break;
		case 4:
		day.textContent = week[3];
		break;
		case 5:
		day.textContent = week[4];
		break;
		case 6:
		day.textContent = week[5];
		break;
		case 7:
		day.textContent = week[6];
		break;
	}

	if (counter > 7) {
		counter = 0;
	}
});

appBtn8_2.addEventListener('click', function(e) {
	e.preventDefault();
	title.classList.remove('opacity');
	titleNxt.classList.add('opacity');
	counter = 0;
});

// app 9

let table = document.querySelector('.table'),
	multi = "";

for (let i = 2; i < 10; i++) {
	for (let k = 1; k < 11; k++) {
		multi += `${i} x ${k} = ` + i * k + ';  ';
	}
}

table.textContent = multi;

// app 10

let appBtn10 = document.querySelector('#app10-button-1'),
	appBtn10_2 = document.querySelector('#app10-button-2'),
	header = document.querySelector('.number'),
	headerNxt = document.querySelector('.numberNext');

appBtn10.addEventListener('click', function(e) {
	e.preventDefault();
	header.classList.add('opacity');
	headerNxt.classList.remove('opacity');
	let sel = +prompt('Загадайте число'),
		max = 100,
		mid = 50,
		min = 0;

		do {
			mid = Math.floor(min +((max - min)/ 2));
			let sym = prompt(`Загаданое число > ${mid} или < ${mid} или = ${mid}? Введите символ`);
				if (!sym) {
					return
				}else if (sym == '>') {
					min =  mid;
				} else if (sym == '<') {
					max =  mid;
				} else if (sym == '=') {
					if (mid == sel) {
						alert(`Вы загадали число ${mid}!`);
					} else {
						alert("Вы загадали не это число");
					}
				}
		} while (mid !== sel)
});

appBtn10_2.addEventListener('click', function(e) {
	e.preventDefault();
	header.classList.remove('opacity');
	headerNxt.classList.add('opacity');
})