// Step hover interaction
const steps = document.querySelectorAll('.step');
steps.forEach((step, index) => {
    step.addEventListener('mouseenter', () => {
        steps.forEach(s => s.classList.remove('active'));
        step.classList.add('active');
    });
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const navHeight = document.querySelector('nav').offsetHeight;
            const targetPosition = target.offsetTop - navHeight - 20;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Add active state to nav links on scroll
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const navHeight = document.querySelector('nav').offsetHeight;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - navHeight - 100;
        const sectionBottom = sectionTop + section.offsetHeight;
        const scrollPosition = window.scrollY;
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            const id = section.getAttribute('id');
            document.querySelectorAll('.nav-links a').forEach(link => {
                link.style.color = link.getAttribute('href') === `#${id}` ? '#000' : '#6b7280';
            });
        }
    });
});