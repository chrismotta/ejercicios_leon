// CONSIGNA: Crear una funcion palabraMasLarga(frase) que cuando se le pase una frase devuelva la palabra mas larga de dicha frase
// AYUDA: Seria util convertir la frase en un array de palabras, para luego recorrer ese array de alguna manera
// 2DO ENFOQUE: Otra opcion a recorrer el array podria ser ordenarlo
// TEST: probar la funcion con el ejemplo dado

function palabraMasLarga(frase) {
  // let array_frase_length = [];
  // let array_frase_length_words = [];

  let array_frase = frase.split(" ");

  // array_frase_length.unshift(`${array_frase[0].length}`);

  let acumulador = "";

  for (let i = 0; i < array_frase.length; i++) {
    /*  console.log(`${array_frase[i]}/${array_frase[i].length}`); */

    // array_frase_length_words.push(array_frase[i].length);

    /* array_frase_length.push(array_frase[i].length);  */

    if (array_frase[i].length > acumulador.length) {
      acumulador = array_frase[i];

      // array_frase_length.unshift(array_frase[i].length);
      // array_frase_length.pop();
    }
  }
  // let world_length = array_frase_length_words.indexOf(array_frase_length[0]);

  // console.log(array_frase_length);
  // return array_frase[world_length];
  return acumulador;
}

console.log(
  "La palabra mas larga es:",
  palabraMasLarga("El tractorcito rojo que silbo y bufo")
); // deberia imprimir "tractorcito"
console.log(palabraMasLarga("Messi es el mejor jugador de la argentina"));
console.log(palabraMasLarga("mi mama me mima"));
console.log(palabraMasLarga("Me quiero matar"));
console.log(palabraMasLarga("oso pequeño"));
/* console.log(array_frase_length);
console.log(array_frase_length_words); */
