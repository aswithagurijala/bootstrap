// Smooth Scrolling with Locomotive Scroll
const scroll = new LocomotiveScroll({
    el: document.querySelector("#smooth-content"),
    smooth: true
});

// GSAP Animations
gsap.from("#animated-text", { 
    opacity: 0, 
    y: 50, 
    duration: 1.5, 
    ease: "power2.out" 
});

gsap.from(".circle", { 
    x: -100, 
    opacity: 0, 
    duration: 2, 
    delay: 0.5 
});

gsap.from(".triangle", { 
    y: 100, 
    opacity: 0, 
    duration: 2, 
    delay: 1 
});

gsap.from(".square", { 
    x: 100, 
    opacity: 0, 
    duration: 2, 
    delay: 1.5 
});
document.addEventListener("DOMContentLoaded", () => {
    // GSAP Animations
    gsap.to("#animated-text", { opacity: 1, y: -10, duration: 1.5, ease: "power3.out" });
    gsap.to(".subtext", { opacity: 1, y: -10, duration: 1.5, delay: 0.5, ease: "power3.out" });
    gsap.utils.toArray(".fade-in").forEach((el, i) => {
        gsap.to(el, { opacity: 1, y: -10, duration: 1.5, delay: i * 0.3, ease: "power3.out" });
    });
    
    // Locomotive Scroll
    const scroll = new LocomotiveScroll({
        el: document.querySelector("#smooth-content"),
        smooth: true
    });
    
    // Background Canvas Animation
    const canvas = document.getElementById("backgroundCanvas");
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    let particles = [];
    for (let i = 0; i < 150; i++) {
        particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            radius: Math.random() * 3,
            speedX: Math.random() * 2 - 1,
            speedY: Math.random() * 2 - 1
        });
    }
    
    function animateParticles() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach(p => {
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
            ctx.fillStyle = "#ff4081";
            ctx.fill();
            p.x += p.speedX;
            p.y += p.speedY;
            if (p.x < 0 || p.x > canvas.width) p.speedX *= -1;
            if (p.y < 0 || p.y > canvas.height) p.speedY *= -1;
        });
        requestAnimationFrame(animateParticles);
    }
    animateParticles();
    
    // Additional Geometric Animations
    gsap.to(".hexagon", { rotation: 360, scale: 1.2, duration: 3, repeat: -1, yoyo: true, ease: "power1.inOut" });
    gsap.to(".square", { x: "random(-100, 100)", y: "random(-100, 100)", duration: 2, repeat: -1, yoyo: true, ease: "sine.inOut" });
    gsap.to(".triangle", { y: "random(-50, 50)", x: "random(-50, 50)", rotation: "+=360", duration: 3, repeat: -1, ease: "power2.inOut" });
});

gsap.from(".fade-in", {
    opacity: 0,
    y: 30,
    duration: 1.5,
    scrollTrigger: {
        trigger: ".parallax",
        start: "top 80%",
        toggleActions: "play none none reverse"
    }
});

        // Hover effect on Mockup
        document.querySelector('.mockup-box').addEventListener('mouseenter', () => {
            gsap.to('.mockup-text', { opacity: 1, y: 0, duration: 0.5 });
        });

        document.querySelector('.mockup-box').addEventListener('mouseleave', () => {
            gsap.to('.mockup-text', { opacity: 0, y: 20, duration: 0.5 });
        });

        const shapeContainer = document.querySelector('.floating-shapes');
        const numShapes = 10; // Number of floating shapes

        function createShape(type) {
            const shape = document.createElement('div');
            shape.classList.add(type);

            // Random initial position
            shape.style.left = Math.random() * window.innerWidth + "px";
            shape.style.top = Math.random() * window.innerHeight + "px";

            shapeContainer.appendChild(shape);

            return shape;
        }

        // Generate random shapes
        const shapes = [];
        for (let i = 0; i < numShapes; i++) {
            const type = ["circle", "square", "triangle"][Math.floor(Math.random() * 3)];
            shapes.push(createShape(type));
        }

        // Random Floating Animation
        function randomMovement(element) {
            gsap.to(element, {
                x: Math.random() * (window.innerWidth - 100),
                y: Math.random() * (window.innerHeight - 100),
                duration: Math.random() * 6 + 4,
                ease: "power1.inOut",
                repeat: -1,
                yoyo: true
            });
        }

        // Apply animation to each shape
        shapes.forEach(shape => {
            randomMovement(shape);
        });

        // Fade-in Effect on Scroll
        window.addEventListener('scroll', function () {
            document.querySelectorAll('.fade-in').forEach(el => {
                let rect = el.getBoundingClientRect();
                if (rect.top < window.innerHeight - 50) {
                    el.style.opacity = 1;
                    el.style.transform = "translateY(0px)";
                }
            });
        });
    
