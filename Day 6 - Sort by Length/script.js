function sortByLength(strs) {
    let sortedArr = strs.sort((a, b) => {
        return a.length - b.length;
    });
    
    return sortedArr;
}

console.log(sortByLength(['abc', 'dd', '', 'defgh', 'c']));