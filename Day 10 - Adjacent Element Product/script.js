function adjacentElementsProduct(nums) {
    let maxPairProduct = 0;

    for (let i = 0; i < nums.length - 1; i++) {
        let currentPairProduct = nums[i] * nums[i + 1];

        if (maxPairProduct < currentPairProduct) {
            maxPairProduct = currentPairProduct;
        }
    }
    return maxPairProduct;
}   

console.log(adjacentElementsProduct([1, 4, 7, 3, 5]));
console.log(adjacentElementsProduct([3, 2, 8, 4, 7]));
console.log(adjacentElementsProduct([7, 4, 2, 9, 5]));