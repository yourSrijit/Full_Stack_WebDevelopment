let tl=gsap.timeline();
tl.from("h3",{
    y:-50,
    duration:1,
    delay:.4,
    opacity:0,
    stagger:.3
});
tl.from(".main h1",{
    x:-500,
    opacity:0,
    duration:0.8,
    stagger:.4
})
tl.from("img",{
    x:100,
    rotate:45,
    opacity:0,
    duration:0.5,
    stagger:.5
})