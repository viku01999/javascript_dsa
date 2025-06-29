/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    const firstNumsArrayLength = nums1.length;
    const secondNumsArrayLength = nums2.length;
    const totalLength = firstNumsArrayLength + secondNumsArrayLength;
    const isEven = totalLength % 2 === 0;
    
};



// findMedianSortedArrays([1, 3], [2]); // Output: 2.00000
findMedianSortedArrays([1, 2], [3, 4]); // Output: 2.50000