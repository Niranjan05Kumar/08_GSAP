gsap.to(".box1", {
    x: 790, // default unit px
    duration:3, // default unit second
    delay:1,
    backgroundColor: 'red',
    borderRadius:'50%',
    rotate: 180,
    repeat:1, // repeat: 1 se do baar repeat hoga, 1 baar pahle hi tha ek baar repeat:1 se hoga
    // repeat: -1, // for infinite time
})

gsap.from(".box2", {
    x: 790,
    duration:3,
    delay:1,
    backgroundColor: 'green',
    borderRadius:'50%',
    rotate: 180,
    repeat:1,
})
gsap.to(".box3", {
    x: 790,
    duration:3,
    delay:1,
    backgroundColor: 'yellow',
    borderRadius:'50%',
    rotate: 180,
    repeat:3,
    yoyo:true
})


// stagger
gsap.from(".box4 h2", {
    duration:0.4,
    delay:1,
    y:50,
    opacity:0,
    stagger:0.3
})
