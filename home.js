let delayVal = 0.3

const params = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
  });
  // Get the value of "some_key" in eg "https://example.com/?some_key=some_value"
  let value = params.some_key; // "some_value"

if (!params.quick) {
    gsap.to(".introEmi", {opacity: 1}).delay(delayVal);
    gsap.to(".introBegu", {opacity: 1}).delay(delayVal);
    
    delayVal += .2
    gsap.to(".introEmi", {x: -50}).delay(delayVal);
    gsap.to(".introBegu", {x: -50}).delay(delayVal+0.2);

    delayVal += 1.3
    gsap.to(".introEmi", {y: -40, opacity: 0}).delay(delayVal);
    gsap.to(".introBegu", {y: -40, opacity: 0}).delay(delayVal+0.2);

    delayVal += .8
    gsap.to(".black", { y: "-100vh" }).delay(delayVal);
    gsap.to(".transition", { y: "-100vh" }).delay(delayVal+0.2);
    delayVal += .8

} else {
    gsap.to(".black", { y: "-100vh" }).delay(delayVal);
    gsap.to(".transition", { y: "-100vh" }).delay(delayVal+0.2);
    delayVal += 0.5
}

gsap.utils.toArray(".nathan").forEach(elt => {
    gsap.fromTo(elt.children, { opacity: 0 }, { opacity: 1, stagger: 0.1, ease: "power4.out" }).delay(delayVal);
})
gsap.fromTo("nav", { opacity: 0 }, { opacity: 1 }).delay(delayVal+.3);

["tel"].forEach(id => spanize(id))

pageTransition(".projets", "projets/")
pageTransition(".info", "info/")