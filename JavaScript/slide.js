document.addEventListener('DOMContentLoaded', function() {
    // Select all elements with the class 'slide-in' or 'slide-in-right'
    const slideInElements = document.querySelectorAll('.slide-in, .slide-in-right');

    function checkSlide() {
        slideInElements.forEach(element => {
            // Calculate the scroll position at which the element should start appearing
            const slideInAt = (window.scrollY + window.innerHeight) - element.offsetHeight / 4;
            // Get the bottom position of the element
            const elementBottom = element.offsetTop + element.offsetHeight;
            // Check if the element is at least partially in the viewport
            const isHalfShown = slideInAt > element.offsetTop;
            // Ensure the element has not been scrolled past
            const isNotScrolledPast = window.scrollY < elementBottom;

            // Add or remove the 'show' class based on visibility conditions
            if (isHalfShown && isNotScrolledPast) {
                element.classList.add('show');
            } else {
                element.classList.remove('show');
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
    // Calculate total scrollable height
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    // Get the current scroll position
    const scrollPosition = window.scrollY;
    // Calculate the percentage of page scrolled
    const scrollPercentage = (scrollPosition / totalHeight) * 100;
    // Adjust the progress bar height to reflect scroll progress
    progressBar.style.height = scrollPercentage + '%';
});