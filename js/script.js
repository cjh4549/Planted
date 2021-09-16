const hamburger = document.querySelector('.hamburger');
const navItems = document.querySelector('.navbar__items');
const navLink = document.querySelectorAll('.navbar__items li');

const preventScroll = function() {
    window.scrollTo(0, 0);
}

hamburger.addEventListener('click', function(){
    hamburger.classList.toggle("active");
    navItems.classList.toggle("active");

    window.addEventListener('scroll', preventScroll);

    if (!hamburger.classList.contains("active")) {
        window.removeEventListener('scroll', preventScroll);
    }
})

navLink.forEach(n => n.addEventListener('click', function(){
    hamburger.classList.remove("active");
    navItems.classList.remove("active");

    window.removeEventListener('scroll', preventScroll);
}))

const name = document.querySelector('#name');
const email = document.querySelector('#email');
const comment = document.querySelector('#comment');
const form = document.querySelector('.form');

const formSubmit = form.addEventListener('submit', function(event){
    event.preventDefault();
    console.log(name.value);
    console.log(email.value);
    console.log(comment.value);
})

const printDate = function(){
    const event = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    console.log(event.toLocaleDateString(undefined, options));
}
