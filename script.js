gsap.to(".E", {x: -50});
gsap.to(".B", {x: -50}).delay(0.2);

gsap.to(".E", {y: -40, opacity: 0}).delay(2);
gsap.to(".B", {y: -40, opacity: 0}).delay(2.2);

gsap.to(".black", { y: "-100vh" }).delay(3.5);
gsap.to(".transition", { y: "-100vh" }).delay(3.55);

// gsap.fromTo(".nathan", { opacity: 0 }, { opacity: 1 }).delay(4);
// gsap.fromTo("nav", { opacity: 0 }, { opacity: 1 }).delay(4.3);

function spanize(id) {
    elt = document.getElementById(id)
    txt = elt.innerText.split("")
    spans = txt.map(letter => {
        console.log(letter);
        a = document.createElement("span")
        a.innerText = letter
        if (letter == " ") {
            a.classList.add("space")
            a.innerText = "|"
        }
        return a
    })
    elt.innerText = ""
    spans.forEach(span => elt.appendChild(span))
}

["tel"].forEach(id => spanize(id))


document.querySelector(".info").addEventListener("click", () => {
    gsap.to(".transition", { y: "0" })
        .then(_ => document.location.href = "/info");

})

document.querySelector(".projets").addEventListener("click", () => {
    gsap.to(".transition", { y: "0" })
        .then(_ => document.location.href = "/projets");

})