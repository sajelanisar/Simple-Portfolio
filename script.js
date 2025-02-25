// script.js



// Header Function
document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");

    hamburger.addEventListener("click", () => {
        navLinks.classList.toggle("active");
        hamburger.classList.toggle("active"); // Add animation effect
    });

    // Close menu when a link is clicked
    document.querySelectorAll(".nav-links a").forEach(link => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("active");
            hamburger.classList.remove("active");
        });
    });
});

// 

// Typing Animation Function
function typeText(element, text, speed, callback) {
    let i = 0;
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        } else if (callback) {
            setTimeout(callback, 500); // Small delay before next text
        }
    }
    type();
}

// Typing Animation Execution
document.addEventListener("DOMContentLoaded", function () {
    const nameElement = document.getElementById("name");
    const descriptionElement = document.getElementById("description");

    typeText(nameElement, "Nisar Ali", 100, function () {
        typeText(descriptionElement, "I am a Web Developer & Designer.", 75);
    });
});



// Skills Function
document.addEventListener("DOMContentLoaded", () => {
    const circles = document.querySelectorAll(".circle");
    
    circles.forEach(circle => {
        const percent = circle.getAttribute("data-percent");
        const degrees = (percent / 100) * 360;
        circle.style.setProperty("--progress", `${degrees}deg`);
        circle.style.animation = "progressAnimation 2s forwards";
        circle.textContent = `${percent}%`;
    });
});
// 

document.addEventListener("DOMContentLoaded", () => {
    const heroTitle = document.querySelector(".hero h1");
    const heroButton = document.querySelector(".hero .btn");
    const projectCards = document.querySelectorAll(".project-card");

    heroTitle.style.opacity = "0";
    heroButton.style.opacity = "0";
    heroTitle.style.transform = "translateY(-50px)";
    heroButton.style.transform = "translateY(20px)";

    setTimeout(() => {
        heroTitle.style.transition = "opacity 1s ease-in-out, transform 1s ease-in-out";
        heroTitle.style.opacity = "1";
        heroTitle.style.transform = "translateY(0)";
    }, 500);

    setTimeout(() => {
        heroButton.style.transition = "opacity 1s ease-in-out, transform 1s ease-in-out";
        heroButton.style.opacity = "1";
        heroButton.style.transform = "translateY(0)";
    }, 1000);

    projectCards.forEach((card, index) => {
        card.style.opacity = "0";
        card.style.transform = "translateY(20px)";
        setTimeout(() => {
            card.style.transition = "opacity 0.8s ease-in-out, transform 0.8s ease-in-out";
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
        }, 500 + index * 200);
    });

});
