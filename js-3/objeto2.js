//Punto 1 del ejercicio 2

let persona = {
    nombre: "Pedro Perez",
    ciudad: 'Cali',
    profesion: 'Ingeniero',
}

//Punto 2 del ejercicio 2
console.log(persona);

//Punto 3 del ejercicio 2
const presentacion = (objeto) => {
    return 'Me llamo ' + objeto.nombre + 
    ' vivo en ' + objeto.ciudad + 
    ' y soy ' + objeto.profesion;
}

//Punto 4 del ejercicio 2
let mensaje = presentacion(persona);

//Punto 5 del ejercicio 2
console.log(mensaje);

//Punto 6 del ejercicio 2
persona.hobbies = ['Baloncesto', 'Origami', 'Cine'];

//Punto 7 del ejercicio 2
console.log(persona.hobbies)

//Punto 8 del ejercicio 2
for (let i = 0; i < persona.hobbies.length; i++) {
    console.log(persona.hobbies[i]);    
}
