// gasp.to -> initial state to final state
gsap.to(".box1", {
    x: 500,
    backgroundColor: "aqua",
    duration: 2,
    delay: 1,
    rotate: 360,
    scale:0.8,
    borderRadius: "50%",
})

// gsap.from -> final state to initial state
gsap.from(".box2", {
    x: 500,
    y:200,
    backgroundColor: "black",
    duration: 4,
    delay: 1,
    rotate: 360,
    scale:0.8,
    borderRadius: "50%",
})
// stagger -> delay between each element
// gsap.from("h1",{
//     y:20,
//     backgroundColor: "black",
//     duration: 1,
//     delay: 1,
//     opacity: 0,
//     stagger: 0.5,  // stagger ki value -ve(negitive karne par last element se animation start hota hai)
// })

// repeat -> repeat the animation
// repeat: n -> repeat the animation n+1 times
// repeat: -1 -> repeat the animation infinitely
// yoyo -> reverse the animation OR alternate the animation
// yoyo: true -> reverse the animation
gsap.to(".box3", {
    x: 500,
    backgroundColor: "aqua",
    duration: 2,
    delay: 1,
    rotate: 360,
    // repeat: -1, // Infinite repeat
    // yoyo: true, //Enable yoyo effect
})

// timeline -> create a timeline for the animation
const tl = gsap.timeline(); // tl  -> timeline/ other name bhi de sakte hai
tl.from("h1", {
    y:-20,
    opacity: 0,
    duration: 0.7,
    delay: 1,
})
tl.from("h4",{
    y:-20,
    opacity: 0,
    duration: 0.3,
    stagger: 0.3,
})
tl.from("h2", {
    opacity: 0,
    duration: 0.5,
    scale: 0.2,
})