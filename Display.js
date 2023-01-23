class Display{

    constructor(displayValorActual,displayValorAnterior){

       this.displayValorActual = displayValorActual;
       this.displayValorAnterior = displayValorAnterior;
       this.calculador = new Calculadora();
       this.tipoDeOperacion = undefined;
       this.valorActual = "";
       this.valorAnterior = displayValorAnterior.textContent;
       this.operadores = {
          sumar:"+",
          restar:"-",
          multiplicar:"*",
          dividir:"/"
       }
    }

    agregarNumeros(numero){
        if (this.valorActual.length >= 9  ) return;
       if( this.valorAnterior.length === 1 && this.valorAnterior.includes("0") && numero==="0" && this.valorActual!==".")return;
       if(numero ==="." && this.valorActual.includes(".") )return  ;
       this.valorActual = this.valorActual.toString() + numero.toString();
       
        
       
       if(this.tipoDeOperacion === "igual"||this.valorAnterior.toString()==="0")
       this.valorAnterior=""
       this.imprimirValores();
    }

    imprimirValores(){
        
        this.displayValorAnterior.textContent = `${this.valorAnterior } ${this.operadores[this.tipoDeOperacion]
         || ""} ${this.valorActual ||""}
        `;    
    }
    
    delete(){
        this.valorActual = this.valorActual.toString().slice(0,-1);
        this.imprimirValores();
    }

    reset(){
        this.valorActual = "";
        this.valorAnterior = 0;
        this.tipoDeOperacion = undefined;
        this.imprimirValores();
    }

    calcular(){
        const valorActual = parseFloat(this.valorActual);
        const valorAnterior = parseFloat(this.valorAnterior);
        if(isNaN(valorActual) || isNaN(valorAnterior)) return;
        this.valorActual = this.calculador[this.tipoDeOperacion](valorActual,valorAnterior)
      
    }
    operar(tipo){

        this.tipoDeOperacion !== "igual" && this.calcular(); 
        this.valorAnterior = this.valorActual || this.valorAnterior;
        this.tipoDeOperacion = tipo;
        this.valorActual = this.valorActual;
        this.valorActual=""
        this.imprimirValores();
    }

}