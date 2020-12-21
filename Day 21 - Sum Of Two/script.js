function sumOfTwo(nums1, nums2, value) {    
    for (let num of nums1) {
        let searchedValue = value - num;
        
        if (nums2.includes(searchedValue)) {
            return true;
        }
    }
    return false;
}

console.log(sumOfTwo([1, 2, 3], [10, 20, 30, 40], 42));
console.log(sumOfTwo([1, 2, 3, 4, 5], [100, 200], 206));
console.log(sumOfTwo([3, 5, 7], [13, 15, 17], 16));