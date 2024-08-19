function toggleMenu(){
    const menu = document.querySelector(".menu-links")
    const icon = document.querySelector(".hamburger-icon")
    menu.classList.toggle("open")
    icon.classList.toggle("open")
}

function navigateTo(url) {
    window.location.href = url;
}

function scrollTo(id) {
    var element = document.getElementById(id);
    
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth', // Smooth scrolling
            block: 'center',      // Align the element to the top of the view
            inline:'nearest'
        });
    }
}

document.addEventListener("DOMContentLoaded", function() {
    var typingElement = document.querySelector('.typing');

    function isInViewport(element) {
        var rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function checkTypingAnimation() {
        if (isInViewport(typingElement)) {
            typingElement.style.animation = 
            'typing 1.5s steps(20, end), blink-caret .75s step-end infinite';
            typingElement.style.color = 'white';
        }
        else{
            typingElement.style.animation = 'none';
            typingElement.style.color = 'transparent';
        }
    }

    // Check on scroll and on page load
    window.addEventListener('scroll', checkTypingAnimation);
    window.addEventListener('resize', checkTypingAnimation);
    checkTypingAnimation(); // Initial check
});

