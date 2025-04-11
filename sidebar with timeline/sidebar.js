var showSidebar = document.querySelector("#nav i");
var hideSidebar = document.querySelector("#sidebar i");

var tl = gsap.timeline()

tl.from("#sidebar", {
    duration: 0.2,
    x:"100%",
})
tl.from("#sidebar i", {
    duration: 0.2,
    x: 100,
    opacity: 0,
    ease: "back.out(1)"
})
tl.from("#sidebar h2", {
    duration: 0.2,
    x: 100,
    opacity: 0,
    stagger: 0.15,
})

tl.pause()

showSidebar.addEventListener("click", function() {
    tl.play()
})

hideSidebar.addEventListener("click", function() {
    tl.reverse(0.1);
})
