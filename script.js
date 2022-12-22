const precio = document.querySelector('.pro')
const descuento = document.querySelector('.desc')
const cuadroResultado = document.querySelector('.resultado') 
const button = document.querySelector('#botonCalcular')


button.addEventListener("click",calcDescuento);

function calcDescuento(event) {
    event.preventDefault()
    
    let precioPagar = ((precio.value * (100 - descuento.value))/100)
    cuadroResultado.innerHTML = `El precio con descuento es de ${descuento.value} % de descuento es : ${precioPagar}`
}





