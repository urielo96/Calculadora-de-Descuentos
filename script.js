const number = document.querySelector('#inputNumber'); 
const salida = document.querySelector('#result');
const finalResult = document.querySelector('#finalResult');
const btnNumber = document.querySelector('#btnNumber')
const btnCalc = document.querySelector('#btnCalc')


const numbers = []

btnNumber.addEventListener('click',addNumber);


function addNumber() {
    numbers.push(number.value)
    salida.innerText = `Los numeros son ${numbers}`
}

btnCalc.addEventListener('click',calcAverage);

function calcAverage() {
    
    let acumulator = 0 ;

    for (let i = 0; i < numbers.length; i++) {
         let numberInArray = numbers[i];
        
        acumulator = acumulator + Number(numberInArray);
        
    }

    let average = acumulator / numbers.length 
    finalResult.innerText = ` El promedio es ${average}`
    
}
    

    
 