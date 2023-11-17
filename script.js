
document.addEventListener('DOMContentLoaded', () => {
    // Tab Navigation
    const sections = document.querySelectorAll('section');
    document.querySelectorAll('#navbar a').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            sections.forEach(section => section.style.display = 'none');
            const activeSection = document.querySelector(this.getAttribute('href'));
            activeSection.style.display = 'block';
        });
    });

    // Smooth Scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Image Upload (Placeholder - to be implemented based on specific requirements)
    // document.getElementById('imageUpload').addEventListener('change', function(e) {
    //     // Image upload functionality here
    // });
});
