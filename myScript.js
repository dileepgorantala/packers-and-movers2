const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');
const main_1 = document.getElementById('main_1');
burger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    burger.classList.toggle('toggle');
    main_1.classList.toggle('mainsub');
});


const main4Elements = document.querySelectorAll('.main_4');

main4Elements.forEach((element) => {
    element.addEventListener('mouseenter', () => {
        element.classList.add('hover');
    });

    element.addEventListener('mouseleave', () => {
        element.classList.remove('hover');
    });
});


let name1 = document.getElementById("name");
let nameErrorMsg = document.getElementById("nameErrorMsg");
let email = document.getElementById("email");
let EmailErrorMsg = document.getElementById("EmailErrorMsg");
name1.addEventListener("blur", function(event) {
    if (event.target.value === "") {
        nameErrorMsg.textContent = "Reqired*";
    } else {
        nameErrorMsg.textContent = "";
    }
});
email.addEventListener("blur", function(event) {
    if (event.target.value === "") {
        EmailErrorMsg.textContent = "Reqired*";
    } else {
        EmailErrorMsg.textContent = "";
    }
});
let myForm = document.getElementById("myForm");
myForm.addEventListener("submit", function(event) {
    event.preventDefault();
});