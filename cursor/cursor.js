var main = document.querySelector(".main")
var cursor = document.querySelector("#cursor")
var imageDiv = document.querySelector("#image")

main.addEventListener("mousemove", function(dets){
    gsap.to(cursor, {
    x:dets.x,
    y:dets.y,
    duration: 0.5,
    ease: "back.out(5)",
    })
} )

imageDiv.addEventListener("mouseenter", function(){
    cursor.innerHTML = "View More"
    gsap.to(cursor, {
        scale: 2,
        duration: 0.5,
        backgroundColor: "#ffffff9d",
        borderRadius: 0,
        ease: "back.out(5)",
    })
})
imageDiv.addEventListener("mouseleave", function(){
    cursor.innerHTML = ""
    gsap.to(cursor, {
        scale: 1,
        duration: 0.5,
        backgroundColor: "#ffffff",
        borderRadius: "50%",
        ease: "back.out(5)",
    })
})