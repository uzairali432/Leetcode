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

    
    

Input: nums = [1, 2, 3, 4]
Output: [24, 12, 8, 6]

var productExceptSelf = function(nums) {
    const result = new Array(nums.length).fill(1);

    // Prefix products
    let prefix = 1;
    for (let i = 0; i < nums.length; i++) {
        result[i] = prefix;
        prefix *= nums[i];
    }

    let suffix = 1;
    for (let i = nums.length - 1; i >= 0; i--) {
        result[i] *= suffix;
        suffix *= nums[i];
    }

    return result;
};

console.log(productExceptSelf([1, 2, 3, 4])); 


Input: s = "cbbd"
Output: "bb"


var longestPalindrome = function(s) {
    if (s.length < 2) return s;

    let start = 0;
    let maxLength = 1;

    const expandFromCenter = (left, right) => {
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            left--;
            right++;
        }
        return right - left - 1;
    };

    for (let i = 0; i < s.length; i++) {
        let len1 = expandFromCenter(i, i);   
        let len2 = expandFromCenter(i, i + 1); 
        let len = Math.max(len1, len2);

        if (len > maxLength) {
            maxLength = len;
            start = i - Math.floor((len - 1) / 2);
        }
    }

    return s.substring(start, start + maxLength);
};

console.log(longestPalindrome("babad")); 

