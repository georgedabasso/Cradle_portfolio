// Hamburger menu toggle

console.log("Reveal script loaded!");
document.addEventListener("DOMContentLoaded", function (){
    const toggle = document.getElementById("menu-toggle");
    const navbar = document.getElementById("navbar");

    toggle. addEventListener ("click", () => {
        navbar.classList.toggle("show");
    });

});

document.addEventListener("DOMContentLoaded", function (){
    const stakeholders= document.querySelectorAll('.stakeholder');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal');
            }
        });
    },{
        threshold:0.2
    });
    stakeholders.forEach(stakeholder => observer.observe(stakeholder));
});