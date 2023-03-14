const join = (array) => {

    let stringJoin = '';
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        stringJoin += element + ' ';     
    }

    return stringJoin;
}

console.log(join(["Hola", "Mundo"])) // "Hola Mundo"
console.log(join(["Make", "It", "Real"])) // "Make It Real"
console.log(join([])) // ""