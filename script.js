// ===================== COUNTER ANIMATION =====================

const counters = document.querySelectorAll('.counter');

const animateCounter = (counter) => {

    const target = +counter.getAttribute('data-target');

    let count = 0;

    const increment = target / 120;

    const update = () => {

        count += increment;

        if(count < target){

            counter.innerText = Math.ceil(count);

            requestAnimationFrame(update);

        }else{

            counter.innerText = target + "+";

        }

    }

    update();

};

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            animateCounter(entry.target);

            observer.unobserve(entry.target);

        }

    });

},{threshold:0.6});

counters.forEach(counter=>{

    observer.observe(counter);

});
// ===================== STICKY NAVBAR =====================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if(window.scrollY > 80){

        navbar.classList.add("sticky");

    }else{

        navbar.classList.remove("sticky");

    }

});
// ===================== MOBILE MENU =====================

const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {

    navLinks.classList.toggle("active");
    hamburger.classList.toggle("active");

});

// Close menu after clicking a link

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");
        hamburger.classList.remove("active");

    });

});