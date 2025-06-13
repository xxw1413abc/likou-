var findMin = function(nums) {
    let left = -1, right = nums.length - 1; 
    while (left + 1 < right) { 
        const mid = Math.floor((left + right) / 2);
        if (nums[mid] < nums[nums.length - 1]) {
            right = mid;
        } else {
            left = mid;
        }
    }
    return right;
};

var lowerBound = function(nums, left, right, target) {
    while (left + 1 < right) { 
        const mid = Math.floor((left + right) / 2);
        if (nums[mid] >= target) {
            right = mid; 
        } else {
            left = mid;
        }
    }
    return nums[right] === target ? right : -1;
};

var search = function(nums, target) {
    const i = findMin(nums);
    if (target > nums[nums.length - 1]) { 
        return lowerBound(nums, -1, i, target);
    }
    return lowerBound(nums, i - 1, nums.length, target); 
};

