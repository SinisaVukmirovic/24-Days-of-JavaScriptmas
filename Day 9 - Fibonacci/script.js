function sumOddFibonacciNumbers(num) {
    let sumOdds = 0;
    let previous = 0;
    let current = 1;
    
    while(current <= num) {
        if(current % 2 === 1) {
            sumOdds += current;
        }
        
        const nextValue = current + previous;
        previous = current;
        current = nextValue;
    }

    return sumOdds;
}

console.log(sumOddFibonacciNumbers(10));
console.log(sumOddFibonacciNumbers(50));
console.log(sumOddFibonacciNumbers(100));