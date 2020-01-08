const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
        
    
    burger.addEventListener('click', () => {
        // toggle the navigation bar
            nav.classList.toggle('nav-active');

        //animation to the links in the navigation
        navLinks.forEach((link, index) => {
            if (link.style.animation){
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.2}s`
            };
        });
        //Burger animation
        burger.classList.toggle('toggle')
    });
};
navSlide()