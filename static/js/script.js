function random(min, max) {
    let n = Math.random() * (max - min) + min
    n = parseInt(n)
    console.log(n)
    return n
    }

    function delay(){
        // Non vengono cambiati i colori, da capire perchè
        
        circle1.classList.add("green")
        circle1.classList.remove("same1")
        circle2.classList.add("green")
        circle2.classList.remove("same2")
        circle3.classList.add("green")
        circle3.classList.remove("same3")      
        check = true
        now = Date.now()
        
    }

    function reset(){
        circle1.classList.add("same1")
        circle1.classList.remove("green")
        circle2.classList.add("same2")
        circle2.classList.remove("green")
        circle3.classList.add("same3")
        circle3.classList.remove("green")  
        check = false 
        button.disabled = false
        
    }

    let button = document.querySelector("#button")
    let circle1 = document.querySelector("#circle1")
    let circle2 = document.querySelector("#circle2")
    let circle3 = document.querySelector("#circle3")
    let check = false
    let inner = document.querySelector("#inner-text")
    let now
    let reflex
    let bestScore = 100000000000000000
    let upadteScore = document.querySelector("#bestscore")
    button.addEventListener("click", function () {
    if (check === false) {
        reset()
        let rnd = random(1000, 3000)
        inner.innerHTML = "Attendi il semaforo verde, stai attento!"
        setTimeout(delay, rnd)
        
    } else {
        reflex = (Date.now() - now)/1000
        console.log(reflex)
        inner.innerHTML = "Il tuo tempo di reazione è: " + reflex + "s"
        if(reflex<bestScore){
             bestScore  = reflex
            upadteScore.innerHTML = "Tempo migliore: " + bestScore + "s"
        }else{
            upadteScore.innerHTML = "Tempo migliore: " + bestScore + "s"
        }
        button.disabled = true
        setTimeout(reset, 3000)
    }
})