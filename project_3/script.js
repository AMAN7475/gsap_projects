var path = `M 100 200 Q 725 200 1350 200`

var finalPath = `M 100 200 Q 725 200 1350 200`

var string = document.querySelector("#string")

string.addEventListener("mousemove",function(dets){
    path = `M 100 200 Q ${dets.x} ${dets.y} 1350 200`
    gsap.to("svg path",{
        attr:{d:path},
        duration:1.0,
        ease:"power3.out"
    })
})

string.addEventListener("mouseleave",function(){
    gsap.to("svg path",{
        attr:{d:finalPath},
        duration:1.5,
        ease:"elastic.out(1,0.2)"
    })
})