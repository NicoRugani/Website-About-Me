// script.js

document.addEventListener('scroll', function() {
    const progressBar = document.querySelector('.progress-bar');
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPosition = window.scrollY;
    const scrollPercentage = (scrollPosition / totalHeight) * 100;
    progressBar.style.height = scrollPercentage + '%';
});
