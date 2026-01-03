Input: nums = [2, 7, 11, 15], target = 9
Output: [0, 1]

 var twosum = function(nums, target) {
    const nummap = new Map();

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];

        if (nummap.has(complement)) {
            return [nummap.get(complement), i];
        }

        nummap.set(nums[i], i);
    }

    return [];
};

console.log(twosum([2, 7, 11, 15], 9));


Input: s = "abcabcbb"
Output: 3
Explanation: "abc" 
var lengthOfLongestSubstring = function(s) {
    let charset = new Set();
    let left = 0;
    let maxLength = 0;

    for (let right = 0; right < s.length; right++) {
        while (charset.has(s[right])) {
            charset.delete(s[left]);
            left++;
        }

        charset.add(s[right]);
        maxLength = Math.max(maxLength, right - left + 1);
    }

    return maxLength;
};

console.log(lengthOfLongestSubstring("abcabcbb")); 

    
    

