document.addEventListener('DOMContentLoaded', function() {
    // Select all elements with the class 'slide-in' or 'slide-in-right'
    const slideInElements = document.querySelectorAll('.slide-in, .slide-in-right');

    function checkSlide() {
        slideInElements.forEach(element => {
            if (element.classList.contains('show')) return; // Skip elements already shown

            // Calculate the scroll position at which the element should start appearing
            const slideInAt = (window.scrollY + window.innerHeight) - element.offsetHeight / 4;
            const elementBottom = element.offsetTop + element.offsetHeight;
            const isHalfShown = slideInAt > element.offsetTop;
            const isNotScrolledPast = window.scrollY < elementBottom;

            if (isHalfShown && isNotScrolledPast) {
                element.classList.add('show'); // Add 'show' class to trigger animation
            }
        });
    }

    // Listen for scroll events to trigger the checkSlide function
    window.addEventListener('scroll', checkSlide);
    checkSlide(); // Run the check initially to handle elements already in view
});

// Listen for scroll events to update the progress bar
document.addEventListener('scroll', function() {
    const progressBar = document.querySelector('.progress-bar');
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPosition = window.scrollY;
    const scrollPercentage = (scrollPosition / totalHeight) * 100;
    progressBar.style.height = scrollPercentage + '%';
});
