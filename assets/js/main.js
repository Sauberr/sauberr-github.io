document.addEventListener('DOMContentLoaded', (event) => {
    document.querySelector('.theme input').addEventListener('change', function () {
        document.body.classList.toggle('dark-mode');
        document.querySelector('nav').classList.toggle('dark-mode');
        document.querySelector('footer').classList.toggle('dark-mode');

        const navMenu = document.querySelector('.nav-menu');
        if (document.body.classList.contains('dark-mode')) {
            navMenu.classList.add('dark-mode');
        } else {
            navMenu.classList.remove('dark-mode');
        }
    });

    document.querySelector('.nav-menu-btn').addEventListener('click', function () {
        myMenuFunction();
    });

    function myMenuFunction() {
        var menuBtn = document.getElementById("myNavMenu");
        var icon = document.querySelector(".nav-menu-btn i");
        var separators = document.querySelectorAll(".separator");

        if (menuBtn.className === "nav-menu") {
            menuBtn.className += " responsive";
            if (document.body.classList.contains('dark-mode')) {
                menuBtn.classList.add('dark-mode');
            }
            icon.classList.remove("uil-bars");
            icon.classList.add("uil-times");
            separators.forEach(separator => separator.style.display = "none");
        } else {
            menuBtn.className = "nav-menu";
            menuBtn.classList.remove('dark-mode');
            icon.classList.remove("uil-times");
            icon.classList.add("uil-bars");
            separators.forEach(separator => separator.style.display = "inline");
        }
    }
});

window.onscroll = function () {
    headerShadow()
};

function headerShadow() {
    const navHeader = document.getElementById("header");

    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {

        navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
        navHeader.style.height = "70px";
        navHeader.style.lineHeight = "70px";

    } else {

        navHeader.style.boxShadow = "none";
        navHeader.style.height = "90px";
        navHeader.style.lineHeight = "90px";

    }
}

var typingEffect = new Typed(".typedText", {
    strings: ["Python Developer"],
    loop: true,
    typeSpeed: 100,
    backSpeed: 80,
    backDelay: 2000
})


const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
})

sr.reveal('.featured-text-card', {})
sr.reveal('.featured-name', {delay: 100})
sr.reveal('.featured-text-info', {delay: 200})
sr.reveal('.featured-text-btn', {delay: 200})
sr.reveal('.social_icons', {delay: 200})
sr.reveal('.featured-image', {delay: 300})


sr.reveal('.project-box', {interval: 200})

sr.reveal('.top-header', {})

const srLeft = ScrollReveal({
    origin: 'left',
    distance: '80px',
    duration: 2000,
    reset: true
})

srLeft.reveal('.about-info', {delay: 100})
srLeft.reveal('.contact-info', {delay: 100})

const srRight = ScrollReveal({
    origin: 'right',
    distance: '80px',
    duration: 2000,
    reset: true
})

srRight.reveal('.skills-box', {delay: 100})
srRight.reveal('.form-control', {delay: 100})


const sections = document.querySelectorAll('section[id]')

function scrollActive() {
    const scrollY = window.scrollY;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 50,
            sectionId = current.getAttribute('id')

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {

            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link')

        } else {

            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link')

        }
    })
}

window.addEventListener('scroll', scrollActive)

let calcScrollValue = () => {
    let scrollProgress = document.getElementById("progress");
    let progressValue = document.getElementById("progress-value");
    let pos = document.documentElement.scrollTop;
    let calcHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
    let scrollValue = Math.round((pos * 100) / calcHeight);
    let isDarkMode = document.body.classList.contains("dark-mode");
    let fillColor = isDarkMode ? "var(--text-color-second)" : "#007fff";
    let emptyColor = isDarkMode ? "#d7d7d7" : "#d7d7d7";

    if (pos > 100) {
        scrollProgress.style.display = "grid";
    } else {
        scrollProgress.style.display = "none";
    }
    scrollProgress.addEventListener("click", () => {
        document.documentElement.scrollTop = 0;
    });
    scrollProgress.style.background = `conic-gradient(${fillColor} ${scrollValue}%, ${emptyColor} ${scrollValue}%)`;
};

window.onscroll = calcScrollValue;
window.onload = calcScrollValue;

function downloadFile(event) {
    const fileUrl = event.currentTarget.getAttribute('data-file');
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = fileUrl.substring(fileUrl.lastIndexOf('/') + 1);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

document.querySelectorAll('.downloadBtn').forEach(button => {
    button.addEventListener('click', downloadFile);
});
