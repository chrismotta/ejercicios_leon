// CONSIGNA: devolver el "factorial" del numero pasado como parametro
// EJEMPLO: el factorial de 4 es: 4 * 3 * 2 * 1 = 24

function mulArray(total, value) {
  return total * value;
}

function factorial(numero) {
  // var array_multiplicaciones = [];

  let acumulador = 1;

  for (i = numero; i >= 2; i--) {
    acumulador = acumulador * i;

    /*  console.log(i); */
    // array_multiplicaciones.push(i);
  }

  /*  console.log("array de multiplicaciones " +array_multiplicaciones); */
  // var multiplicacion = array_multiplicaciones.reduce(mulArray);

  /* console.log("resultado " + multiplicacion); */
  // return multiplicacion;

  return acumulador;
}

console.log("El factorial de 4 es:", factorial(4)); // deberia imprimir 24
console.log(
  "El factorial de 8 es:",
  factorial(8)
); /* console.log(factorial(8)); */ // deberia imprimir 40320
console.log("El factorial de 9 es:", factorial(9));
