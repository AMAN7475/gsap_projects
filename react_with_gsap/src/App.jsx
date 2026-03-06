import React, { useRef } from 'react'
import { useGSAP } from "@gsap/react";
import gsap from 'gsap';

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

    const container = useRef()
    useGSAP(()=>{
    gsap.from(".box",{
      rotate:360,
      duartion:10,
      delay:1,
      opacity:0,
      y: 500
    })
  },{scope:container})

  return (
    <main>
      <div ref={container} className="container">
        <div className="circle"></div>
        <div className="box"></div>
      </div>

      <div className="container2">
        <div className="circle"></div>
        <div className="box"></div>
      </div>
    </main>
  )
}

export default App
