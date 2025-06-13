var reorganizeString = function(s) {
    const n = s.length;
    const count = new Map();
    for (const ch of s) {
        count.set(ch, (count.get(ch) ?? 0) + 1);
    }

    const a = Array.from(count.entries());
    a.sort((p, q) => q[1] - p[1]);
    const m = a[0][1];
    if (m > n - m + 1) {
        return "";
    }

    const ans = Array(n);
    let i = 0;
    for (let [ch, cnt] of a) {
        while (cnt--) {
            ans[i] = ch;
            i += 2;
            if (i >= n) {
                i = 1;
            }
        }
    }
    return ans.join('');
}

