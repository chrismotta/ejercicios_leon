// CONSIGNA: devolver el "factorial" del numero pasado como parametro
// EJEMPLO: el factorial de 4 es: 4 * 3 * 2 * 1 = 24

function mulArray(total, value) {
  return total * value;
}

function factorial(numero) {
    var array_multiplicaciones = [];
  for(i=numero; i>=1; i--){
   /*  console.log(i); */
    array_multiplicaciones.push(i);
  }
   /*  console.log("array de multiplicaciones " +array_multiplicaciones); */  
    var multiplicacion = array_multiplicaciones.reduce(mulArray);
    /* console.log("resultado " + multiplicacion); */
  return `El factorial de ${numero} es: ${multiplicacion}`;
}

console.log(factorial(4)); // deberia imprimir 24
console.log(factorial(8)); /* console.log(factorial(8)); */ // deberia imprimir 40320

console.log(factorial(9));


