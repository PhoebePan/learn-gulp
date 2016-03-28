// this is a javascript file
var body = document.querySelector('body');
var element = document.createElement('div');

body.appendChild(element);

element.className = 'super-hot';

element.addEventListener('click', function() {
    element.classList.add('clicked');
});