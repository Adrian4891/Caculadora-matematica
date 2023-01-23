class Calculadora{

   sumar(numA,numB){

      let num = numA + numB;

      if(num > 999999999999){
         return num.toExponential(9);
      }
      else return Math.floor(num);
   }

   restar(numA,numB){

      let num = Math.floor(numB - numA);

      if(num > 999999999999){
         return num.toExponential(9);
      }
      else return Math.floor(num);
   }

   multiplicar(numA,numB){

      let num = Math.floor(numA * numB);

      if (num > 999999999999) {
         return num.toExponential(9);
      }
      else return Math.floor(num);
   }

   dividir(numA,numB){

      let num = Math.floor(numB / numA);

      if(num > 999999999999){
         return num.toExponential(9);
      }
      else return Math.floor(num);
   }
}