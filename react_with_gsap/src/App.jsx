import React, { useRef } from 'react'
import { useGSAP } from "@gsap/react";
import gsap from 'gsap';
import { useState } from 'react';

const App = () => {

  // ---------- OPTION 1: using useRef ----------
  // const boxRef = useRef()
  // useGSAP(()=>{
  //   gsap.from(boxRef.current,{   // animate specific element
  //     rotate:360,
  //     duration:10,               // animation duration
  //     delay:1,                   // delay before start
  //     opacity:0,
  //     y: 500                     // move from bottom
  //   })
  // })

  // ---------- OPTION 2: using selector scope ----------
  // useGSAP(()=>{
  //   gsap.from(".box",{           // target elements by class
  //     rotate:360,
  //     duration:10,
  //     delay:1,
  //     opacity:0,
  //     y: 500
  //   })
  // },{scope:".container"})       // limit animation inside container

  // const container = useRef()
  // useGSAP(()=>{
  //   gsap.from(".box",{
  //     rotate:360,
  //     duration:10,
  //     delay:1,
  //     opacity:0,
  //     y: 500
  //   })
  // },{scope:container})          // scope using ref

  // ---------- STATE VALUES ----------
  const [xValue, setXValue] = useState(0)       // x-axis position
  const randomX = gsap.utils.random(-500,500,100 ) // random x value

  const [yValue, setYValue] = useState(0)       // y-axis position
  const randomY = gsap.utils.random(-400,400,100 ) // random y value

  const [rotation, setRotation] = useState(0)   // rotation value
  const rotateX = gsap.utils.random(-360,360,30) // random rotation

  const imageRef = useRef() // reference to image element
  
  // ---------- GSAP ANIMATION ----------
  useGSAP(()=>{
    gsap.to(imageRef.current,{  // animate image
      x:xValue,                 // move horizontally
      y:yValue,                 // move vertically
      duration:1,               // animation speed
      rotate:rotation           // rotate image
    })
  },[xValue,yValue,rotation])   // re-run when values change

  return (
    <main>
      {/* Button to trigger random animation */}
      <button onClick={()=>{
          setXValue(randomX)    // update x position
          setYValue(randomY)    // update y position
          setRotation(rotateX)  // update rotation
      }}>Animate</button>

      {/* Image to animate */}
      <img 
        ref={imageRef} 
        src="https://images.vexels.com/media/users/3/242241/isolated/preview/409d95bf597e130c6c1b1d2ac3f5dbf5-side-fly-geometric-color-stroke.png" 
        alt="" 
      />
    </main>
  )
}

export default App