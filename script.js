
const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

const serviceBtn = document.getElementById("serviceBtn");
const serviceText = document.getElementById("serviceText");

const contactForm = document.getElementById("contactForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");
const formMessage = document.getElementById("formMessage");

// Responsive navigation menu
menuBtn.addEventListener("click", function() {
    navMenu.classList.toggle("show");

    const isOpen = navMenu.classList.contains("show");
    menuBtn.setAttribute("aria-expanded", isOpen);
});

// Close menu after selecting a section
navMenu.querySelectorAll("a").forEach(function(link) {
    link.addEventListener("click", function() {
        navMenu.classList.remove("show");
        menuBtn.setAttribute("aria-expanded", "false");
    });
});

// Interactive service content
const services = [
    "Responsive website design",
    "Interactive user interfaces",
    "Frontend form validation"
];

let serviceIndex = 0;

serviceBtn.addEventListener("click", function() {
    serviceText.textContent = services[serviceIndex];

    serviceIndex++;

    if (serviceIndex === services.length) {
        serviceIndex = 0;
    }
});

// Contact form validation
contactForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const message = messageInput.value.trim();

    if (name === "" || email === "" || message === "") {
        formMessage.textContent = "Please fill in all fields.";
        return;
    }

    if (!emailInput.validity.valid) {
        formMessage.textContent = "Please enter a valid email address.";
        emailInput.focus();
        return;
    }

    formMessage.textContent =
        "Form submitted successfully! (Demo only)";

    contactForm.reset();
});
