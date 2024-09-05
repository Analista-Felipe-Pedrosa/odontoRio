var btnMenu = document.querySelector('.btn-menu')
var menu = document.querySelector('.menu')

function menuSite(){
    menu.classList.toggle('menu-open');
    btnMenu.classList.toggle('x');
}

btnMenu.addEventListener('click',menuSite)