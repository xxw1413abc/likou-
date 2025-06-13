var maxSlidingWindow = function(nums, k) {
    const ans = [];
    const q = [];
    for (let i = 0; i < nums.length; i++) {
        while (q.length && nums[q[q.length - 1]] <= nums[i]) {
            q.pop();
        }
        q.push(i); 
        if (i - q[0] >= k) { 
            q.shift(); 的
        }
        if (i >= k - 1) {
            ans.push(nums[q[0]]);
        }
    }
    return ans;
};

