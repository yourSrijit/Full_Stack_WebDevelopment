// to destination 
// gsap.to("#box",{
//     x:1000,
//     rotate:360,
//     backgroundColor:"yellow",
//     duration:2,
//     delay:1
// })

// from destination to initial 
// gsap.to("#box",{
//     x:1000,
//     rotate:360,
//     backgroundColor:"yellow",
//     duration:2,
//     delay:1
// })

let t=gsap.timeline();

t.to("#box1",{
    x:1200,
    rotate:360,
    backgroundColor:"orange",
    duration:2,
    delay:1
})
t.to("#box2",{
    x:1200,
    rotate:360,
    backgroundColor:"pink",
    duration:2,
    delay:1
})
t.to("#box3",{
    x:1200,
    rotate:360,
    backgroundColor:"black",
    duration:2,
    delay:1
})