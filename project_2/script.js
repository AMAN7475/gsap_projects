gsap.from("#page1 #box",{
    backgroundColor:"rgba(229, 6, 6, 1)",
    duration:4,
    rotate:360,
    borderRadius:"0%",
    scrollTrigger:{
        trigger:"#page1 #box",
        scroller:"body",
        markers:true,
        start:"top 20%",
        end:"top 50%",
        scrub:3
    }
})

gsap.to("#page2 h1",{
    duration:5,
    transform:"translateX(-100%)",
    scrollTrigger:{
        trigger:"#page2",
        scroller:"body",
        markers:true,
        start:"top 0%",
        end:"top -120%",
        scrub:2,
        pin:true,
        pinSpacing:false
    }
})

gsap.to("#box1",{
    y:"80vh",
    duration:5,
    delay:2,
    borderRadius:"50%",
    backgroundColor:"rgb(237, 132, 4)",
    repeat:-1,
    yoyo:true,
    rotate:360,
    
})

gsap.from("#box2",{
    y:"80vh",
    duration:5,
    delay:2,
    borderRadius:"50%",
    backgroundColor:"rgb(237, 132, 4)",
    repeat:-1,
    yoyo:true,
    rotate:360,
})