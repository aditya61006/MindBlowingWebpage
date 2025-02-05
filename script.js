var crsr = document.querySelector("#cursor")
var crsrBlur = document.querySelector("#cursor-blur")
document.addEventListener("mousemove",function(dets){
  gsap.to("#cursor",{
    x: dets.x,
    y: dets.y,
    duration: 1,
    ease: "back(1.2)",
  }) 
  gsap.to("#cursor-blur",{
    x: dets.x -75,
    y: dets.y-75,
    duration: 2,
    // ease: "power",
  }) 
})
gsap.to("#nav",{
    backgroundColor : "#000",
    duration :.6,
    height: "105px",
    scrollTrigger:{
        trigger: "#nav",
        scroller:"body",
        start: "top -10%",
        end: "top -11%", 
        scrub: 1.3
    }
    
})
gsap.to("#main",{
    backgroundColor: "#000",
    scrollTrigger:{
        trigger: "#main",
        scroller: "body",
        // markers: true,
        start: "top 30%",
        end: "top -100%", 
        scrub: 2,
    }
})
var h4all = document.querySelectorAll("#nav > h4")
h4all.forEach(function(elem){
  elem.addEventListener("mouseenter",function(){
     crsr.style.scale = "3"
     crsr.style.border = " 1px solid #fff"
     crsr.style.backgroundColor = "transparent"
  })
  elem.addEventListener("mouseleave",function(){
    crsr.style.scale = "1"
    crsr.style.border = " 1px solid #95c11e"
    crsr.style.backgroundColor = "#95c11e"
 })
})

gsap.from("#about-us .imge ,#about-us-in",{
  y:50,
  opacity:0,
  duration: 1,

  scrollTrigger:{
    trigger:"#about-us",
    scroller: "body",
    // markers:true,
    start: "top 60% ",
    end: "top 40%",
    scrub: 1
  }
})
  
gsap.from(".card",{
 scale: .9,
 opacity:0,
 stagger: .4,
  scrollTrigger:{
    trigger:".card",
    scroller: "body",
    // markers:true,
    start: "top 70% ",
    end: "top 60%",
    scrub: 2
  }
})
gsap.from("#colon1",{
  y:-20,
  x:-20,
  scrollTrigger:{
    trigger:"#colon1",
    scroller: "body",
    start: "top 55%",
    end: "top 50%" ,
    scrub: 2
  }
})
gsap.from("#colon2",{
  y:20,
  x:20,
  scrollTrigger:{
    trigger:"#colon1",
    scroller: "body",
    start: "top 52%",
    end: "top 50%" ,
    scrub: 2 
  }
})
gsap.from("#page4 h1",{
  y: 50,
  scrollTrigger:{
    trigger:"#page4 h1",
    scroller:"body",
    start: "top 95%",
    end:"top 80%" ,
    scrub : 2
  }
})