document.addEventListener("DOMContentLoaded", () => {
    
    // Set up the Intersection Observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // Add a staggered delay for each card
                setTimeout(() => {
                    entry.target.classList.add('visible');
                }, index * 100); // 100ms delay per card
                
                // Stop observing once it's visible
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1 // Trigger when 10% of the card is visible
    });

    // Observe all elements with the class "card"
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        observer.observe(card);
    });
});