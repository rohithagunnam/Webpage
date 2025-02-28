document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll("nav ul li a");

    links.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);
            
            window.scrollTo({
                top: targetSection.offsetTop - 60,
                behavior: "smooth"
            });
        });
    });

    // Active link highlight on scroll
    window.addEventListener("scroll", function () {
        let scrollPosition = window.scrollY + 100;
        links.forEach(link => {
            let section = document.querySelector(link.getAttribute("href"));
            if (section.offsetTop <= scrollPosition && section.offsetTop + section.offsetHeight > scrollPosition) {
                links.forEach(l => l.classList.remove("active"));
                link.classList.add("active");
            }
        });
    });
});