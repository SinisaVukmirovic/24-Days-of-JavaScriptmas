function countVowelConsonant(str) {
    let strToArr = str.split('');
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let total = 0;

    strToArr.forEach(elem => {
        if (vowels.includes(elem)) {
            total += 1;
        }
        else {
            total += 2; 
        }
    });
    
    return total;
}

console.log(countVowelConsonant('abc'));
console.log(countVowelConsonant('abcdef'));
console.log(countVowelConsonant('woncwoienseun'));