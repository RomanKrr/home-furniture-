const burger = document.querySelector('.header__burger');
const menuList = document.querySelector('.menu__list');

burger.addEventListener("click", () => {
    burger.classList.toggle("active");
    menuList.classList.toggle("active");
});

const loopBtn = document.querySelector('.shrink-loop');
const inputMain = document.querySelector('.shrink-input');

loopBtn.addEventListener("click", () => {
    loopBtn.classList.toggle("active");
    inputMain.classList.toggle("active");
});


/*========================================================*/


const navLink = document.querySelector('.card__navigation-link')

navLink.addEventListener('click', function() {
    navLink.classList.toggle("navigation__button")
});


for(const char of navLink){
    
}