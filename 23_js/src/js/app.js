// ==================1===================
let firstBtn = document.querySelector('#first__button');
firstBtn.addEventListener('click', () => {
	let age = document.querySelector('#age').value;
	let ageName = (age <= 0) ? 'ещё не родились' :
		(age < 12) ? 'ребенок' :
		(age < 18) ? 'подросток' :
		(age < 60) ? 'взрослый' :
		'пенсионер';
	document.querySelector('#first__out').textContent = `Вы ${ageName}`;
});
// ==================2===================


let secondBtn = document.querySelector('#second__button');
secondBtn.addEventListener('click', () => {
	let num1 = document.querySelector('#num1').value;
	let specSymbol = '';
	switch(num1) {
		case '0':
		specSymbol = ')';
		break;
		case '1':
		specSymbol = '!';
		break;
		case '2':
		specSymbol = '@';
		break;
		case '3':
		specSymbol = '#';
		break;
		case '4':
		specSymbol = '$';
		break;
		case '5':
		specSymbol = '%';
		break;
		case '6':
		specSymbol = '^';
		break;
		case '7':
		specSymbol = '&';
		break;
		case '8':
		specSymbol = '*';
		break;
		case '9':
		specSymbol = '(';
		break;
		default:
		specSymbol = 'Введите число от 0 до 9';
	}
	document.querySelector('#second__out').textContent = `Ваш спецсимвол: ${specSymbol}.`;
});

// ==================3===================
let thirdBtn = document.querySelector('#third__button');
thirdBtn.addEventListener('click', () => {
	let num2 = document.querySelector('#num2').value;
	for (let i = 0; i < num2.length; i++) {
		if (num2.indexOf(num2[i]) !== num2.lastIndexOf(num2[i])) {
			document.querySelector('#third__out').textContent = 'Есть повторяющиеся цифры';
			break;
		} else {
			document.querySelector('#third__out').textContent = 'Все символы уникальны';
		}
	}
});

// ==================4===================

let yearBtn = document.querySelector('#year__button');
yearBtn.addEventListener('click', () => {
	let year = document.querySelector('#year').value;
	if (year % 400 == 0 || year % 4 == 0 && year % 100 !== 0) {
		document.querySelector('#year__out').textContent = 'Год высокосный';
	} else {
		document.querySelector('#year__out').textContent = 'Год не высокосный';
	}
});

// ==================5===================

let palindromBtn = document.querySelector('#palindrom__button');
palindromBtn.addEventListener('click', () => {
	let palindrom = document.querySelector('#palindrom').value;
	let reverse = palindrom.split('').reverse().join('');
	if (palindrom === reverse) {
		document.querySelector('#palindrom__out').textContent = 'Это число паллиндром';
	} else {
		document.querySelector('#palindrom__out').textContent = 'Это число не паллиндром';
	}

});

// ==================6===================

let moneyBtn = document.querySelector('#money__button');
moneyBtn.addEventListener('click', () => {
	let exchangeRate = 1;
	let moneySum = document.querySelector('#moneySum').value;
	let radioBtn = document.getElementsByName('money');
	let currency = '';
	for (let i = 0; i < radioBtn.length; i++) {
		if (radioBtn[i].checked) {
			exchangeRate = radioBtn[i].value;
			currency = radioBtn[i].id;
		}
	}
	document.querySelector('#money__out').textContent = `Итого: ${moneySum * exchangeRate +  currency}`;
});

// ==================7===================

let sumBtn = document.querySelector('#sum__button');
sumBtn.addEventListener('click', () => {
	let sum = document.querySelector('#sum').value;
	let discount = (sum < 200) ? 0 :
		(sum <= 300) ? 3 :
		(sum <= 500) ? 5 :
		7 ;
	document.querySelector('#discount__out').textContent = `Ваша скидка: ${discount} %.`;
	document.querySelector('#sum__out').textContent = `Сумма к оплате: ${(sum * ((100 - discount) / 100)).toFixed(2)} грн.`;
});

// ==================8===================

let figureBtn = document.querySelector('#figure__button');
figureBtn.addEventListener('click', () => {
	let circleLength = document.querySelector('#circleLength').value;
	let squarePer = document.querySelector('#squarePer').value;
	let circleDiametr = (circleLength / Math.PI).toFixed(2);
	if (circleDiametr <= squarePer / 4) {
		document.querySelector('#figure__out').textContent = `Окружность поместится в данный квадрат`;
	} else {
		document.querySelector('#figure__out').textContent = `Окружность слишком большая`;
	}
});

// ==================9===================

let questionBtn = document.querySelector('#question__button');
questionBtn.addEventListener('click', () => {
	let question1 = document.getElementsByName('question1');
	let question2 = document.getElementsByName('question2');
	let question3 = document.getElementsByName('question3');
	let questionResult = 0;
	for (let i = 0; i < question1.length; i++) {
		if (question1[i].checked && (question1[i].value == 4)) {
			questionResult += 2;
		}
	}
	for (let j = 0; j < question2.length; j++) {
		if (question2[j].checked && (question2[j].value == 'Washington')) {
			questionResult += 2;
		}
	}
	for (let k = 0; k < question3.length; k++) {
		if (question3[k].checked && (question3[k].value == 'zloty')) {
			questionResult += 2;
		}
	}
	document.querySelector('#question__out').textContent = `Ваш результат: ${questionResult} баллов.`;
});

// ==================10===================

let dateBtn = document.querySelector('#date__button');
dateBtn.addEventListener('click', () => {
	let date1 = new Date(document.querySelector('#date1').value);
	date1.setDate(date1.getDate() + 1);
	var curr_date = date1.getDate();
	var curr_month = date1.getMonth() + 1;
	var curr_year = date1.getFullYear();
	document.querySelector('#date__out').textContent = `Следующая дата: ${curr_date} / ${curr_month} / ${curr_year}`;
});