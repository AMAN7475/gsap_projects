gsap.to("#box",{
    x:1100,
    duration:3,
    delay:1,
    rotate: 360,
    backgroundColor:"rgb(255, 38, 0)",
    borderRadius:"50%",
    repeat:-1,
    yoyo:true
})

gsap.from("#box2",{
    x:1100,
    duration:3,
    delay:1,
    rotate: 360,
    backgroundColor:"rgb(255, 230, 0)",
    borderRadius:"0%",
    repeat:-1,
    yoyo:true
})
