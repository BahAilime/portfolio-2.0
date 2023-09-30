gsap.fromTo(".I", { opacity: 0 }, { opacity: 1 }).delay(1);
gsap.fromTo("nav", { opacity: 0 }, { opacity: 1 }).delay(1.5);
gsap.fromTo(".scroll-downs", { opacity: 0 }, { opacity: 1 }).delay(1.9);

document.querySelector(".projets").addEventListener("click", () => {
    gsap.to(".transition", { opacity: "1" })
        .then(_ => document.location.href = "projets/index.html");

})

document.querySelector(".home").addEventListener("click", () => {
    gsap.to(".black", { opacity: "1" })
        .then(_ => document.location.href = "../index.html");

})