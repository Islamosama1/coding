
// function findMissingNumber(nums) {
//     const n = nums.length;
//     const expectedSum = (n * (n + 1)) / 2;  // Sum of numbers from 0 to n
//     const actualSum = nums.reduce((acc, num) => acc + num, 0);  // Sum of elements in the array
//     return expectedSum - actualSum;  // The difference is the missing number
// }

// // Example usage:
// const nums = [3, 2, 1];
// const missingNumber = findMissingNumber(nums);
// console.log(missingNumber);  // Output: 2

/// ==========================================================================
// function twoSum(nums, target) {
//     const numIndices = {}; // Create an object to store numbers and their indices

//     for (let i = 0; i < nums.length; i++) {
//         const complement = target - nums[i]; // Calculate the complement of the current number

//         // Check if the complement is already in the object
//         if (numIndices.hasOwnProperty(complement)) {
//             // If it is, return the indices of the complement and the current number
//             return [numIndices[complement], i];
//         }

//         // Otherwise, store the index of the current number in the object
//         numIndices[nums[i]] = i;
//     }

//     // If no solution is found, return an empty array or throw an error
//     return [];
// }

// // Example usage:
// const nums = [2, 7, 11, 15];
// const target = 13;
// const result = twoSum(nums, target);
// console.log(result); // Output: [0, 1]

//=================================================================================