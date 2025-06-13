var topKFrequent = function(nums, k) {
    const cnt = new Map();
    for (const x of nums) {
        cnt.set(x, (cnt.get(x) ?? 0) + 1);
    }
    const maxCnt = Math.max(...cnt.values());

    const buckets = Array.from({ length: maxCnt + 1 }, () => []);
    for (const [x, c] of cnt.entries()) {
        buckets[c].push(x);
    }

    const ans = [];
    for (let i = maxCnt; i >= 0 && ans.length < k; i--) {
        ans.push(...buckets[i]);
    }
    return ans;
};

