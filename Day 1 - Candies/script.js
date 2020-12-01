function candies(children, candy) {
    const maxNumbOfCandiesPerChild = Math.floor(candy / children) * children;

    return maxNumbOfCandiesPerChild;
    
}

console.log(candies(3, 10));
console.log(candies(4, 23));
console.log(candies(8, 77));