function candies(children, candy) {
    const maxNumbOfCandiesPerChild = Math.floor(candy / children) * children;

    return maxNumbOfCandiesPerChild;
    
}

console.log('Total number of candies eaten: ', candies(3, 10));
console.log('Total number of candies eaten: ', candies(4, 23));
console.log('Total number of candies eaten: ', candies(8, 77));