const sum = (array) => {

    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        
        const element = array[i];
        sum += element;
    }

    return sum;
}

console.log(sum([1, 2, 3])) // 6
console.log(sum([10, 8, 12, 5])) // 35
console.log(sum([])) // 0


