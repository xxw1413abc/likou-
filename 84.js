var largestRectangleArea = function(heights) {
    const n = heights.length;
    const left = Array(n).fill(-1);
    const st = [];
    for (let i = 0; i < n; i++) {
        const h = heights[i];
        while (st.length && h <= heights[st[st.length - 1]]) {
            st.pop();
        }
        if (st.length) {
            left[i] = st[st.length - 1];
        }
        st.push(i);
    }

    const right = Array(n).fill(n);
    st.length = 0;
    for (let i = n - 1; i >= 0; i--) {
        const h = heights[i];
        while (st.length && h <= heights[st[st.length - 1]]) {
            st.pop();
        }
        if (st.length) {
            right[i] = st[st.length - 1];
        }
        st.push(i);
    }

    let ans = 0;
    for (let i = 0; i < n; i++) {
        ans = Math.max(ans, heights[i] * (right[i] - left[i] - 1));
    }
    return ans;
};
