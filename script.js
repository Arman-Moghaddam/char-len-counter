let counter = document.querySelector(".counter")
let user_input = document.querySelector(".user-input")

user_input.addEventListener("keypress", function(event){
    if (+counter.innerHTML != 0){
        console.log(event)
        counter.innerHTML = +counter.innerHTML - 1
    }
})
user_input.addEventListener("keydown", function(event){
    if (event.code == "Backspace" && user_input.value){
        counter.innerHTML = +counter.innerHTML + 1
    }
})