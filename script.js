var nav = document.querySelector("nav")


nav.addEventListener("mouseenter",()=>{
    let tl= gsap.timeline()

    tl.to("nav",{
        height:"20vw"
    })
    tl.to("#midBtn .mids .nav-bottom h5",{
        display:"block"
    })
    tl.from("#midBtn .mids .nav-bottom h5 span",{
        y:15,
        stagger:{
            amount:0.6
        }
    })

})
nav.addEventListener("mouseleave",()=>{
    let tl= gsap.timeline()

    tl.to("nav",{
        height:"7vw"
    })
    tl.to("#midBtn .mids .nav-bottom h5",{
        display:"none"
    })
    tl.from("#midBtn .mids .nav-bottom h5 span",{
        y:15,
        stagger:{
            amount:0.6
        }
    })

})
