// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Project Tile Hover Effect
document.querySelectorAll('.projects-grid a').forEach(project => {
    project.addEventListener('mouseenter', function() {
        this.classList.add('project-hover');
    });
    project.addEventListener('mouseleave', function() {
        this.classList.remove('project-hover');
    });
});

