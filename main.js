const displayValorActual = document.getElementById('displayValorActual');
const displayValorAnterior = document.getElementById('displayValorAnterior');
const buttonNumber = document.querySelectorAll('.numero');
const operadorButtons = document.querySelectorAll('.operador');

const display = new Display(displayValorActual,displayValorAnterior);

buttonNumber.forEach((button)=>{
   button.addEventListener("click",()=>{
     display.agregarNumeros(button.innerHTML);
   });
});


operadorButtons.forEach((butt)=>{
    butt.addEventListener("click",()=>display.operar(butt.value));        
});