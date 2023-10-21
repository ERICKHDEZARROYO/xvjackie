var Izquierda = document.getElementById("Izquierda")
window.addEventListener("scroll",function(){
    Izquierda.style.left =-window.pageYOffset + "px"
})

var Derecha = document.getElementById("Derecha")
window.addEventListener("scroll",function(){
    Derecha.style.left = window.pageYOffset + "px"
})
