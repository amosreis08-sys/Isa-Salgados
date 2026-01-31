document.addEventListener('DOMContentLoaded', () => {
    const slider = document.getElementById('productCarousel');
    let isDown = false;
    let startX;
    let scrollLeft;

    // Desktop Click & Drag
    slider.addEventListener('mousedown', (e) => {
        isDown = true;
        slider.style.cursor = 'grabbing';
        startX = e.pageX - slider.offsetLeft;
        scrollLeft = slider.scrollLeft;
    });

    slider.addEventListener('mouseleave', () => {
        isDown = false;
        slider.style.cursor = 'grab';
    });

    slider.addEventListener('mouseup', () => {
        isDown = false;
        slider.style.cursor = 'grab';
    });

    slider.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - slider.offsetLeft;
        const walk = (x - startX) * 2; 
        slider.scrollLeft = scrollLeft - walk;
    });

    // Mobile feedback
    const cards = document.querySelectorAll('.product-card');
    cards.forEach(card => {
        card.addEventListener('touchstart', () => {
            card.style.transform = 'scale(0.98)';
        }, {passive: true});
        
        card.addEventListener('touchend', () => {
            card.style.transform = 'scale(1)';
        }, {passive: true});
    });
});