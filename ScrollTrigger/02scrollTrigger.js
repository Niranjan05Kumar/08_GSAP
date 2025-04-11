gsap.from(".box1 .inbox1", {
    scale:0,
    rotate:540,
    duration:2,
    delay:1,
    // scrollTrigger:{
    //     trigger:'.box1 .inbox1',
    //     scroller:'body',
    //     markers:true,
    // }
})
gsap.from(".box2 .inbox2", {
    scale:0,
    rotate:540,
    duration:1,
    scrollTrigger:{
        trigger:'.box2 .inbox2',
        scroller:'body',
        markers: true,
        start: "top 80%",
        end:"top 50%",
        scrub:4, // scrub ki value true/false/1, 2, 3, 4, 5, 6, ...
        // for smooth scrub = 1, 2, 3, 4, 5, ..
    }
})
gsap.from(".box3 .inbox3", {
    scale:0,
    rotate:540,
    duration:2,
    scrollTrigger:{
        trigger:'.box3 .inbox3',
        scroller:'body',
        markers:true,
        start: "top 80%",
        end:"top 50%",
        scrub:true,
    }
})