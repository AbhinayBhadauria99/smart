function cursorEffect() {
    var page1Cont = document.querySelector(".page1-content")
    var curso = document.querySelector(".cursor")

    page1Cont.addEventListener("mousemove", function (dets) {
        gsap.to(curso, {
            x: dets.x,
            y: dets.y
        })
    })

    page1Cont.addEventListener("mouseenter", function () {
        gsap.to(curso, {
            scale: 1,
            opacity: 1
        })

    })
    page1Cont.addEventListener("mouseleave", function () {
        gsap.to(curso, {
            scale: 0,
            opacity: 0
        })

    })

}
cursorEffect()
function page2Animation() {

    gsap.from(".elem h1", {
        y: 120,
        stagger: 0.2,
        duration: 1,
        scrollTrigger: {
            trigger: ".page2",
            scroller: "body",
            start: "top 47%",
            end: "top 46%",
            scrub: 2
        }
    })

}
page2Animation()

function page5Animation() {

    gsap.from(".elem2 h2", {
        y: 320,
        stagger: 0.2,
        duration: 1,
        scrollTrigger: {
            trigger: ".page5",
            scroller: "body",
            start: "top 47%",
            end: "top 56%",
            scrub: 2,
        }
    })

}
page5Animation()