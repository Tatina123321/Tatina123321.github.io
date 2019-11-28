alert('Добро пожаловать, '+prompt('Как Вас зовут?',''));

prompt('Введите год вашего рождения','');


let birthYear = parseInt(prompt('Введите год вашего рождения', ''));
const currentYear = 2019;
if (isFinite(birthYear)) {
	alert(`Ваш возраст: ${currentYear - birthYear}`);
} else {
alert('Введите число');
}