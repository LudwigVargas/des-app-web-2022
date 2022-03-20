/* 
EJERCICIO #1: ¿Hiciste la tarea?
Escribe una función que pregunte al usuario si hizo la tarea o no. Asumiremos que:
 - En caso afirmativo el usuario responderá si
 - En caso contrario responderá no
Si el usuario responde si, se escribirá en la consola o en pantalla "¡Bien hecho!".
Si el usuario responde no, se escribirá en la consola o en pantalla "No te rindas, ¡empieza ya mismo!"  */

N1 = prompt("Ingresa el primer Número: ")
N2 = prompt("Ingresa el segundo Número: ")
N3 = prompt("Ingresa el Tercer Número: ")


if (N1 > N2 && N3) {
    alert("El número mayor es: "+N1);
}   else if (N2 > N1 && N3) {
    alert("El número mayor es: "+N2);
} else {
    alert("El número mayor es: "+N3)
}