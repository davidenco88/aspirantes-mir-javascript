const maxIndex = (array) => {

    let numMax;
    let indexMax;

    if (array.length === 0) return -1;
    
    for (let i = 0; i < array.length; i++) {
        
        const element = array[i];
        
        if (i === 0) {
            numMax = element;
            indexMax = i;
        } else if (element > numMax) { 
            numMax = element;
            indexMax = i;
        }     
    }

    return indexMax;
}

console.log(maxIndex([1, 3, 2])); // 1
console.log(maxIndex([10, 9, 8, 7, 6, 5, 4])); // 0
console.log(maxIndex([])); // -1