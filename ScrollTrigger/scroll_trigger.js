gsap.from(".page1 .box",{
    scale: 0.2,
    opacity: 0,
    duration: 1,
    delay: 1,
})
gsap.from(".page2 .box",{
    scale: 0.2,
    opacity: 0,
    duration: 1,
    rotate:360,
    scrollTrigger:{
        trigger: ".page2 .box",
        scroller: "body",
        start: "top 60%", // start of animation
        end: "top 30%", // end of animation
        scrub: 0.1, // smooth scrolling
        markers: true,  // true to see the markers
        pin: true, // pin the element
    }
})
gsap.from(".page3 h1",{
    x: 300,
    scale: 0.2,
    opacity: 0,
    duration: 1,
    scrollTrigger:{
        trigger: ".page3 h1",
        scroller: "body",
        start: "top 90%", // start of animation
        end: "top 60%", // end of animation
        scrub: 0.1, // smooth scrolling
        markers: true,  // true to see the markers
    }
})
gsap.from(".page3 h2",{
    x: -300,
    scale: 0.2,
    opacity: 0,
    duration: 1,
    scrollTrigger:{
        trigger: ".page3 h2",
        scroller: "body",
        start: "top 80%", // start of animation
        end: "top 50%", // end of animation
        scrub: 0.1, // smooth scrolling
        markers: true,  // true to see the markers
    }
})

// important for pinning the element
gsap.to(".page4 h1",{
    transform: "translateX(-86%)",
    scrollTrigger:{
        trigger: ".page4",
        scroller: "body",
        start: "top 0%", // start of animation
        end: "top -400%%", // end of animation
        scrub: 2, // smooth scrolling
        markers: true,  // true to see the markers
        pin: true, // pin the element
    }
})