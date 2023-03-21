//Punto 1 del ejercicio 3
let receta = {}

//Punto 2 del ejercicio 3
receta.nombre = 'Sandwich';

//Punto 3 del ejercicio 3
receta.ingredientes = [];

//Punto 4 del ejercicio 3
receta.ingredientes[0] = {
    nombre: 'Pan',
    cantidad: 2,
}

//Punto 5 del ejercicio 3
receta.ingredientes[1] = {
    nombre: 'Queso',
    cantidad: 1,
}

//Punto 6 del ejercicio 3
console.log(receta.ingredientes[0].nombre);

//Punto 6 del ejercicio 3
let sum = 0;
for (let i = 0; i < receta.ingredientes.length; i++) {
        sum += receta.ingredientes[i].cantidad;
}

console.log(sum);
