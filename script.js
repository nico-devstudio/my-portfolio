let menu = document.querySelector("#menu-icon")
let navbar = document.querySelector(".navbar")

menu.addEventListener("click", function () {
    menu.classList.toggle("bx-x");
    navbar.classList.toggle("active");
})

window.addEventListener('scroll', function () {
    menu.classList.remove('bx-x')
    navbar.classList.remove("active");
})

const typed = new Typed('.multiple-text', {
    strings: ['Frontend Developer', 'Web Designer'],
    typeSpeed: 80,
    backSpeed: 80,
    loop: true,
});

function toggleReadMore() {
    let dots = document.getElementById("dots");
    let moreText = document.getElementById("more");
    let btn = document.getElementById("readMoreBtn");

    if (moreText.style.display === "none") {
        moreText.style.display = "inline";
        dots.style.display = "none";
        btn.innerHTML = "Read Less";
    } else {
        moreText.style.display = "none";
        dots.style.display = "inline";
        btn.innerHTML = "Read More";
    }
};

emailjs.init({
    publicKey: "VbGKLAj3L6QiEKi_n"
});

const form = document.getElementById("contact-form");
const status = document.getElementById("form-status");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    status.textContent = "Sending...";
    status.style.color = "black";

    emailjs.sendForm(
        "service_m0xgx7k",
        "template_2gecjqf",
        this
    ).then(() => {
        status.textContent = "Message sent successfully!";
        status.style.color = "green";
        form.reset();
    }).catch((error) => {
        console.log("EmailJS Error:", error);
        status.textContent = "Failed to send message. Check console.";
        status.style.color = "red";
    });
});