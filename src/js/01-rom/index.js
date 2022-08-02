const heroImgBg = document.getElementById('hero-img-bg');
const heroImg = document.getElementById('hero-img');
const slogan = document.getElementById('slogan');
const btnBuy = document.getElementById('btn-buy');
const subText = document.getElementById('sub-text');
const digits1 = document.getElementById('digit-1');
const leftHero = document.getElementById('blink-hero');

const customer1k = document.getElementById('customer-1k');
const customer100 = document.getElementById('customer-100');
const customer10 = document.getElementById('customer-10');
const customer1 = document.getElementById('customer-1');
const customerp = document.getElementById('customer-p');

const star1k = document.getElementById('star-1k');
const star100 = document.getElementById('star-100');
const star10 = document.getElementById('star-10');
const star10k = document.getElementById('star-10k');

const monthCount = document.getElementById('month-count');
const btnFree = document.getElementById('btn-free');

const digits10Children = document.querySelectorAll('#digit-10 :nth-child(n)');
const digits1Children = document.querySelectorAll('#digit-1 :nth-child(n)');

const customer1Children = document.querySelectorAll('#customer-1 :nth-child(n)');
const customer10Children = document.querySelectorAll('#customer-10 :nth-child(n)');
const customer100Children = document.querySelectorAll('#customer-100 :nth-child(n)');
const customer1kChildren = document.querySelectorAll('#customer-1k :nth-child(n)');
const customer10kChildren = document.querySelectorAll('#customer-10k :nth-child(n)');
const customerpChildren = document.querySelectorAll('#customer-p :nth-child(n)');

const start1Children = document.querySelectorAll('#star-1 :nth-child(n)');
const start10Children = document.querySelectorAll('#star-10 :nth-child(n)');
const start100Children = document.querySelectorAll('#star-100 :nth-child(n)');
const start1kChildren = document.querySelectorAll('#star-1k :nth-child(n)');
const start10kChildren = document.querySelectorAll('#star-10k :nth-child(n)');

const slides = document.querySelectorAll('.slide');
const carouselNavBtns = document.querySelectorAll('.carousel-nav-btn');

const specsId = document.getElementById('specs-id');
const benefitsId = document.getElementById('benefits-id');
const includedId = document.getElementById('included-id');

//animation
// init anim
function startInitAnimations() {
	// window.scrollTo(0, 0);

	heroImg.style.animation = 'fade-in ease-in-out 1s forwards';
	heroImgBg.style.animation = 'fade-in-bg ease-in-out 1s forwards';
	slogan.style.animation = 'fade-in-bg ease-in-out 1s forwards';
	subText.style.animation = 'fade-in ease-in-out 1s forwards';
	btnBuy.style.animation = 'fade-in ease-in-out 1s forwards';

	digits10Children.forEach((digits) => {
		digits.style.animation = 'count-up 1s ease forwards';
	});
	digits1Children.forEach((digits) => {
		digits.style.animation = 'count-up-4 1s ease forwards';
	});

	digits1.style.display = 'inline-flex';
	customer1.style.display = 'inline-flex';
	customer10.style.display = 'inline-flex';
	customer100.style.display = 'inline-flex';
	customer1k.style.display = 'inline-flex';
	customerp.style.display = 'inline-flex';
	star10k.style.display = 'inline-flex';
	star10.style.display = 'inline-flex';
	star100.style.display = 'inline-flex';
	star1k.style.display = 'inline-flex';

	customer1Children.forEach((digits) => {
		digits.style.animation = 'count-up-6 1s ease forwards';
	});
	customer10Children.forEach((digits) => {
		digits.style.animation = 'count-up-6 1s ease forwards';
	});
	customer10Children.forEach((digits) => {
		digits.style.animation = 'count-up-6 1s ease forwards';
	});
	customer100Children.forEach((digits) => {
		digits.style.animation = 'count-up-5 1s ease forwards';
	});
	customer1kChildren.forEach((digits) => {
		digits.style.animation = 'count-up-4 1s ease forwards';
	});
	customer10kChildren.forEach((digits) => {
		digits.style.animation = 'count-up 1s ease forwards';
	});
	customerpChildren.forEach((digits) => {
		digits.style.animation = 'count-up-6 1s ease forwards';
	});

	start1Children.forEach((digits, i) => {
		let coef = start1Children.length - 1 - i;
		digits.style.opacity = `${1 / (coef + 1)}`;
		digits.style.animation = 'star-1 1s ease forwards';
	});
	start10Children.forEach((digits, i) => {
		let coef = start10Children.length - 1 - i;
		digits.style.opacity = `${1 / (coef + 1)}`;
		digits.style.animation = 'star-10 1s ease forwards';
	});
	start100Children.forEach((digits, i) => {
		let coef = start100Children.length - 1 - i;
		digits.style.opacity = `${1 / (coef + 1)}`;
		digits.style.animation = 'star-100 1s ease forwards';
	});
	start1kChildren.forEach((digits, i) => {
		let coef = start1kChildren.length - 1 - i;
		digits.style.opacity = `${1 / (coef + 1)}`;
		digits.style.animation = 'star-1k 1s ease forwards';
	});

	start10kChildren.forEach((digits, i) => {
		let coef = start10kChildren.length - 1 - i;
		digits.style.opacity = `${1 / (coef + 1)}`;
		digits.style.animation = 'star-10k 1s ease forwards';
	});

	setTimeout(() => {
		btnFree.style.display = 'inline';
		leftHero.style.animation = 'hero-fade 1s ease forwards';
		btnFree.style.animation = 'btn-free .5s ease-in forwards';
	}, 5000);
}

document.onreadystatechange = function () {
	if (document.readyState === 'complete') {
		startInitAnimations();
	}
};

//scroll anim
window.addEventListener('scroll', showDetails);

function showDetails() {
	const triggerPoint = (window.innerHeight / 5) * 3;

	if (specsId.getBoundingClientRect().top < triggerPoint && specsId.getBoundingClientRect().top > -230) {
		specsId.style.opacity = '1';
	} else if (specsId.getBoundingClientRect().top < -230) {
		specsId.style.opacity = '.2';
	} else {
		specsId.style.opacity = '.2';
	}
	if (benefitsId.getBoundingClientRect().top < triggerPoint && benefitsId.getBoundingClientRect().top > -230) {
		benefitsId.style.opacity = '1';
	} else if (benefitsId.getBoundingClientRect().top < -230) {
		benefitsId.style.opacity = '.2';
	} else {
		benefitsId.style.opacity = '.2';
	}
	if (includedId.getBoundingClientRect().top < triggerPoint && includedId.getBoundingClientRect().top > -230) {
		includedId.style.opacity = '1';
	} else if (includedId.getBoundingClientRect().top < -230) {
		includedId.style.opacity = '.2';
	} else {
		includedId.style.opacity = '.2';
	}
}

// slider
let currentSlide = 0;

slides.forEach((slide, indx) => {
	slide.style.transform = `translateX(${indx * 100}%)`;
});

setInterval(() => {
	slides.forEach((slide, indx) => {
		slide.style.transform = `translateX(${100 * (indx - currentSlide)}%)`;
		carouselNavBtns[indx].style.backgroundColor = '#fff';
	});

	carouselNavBtns[currentSlide].style.backgroundColor = '#2bf6fa';
	if (currentSlide == slides.length - 1) {
		currentSlide = 0;
	} else {
		currentSlide++;
	}
}, 1500);

carouselNavBtns.forEach((btn, index) => {
	const i = index;
	btn.addEventListener('click', function (i) {
		onNavButtonClick(index);
	});
});

function onNavButtonClick(i) {
	currentSlide = i;
}
