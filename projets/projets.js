// @ ts-check

gsap.fromTo(".intro", { opacity: 0 }, { opacity: 1 }).delay(1);
gsap.fromTo("nav", { opacity: 0 }, { opacity: 1 }).delay(1.5);
gsap.fromTo(".scroll-downs", { opacity: 0 }, { opacity: 1 }).delay(1.9);

document.querySelector(".info").addEventListener("click", () => {
    gsap.to(".transition", { opacity: "1" })
        .then(_ => document.location.href = "/info");

})

document.querySelector(".home").addEventListener("click", () => {
    gsap.to(".black", { opacity: "1" })
        .then(_ => document.location.href = "../index.html");

})


const projets = document.querySelector(".projets")

/*

1. ajouter les projets a la liste
2. mettre le 1er au centre
3. si scroll -> tout monter et changer le fond en fonction du projet

*/

document.onscroll = (e) => {
    console.log(document.body.scrollTop);
}