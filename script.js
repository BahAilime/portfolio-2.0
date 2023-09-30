function pageTransition(btnquerry, destination) {
    document.querySelector(btnquerry).addEventListener("click", () => {
        gsap.to(".transition", { y: "0" })
            .then(_ => document.location.href = destination);
    
    })
}

function spanize(id) {
    elt = document.getElementById(id)
    txt = elt.innerText.split("")
    spans = txt.map(letter => {
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