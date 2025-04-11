// var h1Text = document.querySelector("h1").textContent
// console.log(h1Text)

// for h1
function breakTheTexth1() {

    var h1 = document.querySelector("h1") 
    var h1Text = h1.textContent // h1 text content
    // console.log(h1Text) // h1 text content
    
    var splittedTexth1 = h1Text.split("")
    
    var clutter  = ""
    
    splittedTexth1.forEach(function(elem){
        clutter += `<span>${elem}</span>`
    })
    
    h1.innerHTML = clutter

}

breakTheTexth1()

gsap.from("h1 span", {
    y:70,
    opacity:0,
    duration:0.4,
    delay:0.5,
    stagger: 0.1,
    // ease: "back.out(4)" 
})


// For h2
function breakTheTexth2() {

    var h2 = document.querySelector("h2")
    var h2Text = h2.textContent

    var splittedTexth2 = h2Text.split("")
    var halflength = splittedTexth2.length/2

    var clutterh2 = ""

    splittedTexth2.forEach( function(elem, idx) {
        if(idx<halflength){
            clutterh2 += `<span class="first-half">${elem}</span>`
        }
        else{
            clutterh2 += `<span class="second-half">${elem}</span>`
        }
    })

    h2.innerHTML = clutterh2
    
}

breakTheTexth2()

gsap.from("h2 .first-half", {
    y:60,
    opacity:0,
    duration:0.5,
    delay:0.5,
    stagger:0.1
})
gsap.from("h2 .second-half", {
    y:60,
    opacity:0,
    duration:0.5,
    delay:0.5,
    stagger: -0.1
})