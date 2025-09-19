let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('nav');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}


let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let affset = sec.offsetTop - 150;
        let height = sec .offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= affset && top < affset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

    let header = document.querySelector('header')
    header.classList.toggle('sticky',window.scrollY> 100);

};

ScrollReveal({
     reset: true ,
     distance: '80px',
     duration: 2000,
     delay: 200 
});
ScrollReveal().reveal('.home-content , .heading', { origin: 'top'});
ScrollReveal().reveal('.home-img , .services-container, .portfolio-box, .contact form', 
    { origin: 'bottom'});
ScrollReveal().reveal('.home-content h1, .about-img',
    { origin: 'left'});
ScrollReveal().reveal('.home-content p, .about-content',
    { origin: 'right'});
   
const typed = new Typed('.multiple-text',{
    strings: ['...Full Stack Web Developer', '...Software Engineer', '...Freelancer', '...Creative Coder'] ,
    typeSpeed: 50,
    backSpeed: 30,
    backDelay: 1000,
    loop: true
})
ScrollReveal({
  distance: '60px',
  duration: 2000,
  delay: 200,
  reset: true
});
ScrollReveal().reveal('.services h2', { origin: 'top' });
ScrollReveal().reveal('.grid', { origin: 'bottom' });
ScrollReveal().reveal('.card', { origin: 'bottom', interval: 200 });
ScrollReveal().reveal('.skills .heading', { origin: 'top' });
ScrollReveal().reveal('.skills-grid', { origin: 'bottom' });
ScrollReveal().reveal('.skill-card', { origin: 'bottom', interval: 200 });
ScrollReveal().reveal('.project .heading', { origin: 'top' });
ScrollReveal().reveal('.project-container', { origin: 'bottom' });
ScrollReveal().reveal('.project-box', { origin: 'bottom', interval: 200 });
