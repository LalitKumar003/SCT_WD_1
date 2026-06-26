const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

window.addEventListener("scroll", () => {
    const nav = document.querySelector("header");

    if(window.scrollY > 50){
        nav.style.background="#F3E5C8";
    }else{
        nav.style.background="#F8EFD8";
    }
});

const form = document.getElementById("contactForm");

if(form){

form.addEventListener("submit",(e)=>{

e.preventDefault();

alert("Thank you! Your inquiry has been submitted.");

form.reset();

});

}