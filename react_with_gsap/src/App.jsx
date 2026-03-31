import React, { useRef } from 'react'
import { useGSAP } from "@gsap/react";
import gsap from 'gsap';
import { useState } from 'react';

const App = () => {

  // 1st option (using useRef())

  // const boxRef = useRef()
  // useGSAP(()=>{
  //   gsap.from(boxRef.current,{
  //     rotate:360,
  //     duartion:10,
  //     delay:1,
  //     opacity:0,
  //     y: 500
  //   })
  // })

  //  2nd option (using scope)

  // useGSAP(()=>{
  //   gsap.from(".box",{
  //     rotate:360,
  //     duartion:10,
  //     delay:1,
  //     opacity:0,
  //     y: 500
  //   })
  // },{scope:".container"})

  // const container = useRef()
  // useGSAP(()=>{
  //   gsap.from(".box",{
  //     rotate:360,
  //     duartion:10,
  //     delay:1,
  //     opacity:0,
  //     y: 500
  //   })
  // },{scope:container})

  const [xValue, setXValue] = useState(0)
  const randomX = gsap.utils.random(-500,500,100 )
  const [rotation, setRotation] = useState(0)
  const rotateX = gsap.utils.random(-360,360,30)

  const boxRef = useRef()
  
  useGSAP(()=>{
    gsap.to(boxRef.current,{
      x:xValue,
      duration:1,
      rotate:rotation
    })
  },[xValue,rotation])

  return (
    <main>
      <button onClick={()=>{
          setXValue(randomX)
          setRotation(rotateX)
      }}>Animate</button>
      <div ref={boxRef} className="box"></div>
    </main>
  )
}

export default App  
