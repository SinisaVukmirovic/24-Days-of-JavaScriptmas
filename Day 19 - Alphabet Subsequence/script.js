function alphabetSubsequence(str) {
    const uniqueChars = new Set(str);
    
    for (let i = 0; i < str.length; i++) {
        if (str.charCodeAt(i) > str.charCodeAt(i + 1) || str.length > uniqueChars.size) {
            return false;
        }
        return true;
    }
}

console.log(alphabetSubsequence('abccdef'));
console.log(alphabetSubsequence('efg'));
console.log(alphabetSubsequence('opqrstuv'));
console.log(alphabetSubsequence('oqssv'));