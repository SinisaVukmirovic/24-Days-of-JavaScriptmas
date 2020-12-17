function insertDashes(arr) {
    let arrays = arr.split(' ');
    let dashedArr = [];
    
    arrays.forEach(str => {
        dashedArr.push(str.split('').join('-'));
    });
    dashedArr = dashedArr.join(' ');
    
    return dashedArr;
}

console.log(insertDashes('aba caba'));
console.log(insertDashes('dashes everywhere'));