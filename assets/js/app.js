// scroll to top functionality

const scrollUp = document.getElementById("scroll-up");

scrollUp.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    });
});

// Nav hamburger selections

const burger = document.querySelector("#burger-menu");
const ul = document.querySelector("nav ul");
const nav = document.querySelector("nav");

burger.addEventListener("click", () => {
    ul.classList.toggle("show");
});

// Close hamburger menu when a link is clicked

// Select nav links

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach((link) => 
        link.addEventListener("click", () => {
            ul.classList.remove("show");
        })
    );

// onfocus and onblur functions for form

const namePlaceholder = document.getElementById('name').getAttribute('placeholder')
const emailPlaceholder = document.getElementById('email').getAttribute('placeholder')
const messagePlaceholder = document.getElementById('message').getAttribute('placeholder')

function focusFunction (id) {
        id = document.getElementById(id)
        id.placeholder = ''
}

function blurFunction (id) {

    id = document.getElementById(id)

    if (id.value == '' && id.name == 'sender-name') {
        id.placeholder = namePlaceholder
    } else if (id.value == '' && id.name == 'sender-email') {
        id.placeholder = emailPlaceholder
    } else if (id.value == '' && id.name == 'sender-message') {
        id.placeholder = messagePlaceholder
    }
    
}