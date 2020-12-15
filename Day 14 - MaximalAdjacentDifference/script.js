function maximalAdjacentDifference(nums) {    
    let maxDifference = Math.abs(nums[0] - nums[1]);
    
    for (let i = 1; i < nums.length - 1; i++) {
        let currentPair = Math.abs(nums[i] - nums[i + 1]);
        
        if (maxDifference < currentPair) {
            maxDifference = currentPair;
        }
    }
    return maxDifference;
}

console.log(maximalAdjacentDifference([3, -4, 8, 1]));
console.log(maximalAdjacentDifference([22, -33, 11, -55]));
console.log(maximalAdjacentDifference([6, 2, -5, 9]));