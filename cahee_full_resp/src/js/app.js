var navSlide = () => {
	var burger = document.querySelector('.burger');
	var nav = document.querySelector('.nav__list');

	burger.addEventListener('click', () => {
		nav.classList.toggle('nav-active');
	});
}

navSlide();