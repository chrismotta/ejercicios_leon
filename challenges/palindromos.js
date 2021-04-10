// CONSIGNA: crear una funcion que devuelve true si el string (frase o palabra)
// es un palíndromo válido y false si no lo es
// AYUDA: seria util de alguna forma "invertir" el string recibido

function esPalindromo(str) {
  var string = str.toLowerCase();
  var array_str = string.split("");
  var array_str_reverse = string.split("");
  for(g=0; g<array_str.length; g++){
    var espacio = " ";
    var array_espacios = array_str;
    var comprobacion_espacios = espacio.localeCompare(array_espacios[g]);
    if(comprobacion_espacios == 0){
      array_str.splice(g, 1);
      array_str_reverse.splice(g, 1);
    }
  }
  array_str_reverse.reverse();
  for(i=0; i<array_str.length; i++){
    var str1 = array_str[i];
    var str2 = array_str_reverse[i];
    var comparacion = str1.localeCompare(str2);
    if(comparacion == 1 || comparacion == -1){
    break
    } 
  }
  if(comparacion == 0){
    return "Es un palíndromo";
  }
  else if(comparacion == comparacion == 1 || comparacion == -1){
    return "No es un palíndromo";
  }
}

 console.log(esPalindromo("Reconocer"));  // Deberia devolver TRUE
 console.log(esPalindromo("Cabezota"));   // Deberia devolver FALSE
  console.log(esPalindromo("Dabale arroz a la zorra el Abad"));   // Deberia devolver TRUE
 console.log(esPalindromo("Dabale arroz a la zorra el Cabezota"));  // Deberia devolver FALSE
  console.log(esPalindromo("Ali tomo tila")); 
  console.log(esPalindromo("Atar a la rata"));
/* var str1 = "a";

var str2 = "a";

var n = str1.localeCompare(str2);
console.log(n);  */
