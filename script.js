const inputPrecio = document.querySelector('#inputPrecio')
const inputCupon = document.querySelector('#inputCupon');
const outPut = document.querySelector('#result');
const btn = document.querySelector('#calcular');

// Array con obejtos de Ejemplo para aplicarles metodos

const cupones = []

cupones.push({
    name : 'navidad',
    discount : 10
})
cupones.push({
    name : 'dia_de_muertos',
    discount : 30
})
cupones.push({
    name : 'halloween',
    discount : 50
})
cupones.push({
    name : 'lol',
    discount : 70
})
cupones.push({
    name : 'proto',
    discount : 100
})

// Un addventlisener aplicado al boton para que ejecute una funcion
btn.addEventListener('click',calcularNuevoPrecio)

//Función pricipal que se ejecutara

function calcularNuevoPrecio(){
    
    const precio = Number(inputPrecio.value);
    const cupon = inputCupon.value;

    if (!precio || !cupon) {
        outPut.innerText = 'Por favor rellene los 2 campos'
        return
    }

    let discount;

    // Función Validadora  la cual va a ocpar el metodo filter
    
    function verify(_cupon) {
        return _cupon.name == cupon 
    }

    //  Aplicando  el metodo filter a cupones usando la validacion de la funcion de arriba que devulve TRUE     
    cupondiscount = cupones.find(verify);

    if (cupondiscount) {
        discount = cupondiscount.discount;
    } 
    else {
        outPut.innerText = `El cupón no es válido`
    }
    
    const newPrice = (precio * (100 - discount) / 100);
    outPut.innerText = `El nuevo precio con descuento es de  ${newPrice}`
   
    }

    
    

    