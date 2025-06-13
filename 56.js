var merge = function(intervals) {
    intervals.sort((p, q) => p[0] - q[0]); 
    const ans = [];
    for (const p of intervals) {
        const m = ans.length;
        if (m && p[0] <= ans[m - 1][1]) { 
            ans[m - 1][1] = Math.max(ans[m - 1][1], p[1]);
        } else {
            ans.push(p); 
        }
    }
    return ans;
};
