function extractEachKth(nums, index) {
    const extractedArr = nums.filter(num => num % index);

    return extractedArr;
}

console.log(extractEachKth([1, 2, 3, 4, 5, 6], 2));
console.log(extractEachKth([1, 2, 3, 4, 5, 6, 7, 8, 9], 3));
console.log(extractEachKth([21, 33, 46, 51, 64, 77, 88], 4));