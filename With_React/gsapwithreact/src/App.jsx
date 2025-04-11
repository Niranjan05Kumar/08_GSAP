import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useRef } from 'react'
import { useState , contextSafe} from 'react'
// import { useRef } from 'react'


const App = () => {


  // Example 1

  // const boxRef = useRef()  // method 1 for single element select for animation

  // useGSAP(() => {
  //   gsap.from(boxRef.current ,{
  //     y:100,
  //     rotate:360,
  //     duration:1,
  //     delay:1,
  //     opacity:0
  //   })
  // })

  // useGSAP(() => {    // method 2 for single element select for animation
  //   gsap.from(".box", {
  //     opacity:0,
  //     scale:0,
  //     rotate:360,
  //     duration:2
  //   })
  // }, {scope:".container2"})


  // Example 2

  // const [xvalue, setXvalue] = useState(0)
  // const [yvalue, setYvalue] = useState(0)
  // const [rotate, setrotate] = useState(0)

  // const randomX = gsap.utils.random(-300, 300, 40)
  // const randomY = gsap.utils.random(-300, 300, 40)
  // const rotatedeg = gsap.utils.random(-360, 360, 45)

  // console.log(randomX)
  // console.log(rotatedeg)

  // useGSAP(() => {
  //   gsap.to(".box", {
  //     x:xvalue,
  //     y:yvalue,
  //     duration:1,
  //     rotate:rotate
  //   })
  // },[randomX, randomY, rotatedeg])


  // Example 3 for save memory
  const boxRef = useRef()

  const {contextSafe} = useGSAP()

  const rotateBox = contextSafe(() =>{
    gsap.to(boxRef.current, {
      rotate:180,
      duration:1
    })
  })

  return (
    <main>

      {/* Example 1 */}
      {/* <div className="container1">
        <div className="circle"></div>
        <div ref={boxRef} className="box"></div>
      </div>
      <div className="container2">
        <div className="circle"></div>
        <div className="box"></div>
      </div> */}



      {/* Example 2 */}

        {/* <div className="container">
          <button onClick={()=>{
            setXvalue(randomX)
            setYvalue(randomX)
            setrotate(rotatedeg)
          }} >
            animate
          </button>
          <div className="box"></div>
        </div> */}


        {/* Example 3 for save memory  */}

        <div className="container">
          <button onClick={rotateBox}>
            animate
          </button>
          <div ref={boxRef} className="box"></div>
        </div> 
    </main>
  )
}

export default App
