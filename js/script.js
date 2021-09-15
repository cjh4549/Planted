const hamburger = document.querySelector('.hamburger');
const navItems = document.querySelector('.navbar__items');
const navLink = document.querySelectorAll('.navbar__items li');

hamburger.addEventListener('click', function(){
    hamburger.classList.toggle("active");
    navItems.classList.toggle("active");
})

navLink.forEach(n => n.addEventListener('click', function(){
    hamburger.classList.remove("active");
    navItems.classList.remove("active");
}))
