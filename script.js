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