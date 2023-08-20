const firstDiv = document.querySelector('#firstDiv')

const secondDiv  = document.querySelectorAll(".firstDiv")
function alertWelcome(textContent){
    alert("welcome")
}


secondDiv.forEach(div=>{
    div.addEventListener('click' , alertWelcome)
})
// firstDiv.addEventListener('click' , alertWelcome)