// ====================== PAGE 1 BOX ANIMATION ======================

// Animate #page1 #box FROM given properties to its original CSS state
gsap.from("#page1 #box",{
    backgroundColor:"rgba(229, 6, 6, 1)",  // Start with red background
    duration:10,                          // Animation runs for 10 seconds
    delay:4,                              // Wait 4 seconds before starting
    rotate:360,                           // Start from 360° rotated position
    borderRadius:"20%",                   // Start with slightly rounded corners
    
    scrollTrigger:{
        trigger:"#page1 #box",            // Element that triggers animation
        scroller:"body",                  // Scrolling happens on body
        markers:true,                     // Show start/end markers (for debugging)
        start:"top 20%",                  // Start when box top reaches 20% of viewport
        end:"top 50%",                    // End when box top reaches 50% of viewport
        scrub:3                           // Smoothly link animation to scroll (3 sec delay effect)
    }
})


// ====================== PAGE 2 H1 SCROLL PIN ANIMATION ======================

// Animate h1 text horizontally on scroll
gsap.to("#page2 h1",{
    duration:5,                           // Total animation duration
    transform:"translateX(-100%)",        // Move text completely to left
    
    scrollTrigger:{
        trigger:"#page2",                 // Trigger when page2 hits viewport
        scroller:"body",
        markers:true,                     // Show debugging markers
        start:"top 0%",                   // Start when page2 top touches viewport top
        end:"top -120%",                  // Continue animation till scrolled -120%
        scrub:2,                          // Smooth scroll-based animation
        pin:true,                         // Pin (freeze) page2 during animation
    }
})


// ====================== PAGE 3 BOX1 ANIMATION ======================

// Animate #box1 TO given properties when page3 enters viewport
gsap.to("#box1",{
    x:1000,                               // Move 1000px to right
    duration:3,                           // Animation duration
    delay:1,                              // Start after 1 second
    borderRadius:"50%",                   // Make it circular
    backgroundColor:"rgb(237, 132, 4)",   // Change background to orange
    repeat:-1,                            // Infinite loop
    yoyo:true,                            // Reverse animation each cycle
    rotate:360,                           // Rotate full circle
    
    scrollTrigger:{
        trigger:"#page3",                 // Trigger when page3 enters viewport
        start:"top 80%",                  // Start when page3 top hits 80% of screen
    }
})


// ====================== PAGE 3 BOX2 ANIMATION ======================

// Animate #box2 FROM given properties to original state
gsap.from("#box2",{
    x:1000,                               // Start from 1000px right
    duration:3,
    delay:1,
    borderRadius:"0%",                    // Start as sharp corner box
    backgroundColor:"rgb(237, 132, 4)",   // Start with orange color
    repeat:-1,
    yoyo:true,
    rotate:360,
    
    scrollTrigger:{
        trigger:"#page3",
        start:"top 80%",
    }
})


// ====================== PAGE 3 BOX3 ANIMATION ======================

// Animate #box3 TO given properties
gsap.to("#box3",{
    x:1000,                               // Move right
    duration:3,
    delay:1,
    borderRadius:"50%",                   // Make circular
    backgroundColor:"rgb(237, 132, 4)",
    repeat:-1,
    yoyo:true,
    rotate:360,
    
    scrollTrigger:{
        trigger:"#page3",
        start:"top 80%",
    }
})
