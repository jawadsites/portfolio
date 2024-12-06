// GSAP Animations
window.onload = () => {
    gsap.from(".navbar", { duration: 1, y: -100, opacity: 0, ease: "bounce" });
    gsap.from(".animate", {
        duration: 1.5,
        opacity: 0,
        y: 50,
        delay: 0.5,
        stagger: 0.3,
    });
};
document.querySelectorAll('a').forEach(link => {
    link.addEventListener("click", e => {
        e.preventDefault();
        const target = link.getAttribute("href");
        window.location.href = target;
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll(".content");

    const options = {
        threshold: 0.1, // Trigger when 10% of the section is visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("fade-in");
                observer.unobserve(entry.target); // Stop observing once animated
            }
        });
    }, options);

    sections.forEach(section => observer.observe(section));
});


