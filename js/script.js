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
const commentSection = document.querySelector('.blog__article__comment');

form.addEventListener('submit', function(event){
    event.preventDefault();

    const nameValue = name.value;
    const emailValue = email.value;
    const commentValue = comment.value;

    if(nameValue && emailValue && commentValue) {
        commentPaste(nameValue, printDate);
    }
})

const printDate = function(){
    const event = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return event.toLocaleDateString(undefined, options);
}

const commentPaste = function(userName, printDate){
    const newComment = document.createElement('div');


    newComment.innerHTML = `
    <div class="blog__article__comment-img">
        <img src="../planted-final-assets/profile-image-2.jpg" alt="a photo of user-female">
    </div>
    <div class="blog__article__comment-user-text">
        <h3>${printDate()} by ${userName}</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio repellat corporis doloremque aspernatur, est, nisi placeat dolores iste corrupti at earum, quas quia alias cumque eos numquam ullam sed atque.</p>
    </div>`;

    const blogArticle = document.querySelector('.blog__article__comment');
    blogArticle.appendChild(newComment);
}