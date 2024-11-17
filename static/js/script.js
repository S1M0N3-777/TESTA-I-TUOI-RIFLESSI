function random(min, max) {
    let n = Math.random() * (max - min) + min
    n = parseInt(n)
    console.log(n)
    return n
}

let button = document.querySelector("#button")
let circle1 = document.querySelector("#circle1")
let circle2 = document.querySelector("#circle2")
let circle3 = document.querySelector("#circle3")
let check = true
let inner = document.querySelector("#inner-text")
let delay = random(1000,3000)
let now

button.addEventListener("click", function(){
    now = Date.now()
 inner.innerHTML = "Attenti il semaforo verde, stai attento!"
 console.log(now)

})