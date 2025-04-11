// section1 Animation

function section1Animation(){

    var tl = gsap.timeline()

    tl.from("nav h2, nav h4, nav button", {
    opacity:0,
    y:-30,
    duration:0.5,
    delay:0.5,
    stagger:0.1
    })

    tl.from(".center-left h1", {
    opacity:0,
    x:-300,
    })
    tl.from(".center-left p", {
    opacity:0,
    x:-300,
    })
    tl.from(".center-left button", {
    opacity:0,
    duration:0.3
    })
    tl.from(".center-right img", {
    opacity:0,
    duration:0.8,
    x:200
    },"-=0.5")
    tl.from(".section1bottom img", {
    opacity:0,
    y:30,
    duration:0.7,
    stagger:0.1
    })

}

section1Animation()  // function call


// section2 Animation
function section2Animation(){

    var tl2 = gsap.timeline({
        scrollTrigger:{
            trigger:".section2",
            scroller:"body",
            // markers: true,
            start: "top 60%",
            end: "top 40%",
            scrub:2
        }
    })
    
    tl2.from(".services", {
        x:-200,
        opacity:0,
        // duration:5,
    })
    
    tl2.from(".card.white.left",{
        x:-200,
        opacity:0
    },"line1")
    tl2.from(".card.black.right",{
        x:200,
        opacity:0
    },"line1")
    
    tl2.from(".card.black.left",{
        x:-200,
        opacity:0
    },"line2")
    tl2.from(".card.white.right",{
        x:200,
        opacity:0
    },"line2")
}

section2Animation() // function call

// section3 Animation
function section3Animation(){

    var tl3 = gsap.timeline({
        scrollTrigger:{
            trigger:".section3",
            scroller:"body",
            // markers: true,
            start: "top 50%",
            end: "top 10%",
            scrub:1
        }
    })

    tl3.from(".container1", {
        y:200,
        opacity:0,
        // duration:0.2
    })
    tl3.from(".container2", {
        x: -200,
        opacity:0,
        // duration:0.2
    })
    tl3.from(".container3", {
        y:200,
        opacity:0,
        // duration:0.2
    })

}

section3Animation() // function call