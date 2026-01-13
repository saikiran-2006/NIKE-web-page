function shoesanimation(){

  var tl = gsap.timeline({
  scrollTrigger: {
    trigger: "#main",
    start: "10% 10%",
    end: "50% ",
    scrub: 2,
    duration: 5,
   
  }
})
tl.to("#shoes", {
  top: "180%",
  left: "10%"
})
tl.to("#shoes", {
  width: "400px",
  height: "350px",
})
}
shoesanimation();

function cardsanimation(){
  gsap.to("#cards", {
  x: -1600,
  ease: "none",
  scrollTrigger: {
    trigger: "#cards",
    start: "top 10%",
    scrub: true,
    pin: true,
  }
});
}
cardsanimation();

function cursoranimation(){


var video = document.querySelector("#video");

var circle = document.querySelector("#circle");

video.addEventListener("mousemove", function (dets) {
  gsap.to("#circle", {
    x: dets.x,
    y: dets.y,
    opacity: 1,

  })
})

video.addEventListener("mouseleave", function () {
  gsap.to("#circle", {
    opacity: 0,
    duration: 0.4
  })
}
)
}
cursoranimation();

function btnanimation(){

var btn = document.querySelector("#btn");

btn.addEventListener("mouseenter", function () {
  gsap.to("#btn", {
    scale: "0.8",
    backgroundColor: "black",
    color: "white"
  })
})

btn.addEventListener("mouseleave", function () {
    gsap.to("#btn", {
    scale: "1",
    backgroundColor: "white",
    color: "black"

})
})
}
btnanimation();

window.addEventListener("wheel", function (e) {
    if (e.deltaY > 0) {
        gsap.to("#first", {
            transform: "translateX(-200%)",
            duration: 2,
            ease: "none",
            repeat: -1
        })

    } else {
        gsap.to("#first", {
            transform: "translateX(0%)",
            duration: 2,
            ease: "none",
            repeat: -1
        
})
  
}
});