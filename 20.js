var isValid = function(s) {
    if (s.length % 2) {
        return false;
    }
    const mp = {')': '(', ']': '[', '}': '{'};
    const st = [];
    for (const c of s) {
        if (!mp.hasOwnProperty(c)) { 
            st.push(c); 
        } else if (st.length === 0 || st.pop() !== mp[c]) { 
            return false; 
        }
    }
    return st.length === 0; 
};

