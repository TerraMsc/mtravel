var change = gsap.timeline({paused: true})
change.fromTo('#ticket', {opacity: 0}, {opacity: 1, duration: 0.1})
change.fromTo('#ticket', {x: 414}, {x: 0, duration: 0.4})

function play() {
    change.play()
}

function reverse() {
    change.reverse()
}