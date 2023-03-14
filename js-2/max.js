const max = (array) => {

    let numMax;
    
    for (let i = 0; i < array.length; i++) {
        
        const element = array[i];
        
        if (i === 0) {
            numMax = element;
        } else if (element > numMax) { 
            numMax = element;
        }     
    }

    return numMax;
}

console.log(max([1, 3, 2])) // 3
console.log(max([10, 9, 8, 7, 6, 5, 4])) // 10
console.log(max([])) // undefined