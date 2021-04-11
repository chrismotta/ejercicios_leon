// CONSIGNA: crear una funcion que devuelve true si el string (frase o palabra)
// es un palíndromo válido y false si no lo es
// AYUDA: seria util de alguna forma "invertir" el string recibido

function esPalindromo(str) {
  // normalizacion
  let strLower = str.toLowerCase();
  let strLowerNoSpace = strLower.replace(/\s/g, "");
  let array_str = strLowerNoSpace.split("");
  let array_str_reverse = strLowerNoSpace.split("");

  // borrando espacios de ambos arrays
  // for (g = 0; g < array_str.length; g++) {
  //   let espacio = " ";
  //   let array_espacios = array_str;
  //   let comprobacion_espacios = espacio.localeCompare(array_espacios[g]);
  //   if (comprobacion_espacios == 0) {
  //     array_str.splice(g, 1);
  //     array_str_reverse.splice(g, 1);
  //   }
  // }

  // dando vuelta el segundo array
  array_str_reverse.reverse();
  let strReverse = array_str_reverse.join("");

  return strReverse === strLowerNoSpace;

  //
  // let comparacion = true;
  for (i = 0; i < array_str.length; i++) {
    let str1 = array_str[i];
    let str2 = array_str_reverse[i];

    if (str1 !== str2) {
      // comparacion = false;
      // break;
      return false;
    }

    // var comparacion = str1.localeCompare(str2);
    // if (comparacion == 1 || comparacion == -1) {
    //   break;
    // }
  }

  // if (comparacion) {
  //   return true; //"Es un palíndromo";
  // } else {
  //   return false; //"No es un palíndromo";
  // }
  // return comparacion;
  return true;
}

console.log("Reconocer es palindromo?", esPalindromo("Reconocer")); // Deberia devolver TRUE
console.log("Cabezota es palindromo?", esPalindromo("Cabezota")); // Deberia devolver FALSE
console.log(
  "Dabale arroz a la zorra el Abad. es palindromo?",
  esPalindromo("Dabale arroz a la zorra el Abad")
); // Deberia devolver TRUE
console.log(
  "Dabale arroz a la zorra el Cabezota. es palindromo?",
  esPalindromo("Dabale arroz a la zorra el Cabezota")
); // Deberia devolver FALSE
console.log("Ali tomo tila. es palindromo?", esPalindromo("Ali tomo tila"));
console.log("Atar a la rata. es palindromo?", esPalindromo("Atar a la rata"));
console.log(
  "Atar a la rata. es palindromo abc?",
  esPalindromo("Atar a la rata abc")
);

/* var str1 = "a";

var str2 = "a";

var n = str1.localeCompare(str2);
console.log(n);  */
