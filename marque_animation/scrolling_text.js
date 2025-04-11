

window.addEventListener("wheel", function(dets) {
    if(dets.deltaY > 0){
        
        gsap.from("#marque", {
            transform: "translateX(0%)",
            duration: 4,
            ease:"none",
            repeat: -1,
        })

        gsap.to("#marque i", {
            rotate: 180
        })
        

    }
    else{
        gsap.from("#marque", {
            transform: "translateX(-200%)",
            duration: 4,
            ease:"none",
            repeat: -1,
        })

        gsap.to("#marque i", {
            rotate: 0
        })
    }
})
