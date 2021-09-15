const hamburger = document.querySelector('.hamburger');
const navItems = document.querySelector('.navbar__items');

hamburger.addEventListener('click', function(){
    hamburger.classList.toggle("active");
    navItems.classList.toggle("active");
})