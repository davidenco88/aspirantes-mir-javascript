let pedro = {
  nombre: "Pedro Perez",
  edad: 30,
  activo: true,
  hobbies: ['programar', 'squash', 'piano']
}

//Punto 2 del ejercicio 1
console.log(pedro.edad);

//Punto 3 del ejercicio 1
pedro.estatura = 1.8;

//Punto 4 del ejercicio 1
delete pedro.activo;

//Punto 5 del ejercicio 1
for (let llave in pedro) {
    if (pedro.hasOwnProperty(llave)) {
        console.log(llave + ': ' + pedro[llave]);
    }
}

//Punto 6 del ejercicio 1
pedro.saluda = function() {
    return 'Hola me llamo ' + this.nombre;
}

//Punto 7 del ejercicio 1
console.log(pedro.saluda());
