// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            
        } else {
            entry.target.classList.remove('visible');
            
        }
    });
}, { threshold: 0.4 }); 


const hiddenElement = document.querySelectorAll('.hidden');
hiddenElement.forEach((element) => {
    observer.observe(element);
});



