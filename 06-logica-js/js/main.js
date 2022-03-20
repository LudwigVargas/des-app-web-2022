/* 
EJERCICIO #1: ¿Hiciste la tarea?
Escribe una función que pregunte al usuario si hizo la tarea o no. Asumiremos que:
 - En caso afirmativo el usuario responderá si
 - En caso contrario responderá no
Si el usuario responde si, se escribirá en la consola o en pantalla "¡Bien hecho!".
Si el usuario responde no, se escribirá en la consola o en pantalla "No te rindas, ¡empieza ya mismo!"  */

hizoTarea = prompt("¿Hisciste La Tarea?")

if (hizoTarea === "Si") {
    alert("¡Bien Hecho!");
}   else if (hizoTarea == "No") {
    alert("No te rindas, ¡Empieza ya mismo!");
} else {
    alert("Responde con un 'Si' o un 'No'")
}