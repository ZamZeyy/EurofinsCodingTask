/*////////////////////////////////////////////////////////////////////////////
Javascript file for the scroll effect on the page
Mateusz Judka
*/////////////////////////////////////////////////////////////////////////////



const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        } else {
            entry.target.classList.remove('visible');
        }
    });
}, { threshold: 0.4 });  

// Observes all elements with the class 'hidden'
const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((element) => {
    observer.observe(element);
});
