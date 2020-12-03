function chunkyMonkey(values, size) {
    let result = [];
    const firstArray = values.slice(0, size);
    const secondArray = values.slice(size, size + size);

    result.push(firstArray, secondArray);

    return result;
}

console.log(chunkyMonkey(['a', 'b', 'c', 'd'], 2));
console.log(chunkyMonkey([1, 2, 3, 4, 5, 6], 3));