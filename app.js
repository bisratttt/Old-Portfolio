// animation for the intro
const intro = document.querySelector("#intro-title")

let typeWriter = new Typewriter(intro, { delay: 75 })

typeWriter
    .pauseFor(200)
    .typeString("<span>Hi,</span>")
    .pauseFor(1000)
    .typeString("<br>")
    .typeString("<span>I'm <a id='name' href='#about'>Bisrat</a>")
    .pauseFor(300)
    .start()


// make elements visible after the intro
let body = document.querySelector("#body-sec")

let makeInvisible = () => {
    body.style.display = 'none'
}

let makeVisible = () => {
    body.style.display = 'block'
}

window.onload = makeInvisible

setTimeout(makeVisible, 4000)

// contact form

let overlay = document.querySelector("#overlay"),
    sorry = document.querySelector(".sorry-popup"),
    cancel = document.querySelector("#cancel"),
    locked = document.querySelectorAll(".locked-logo");

overlay.addEventListener("click", closeForm)
cancel.addEventListener("click", closeForm)

for (let i = 0; i < locked.length; i++) {
    locked[i].addEventListener("click", openForm)
}

function closeForm(event) {
    if (event) {
        event.preventDefault();
        event.stopImmediatePropagation();
    }
    sorry.id = "non-active"
    overlay.classList.remove('dark-overlay');
}

function openForm(event) {
    if (event) {
        event.preventDefault();
    }
    sorry.id = "active"
    overlay.classList.add("dark-overlay")
}