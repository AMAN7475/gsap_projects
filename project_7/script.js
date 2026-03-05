// window.addEventListener("wheel",function(dets){
//     if(dets.deltaY>0){
//         gsap.to(".marque",{
//             x: "-200%",
//             duration:3,
//             repeat:-1,
//             ease:"none"
//         })

//         gsap.to(".marque img",{
//             rotate: 180
//         })


//     }else{
//         gsap.to(".marque",{
//             x: 0,
//             duration:3,
//             repeat:-1,
//             ease:"none"
//         })

//         gsap.to(".marque img",{
//             rotate: 0
//         })
//     }
// })


let tl = gsap.to(".marque", {
    x: "-200%",
    duration: 5,
    repeat: -1,
    ease: "none"
});

window.addEventListener("wheel", function(dets){
    
    if(dets.deltaY > 0){
        tl.timeScale(1)

        gsap.to(".marque img",{
            rotate:180
        })

    } else {

        tl.timeScale(-1)

        gsap.to(".marque img",{
            rotate:0
        })

    }

});