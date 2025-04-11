// SVG Animation with GSAP
var Path = "M 10 100 Q 400 100 790 100"
var finalPath = "M 10 100 Q 400 100 790 100"

var mypath = document.querySelector("#box")

mypath.addEventListener("mousemove", function (dets) {
    Path = `M 10 100 Q ${dets.x} ${dets.y} 790 100`

    gsap.to("svg path", {
        attr: { d: Path },
        duration: 0.1,
        ease: "power3.Out",
    })
})
mypath.addEventListener("mouseleave", function (dets) {

    gsap.to("svg path", {
        attr: { d: finalPath },
        duration: 1.6,
        ease: "elastic.out(2,0.3)", // for ease function go the gsap ease on google
    })
})