const btnHamburger = document.querySelector('#btnHamburger');
const body = document.querySelector('body');
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');
const fadeElements = document.querySelectorAll('.hasFade'); 

btnHamburger.addEventListener('click', function(){

    if(header.classList.contains('open')){ // Close Menu
        body.classList.remove('noScroll');
        header.classList.remove('open');
        fadeElements.forEach(function(element){
            element.classList.remove('fadeIn');
            element.classList.add('fadeOut');
        })
    }
    else { // Open Menu
        body.classList.add('noScroll');
        header.classList.add('open');
        fadeElements.forEach(function(element){
            element.classList.remove('fadeOut');
            element.classList.add('fadeIn');
        })
    }
});