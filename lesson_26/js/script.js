// Строгий режим
"use strict"


//Задача №1

let items = document.querySelectorAll("[class*='__item']");

items.forEach(function (element) {
    element.addEventListener("click", function () {
        
        items.forEach(function (item) {
            item.classList.remove('active');
        });

        
        this.classList.add('active');
    });
});

//Задача №2
window.addEventListener("load", pageBody);
function pageBody(e) {
	document.documentElement.classList.add('show');
}

//Задача №3

 const header = document.querySelector('.header');
 const footer = document.querySelector('.footer');
 
 header.addEventListener("mouseenter", (i) => {
	console.log(i)
	if(i.type === "mouseenter"){
		footer.classList.add('color')
	}
})


header.addEventListener("mouseleave", (i) => {
	console.log(i)
	if(i.type === "mouseleave"){
		footer.classList.remove('color')
	}
})

//Задача №4

function startCounter(element, end, delay) {
	let currentCount = parseInt(element.textContent, 10) || 0;

	const intervalId = setInterval(function () {
		 if (currentCount < end) {
			  element.textContent = ++currentCount;
		 } else {
			  clearInterval(intervalId);
		 }
	}, delay);
}

function handleIntersection(entries, observer) {
	entries.forEach((entry) => {
		 const targetElement = entry.target;
		 if (entry.isIntersecting && !targetElement.dataset.observed) {
			  const end = parseInt(targetElement.dataset.end, 10) || 10;
			  const delay = parseInt(targetElement.dataset.delay, 10) || 1000;

			  targetElement.dataset.observed = true; 
			  startCounter(targetElement, end, delay);
			  observer.unobserve(targetElement);
		 }
	});
}

const observer = new IntersectionObserver(handleIntersection, { threshold: 0.5 });

const target = document.querySelector(".main-item");

if (target) {
	observer.observe(target);
}






