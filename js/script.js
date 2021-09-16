//hamburger

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

//Blog comment 

const name = document.querySelector('#name');
const email = document.querySelector('#email');
const comment = document.querySelector('#comment');
const form = document.querySelector('.form');
const commentContainer = document.querySelector('.commentContainer');

const printDate = function(){
    const event = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return event.toLocaleDateString(undefined, options);
}

form.addEventListener('submit', function(event){
    event.preventDefault();

    const nameValue = name.value;
    const emailValue = email.value;
    const commentValue = comment.value;

    name.value = '';
    email.value = '';
    comment.value ='';

    if(nameValue && emailValue && commentValue) {
        commentPaste(nameValue, commentValue, printDate);
    }
})

const commentPaste = function(userName, comment, printDate){
    const newComment = document.createElement('div');
    newComment.classList.add('blog__article__comment-user');

    newComment.innerHTML = `
    <div class="blog__article__comment-img">
        <img src="../planted-final-assets/profile-image-2.jpg" alt="a photo of user-female">
    </div>
    <div class="blog__article__comment-user-text">
        <h3>${printDate()} by ${userName}</h3>
        <p>${comment}</p>
    </div>`;

    commentContainer.appendChild(newComment);
}