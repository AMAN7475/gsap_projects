// Animate #box FROM its current state TO the given properties
gsap.to("#box",{
    x:1100,                 // Move the element 1100px on the X-axis (right side)
    duration:3,             // Animation will take 3 seconds to complete
    delay:1,                // Wait 1 second before starting the animation
    rotate: 360,            // Rotate the element 360 degrees (full circle)
    backgroundColor:"rgb(255, 38, 0)", // Change background color to red
    borderRadius:"50%",     // Make the box a circle
    repeat:-1,              // Repeat infinitely (-1 means infinite loop)
    yoyo:true               // After completing, reverse the animation back
})


// Animate #box2 FROM the given properties TO its original CSS state
gsap.from("#box2",{
    x:1100,                 // Start from 1100px right position
    duration:3,             // Animation duration is 3 seconds
    delay:1,                // Start after 1 second delay
    rotate: 360,            // Start from 360-degree rotated position
    backgroundColor:"rgb(255, 230, 0)", // Start with yellow background
    borderRadius:"0%",      // Start as a sharp-corner box
    repeat:-1,              // Infinite repetition
    yoyo:true               // Reverse animation after each cycle
})
