// https://leetcode.com/problems/two-sum/

/*
Step-by-step explanation:

Goal: Find two numbers such that nums[i] + nums[j] === target, and return their indices.

We use a hash map to store numbers we've seen so far and their indices.

Iteration 1 (i = 0):
  - nums[i] = 2
  - complement = 9 - 2 = 7
  - map is empty, so 7 is not in the map
  - store 2 with index 0 => map = {2: 0}

Iteration 2 (i = 1):
  - nums[i] = 11
  - complement = 9 - 11 = -2
  - -2 is not in map
  - store 11 with index 1 => map = {2: 0, 11: 1}

Iteration 3 (i = 2):
  - nums[i] = 15
  - complement = 9 - 15 = -6
  - -6 not in map
  - store 15 with index 2 => map = {2: 0, 11: 1, 15: 2}

Iteration 4 (i = 3):
  - nums[i] = 7
  - complement = 9 - 7 = 2
  - 2 **is** in the map at index 0
  - return [0, 3] because nums[0] + nums[3] = 2 + 7 = 9
*/



let nums = [2, 11, 15, 7];
let target = 9;


var twoSum = function (nums, target) {


    let map = {};

    for (let i = 0; i < nums.length; i++) {
        let complement = target - nums[i];
        if (map.hasOwnProperty(complement)) {
            return [map[complement], i];
        }
        map[nums[i]] = i;
    }

    return [];
};

console.log(twoSum(nums, target)); 
