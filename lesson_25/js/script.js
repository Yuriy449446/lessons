// Строгий режим
"use strict"


//Задача №1
const bodyElement = document.body;
console.log(bodyElement);


//Задача №2

const newObject = document.createElement('ul');
newObject.innerHTML = `<li>Номер №1</li>`;
const body = document.querySelector('.body');

function newList(liCount = 5) {
  
  newObject.innerHTML = '';

  
  let liHTML = '';
  for (let i = 1; i <= liCount; i++) {
    liHTML += `<li>Номер №${i}</li>`;
  }

  
  newObject.insertAdjacentHTML('afterbegin', liHTML);
}

body.insertAdjacentElement('beforeend', newObject);
newList(5);


//Задача №3
const colorBody = document.querySelector('body');
colorBody.classList.add('loaded');

if (document.body.classList.contains('loaded')) {
	
  document.body.style.color = 'green';
}

//Задача №4

const liElements = document.querySelectorAll('.list__item');
console.log(liElements)
liElements.forEach(function(item, index){
   item.classList.add('activ');
   item.textContent = `Елемент №${index + 1}`;
  
})


//Задача №5

const button = document.querySelector('.button');


document.addEventListener('DOMContentLoaded', () => {
  scrollToButton();
});

function scrollToButton() {
  button.scrollIntoView({ behavior: 'smooth' });
}


//Задача №6

  var link = document.querySelector('.link');

    link.setAttribute('data-value', '100');

    var dataValue = +link.getAttribute('data-value');
  console.log(dataValue)

    if (dataValue < 200) {
        link.classList.add('red-color');
  }