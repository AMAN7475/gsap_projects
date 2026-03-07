import React, { useRef } from 'react'
import { useGSAP } from "@gsap/react";
import gsap from 'gsap';
import { useState } from 'react';

const App = () => {

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

  const [circle, setCircle] = useState(0)
  const random = gsap.utils.random(-500,500,10)

  useGSAP(()=>{
    gsap.to(".circle",{
      x:circle,
      duration:0.5
    })
  },[circle])

  return (
    <main>
      <button onClick={()=>{
          setCircle(random)
      }}>Animate</button>
      <div className="circle"></div>
    </main>
  )
}

export default App
