/* 
EJERCICIO #2: Conversión de grados Farenheit a Celcius
Escribe una función que pregunte al usuario la temperatura en grados Fahrenheit.
Deberás entonces convertir ese valor a grados Celsius e imprimir en consola o en pantalla el resultado. */

function conversionCelsius(gradosF) {
    let resultado = ((gradosF-32)/1.8);
    return resultado;
}

gradosF = prompt("¿Cuál es la Temperatura en Grados Fahrenheit?")
var laConversion = conversionCelsius(gradosF);
alert("La conversion de Fahrenheit A Celsius es: " +laConversion)