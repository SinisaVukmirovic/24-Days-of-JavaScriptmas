function extractMatrixColumn(matrix, column) {
    const result = [];
    
    matrix.forEach(arr => {
        result.push(arr[column]);
    });
    return result;
}

console.log(extractMatrixColumn([[1, 2, 3], [4, 5, 6], [7, 8, 9]], 2));
console.log(extractMatrixColumn([['A', 'B', 'C'], ['D', 'E', 'F'], ['G', 'H', 'j']], 1));