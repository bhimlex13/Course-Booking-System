

/*===== MENU SHOW Y HIDDEN =====*/
const navMenu = document.getElementById('nav-menu'),
toggleMenu = document.getElementById('nav-toggle'),
closeMenu = document.getElementById('nav-close')

// SHOW
toggleMenu.addEventListener('click', ()=>{
    navMenu.classList.toggle('show')
})

// HIDDEN
closeMenu.addEventListener('click', ()=>{
    navMenu.classList.remove('show')
})

/*===== MOUSEMOVE HOME IMG =====*/
document.addEventListener('mousemove', move);
function move(e){
    this.querySelectorAll('.move').forEach(layer =>{
        const speed = layer.getAttribute('data-speed')
        
        const x = (window.innerWidth - e.pageX*speed)/120
        const y = (window.innerHeight - e.pageY*speed)/120
        
        layer.style.transform = `translateX(${x}px) translateY(${y}px)`
    })
}

/*===== GSAP ANIMATION =====*/
// NAV
gsap.from('.nav__logo, .nav__toggle', {opacity: 0, duration: 1, delay:2, y: 10})
gsap.from('.nav__item', {opacity: 0, duration: 1, delay: 2.1, y: 30, stagger: 0.2,})

// HOME
gsap.from('.home__title', {opacity: 0, duration: 1, delay:1.6, y: 30})
gsap.from('.home__description', {opacity: 0, duration: 1, delay:1.8, y: 30})
gsap.from('.home__button', {opacity: 0, duration: 1, delay:2.1, y: 30})
gsap.from('.home__img', {opacity: 0, duration: 1, delay:1.3, y: 30})


const banner = document.getElementsByClassName('banner')[0];
const blocks = document.getElementsByClassName('blocks');
for (var i = 1; i < 400; i++){
    banner.innerHTML += "<div class='blocks'></div>";
    const duration = Math.random() * 5;
    blocks[i].style.animationDuration = duration+'s';
}

const section = document.querySelector('section');
setTimeout(function(){
    section.classList.add('active')
},8000) // add class active after 14seconds


// typing animation script
var typed = new Typed(".typing", {
    strings: ["Create your own application or website.","Never Too Late to Learn a New Skill!","Register to learn Web Development today."],
    typeSpeed: 120,
    backSpeed: 80,
    loop: true,
    
});



/////
