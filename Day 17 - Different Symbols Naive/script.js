function differentSymbolsNaive(str) {
    // ======================================================
    // SET
    // ======================================================    
    let uniqueSymbols = new Set();
    
    str.split('').forEach(char => uniqueSymbols.add(char));
    
    return uniqueSymbols.size;
    
    // ======================================================
    // FOR LOOP
    // ======================================================    
    
    // let uniqueSymbols = [];
    
    // for (let i = 0; i < str.length; i++) {
    //     if (!uniqueSymbols.includes(str[i])) {
    //         uniqueSymbols.push(str[i]);
    //     }
    // }
    // return uniqueSymbols.length;
    
    // ======================================================
    // WHILE LOOP
    // ======================================================    
    
    // let uniqueSymbols = [];
    // let index = 0;
    
    // while (!uniqueSymbols.includes(str[index])) {
    //     uniqueSymbols.push(str[index]);
    //     index++;
    // }
    // return uniqueSymbols.length;
}

console.log(differentSymbolsNaive('cabca'));
console.log(differentSymbolsNaive('aaabbaaabbbcccdef'));