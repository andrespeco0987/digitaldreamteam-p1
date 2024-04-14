window.addEventListener('scroll', () => {
    const images = document.querySelectorAll('.container-sm');
    const paragraphs = document.querySelectorAll('.container-sm p');

    images.forEach(image => {
        if (isElementInViewport(image)) {
            image.classList.add('animate-slide');
        }
    });

    paragraphs.forEach(paragraph => {
        if (isElementInViewport(paragraph)) {
            paragraph.classList.add('animate-slide');
        }
    });
});

function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}