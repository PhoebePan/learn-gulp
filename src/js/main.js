// this is a javascript file
var body = document.querySelector('body');
var element = document.createElement('div');

body.appendChild(element);

for (var i = 0; i < 10; i += 1) {
    element.innerHTML += i;    
}