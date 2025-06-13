var firstMissingPositive = function(nums) {
    const n = nums.length;
    for (let i = 0; i < n; i++) {
        while (1 <= nums[i] && nums[i] <= n && nums[i] !== nums[nums[i] - 1]) {
            const j = nums[i] - 1; 
            [nums[i], nums[j]] = [nums[j], nums[i]];
        }
    }

    for (let i = 0; i < n; i++) {
        if (nums[i] !== i + 1) {
            return i + 1;
        }
    }

    return n + 1;
};
