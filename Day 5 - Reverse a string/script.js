function reverseAString(str) {
    let reversedStr;
    let helperArr = [];

    for (let i = str.length - 1; i >= 0; i--) {
        helperArr.push(str[i]);
    }
    reversedStr = helperArr.join('');

    return reversedStr;
}

console.log(reverseAString('hello'));
console.log(reverseAString('world'));
console.log(reverseAString('javascript'));