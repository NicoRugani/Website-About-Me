
document.addEventListener('DOMContentLoaded', function() {
    const slideInElements = document.querySelectorAll('.slide-in, .slide-in-right');

    function checkSlide() {
        slideInElements.forEach(element => {
            const slideInAt = (window.scrollY + window.innerHeight) - element.offsetHeight / 4;
            const elementBottom = element.offsetTop + element.offsetHeight;
            const isHalfShown = slideInAt > element.offsetTop;
            const isNotScrolledPast = window.scrollY < elementBottom;

            if (isHalfShown && isNotScrolledPast) {
                element.classList.add('show');
            } else {
                element.classList.remove('show');
            }
        });
    }

    window.addEventListener('scroll', checkSlide);
    checkSlide(); // Initial check
});


document.addEventListener('scroll', function() {
    const progressBar = document.querySelector('.progress-bar');
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPosition = window.scrollY;
    const scrollPercentage = (scrollPosition / totalHeight) * 100;
    progressBar.style.height = scrollPercentage + '%';
});

