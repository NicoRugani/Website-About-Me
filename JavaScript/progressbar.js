// Wait for the page to load and listen for scroll events
document.addEventListener('scroll', function() {
    // Select the progress bar element
    const progressBar = document.querySelector('.progress-bar');

    // Calculate the total scrollable height of the document
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;

    // Get the current vertical scroll position
    const scrollPosition = window.scrollY;

    // Calculate the percentage of the page that has been scrolled
    const scrollPercentage = (scrollPosition / totalHeight) * 100;

    // Update the height of the progress bar to reflect scroll progress
    progressBar.style.height = scrollPercentage + '%';
});
