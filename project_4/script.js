var main = document.querySelector("#main")
var cursor = document.querySelector("#cursor")
var imageDiv = document.querySelector("#image")

main.addEventListener("mousemove",function(dets){
    gsap.to(cursor,{
        x:dets.x,
        y:dets.y,
        duration:1
    })
})

imageDiv.addEventListener("mouseenter",function(){
    cursor.innerHTML = "View More"
    gsap.to(cursor,{
        scale:2.5,
        backgroundColor:"#ffffff4e"
    })
})

imageDiv.addEventListener("mouseleave",function(){
    cursor.innerHTML = ""
    gsap.to(cursor,{
        scale:1,
        backgroundColor:"white"
    })
})