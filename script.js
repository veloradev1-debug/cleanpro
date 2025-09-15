// Add current year in footer
document.addEventListener('DOMContentLoaded', function () {
    const yearEl = document.getElementById('year');
    if (yearEl) yearEl.textContent = new Date().getFullYear();

    // Simple scroll reveal using IntersectionObserver
    const observers = document.querySelectorAll('.fade-in');
    const io = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
                // Optionally unobserve to avoid toggling
                io.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12 });

    observers.forEach(el => io.observe(el));
});