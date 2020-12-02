function lengthOfLongestSubstring(s: string): number {
    const map: Map<string, number> = new Map();
    const n = s.length;
    let rk = -1, ans = 0;
    for (let start = 0, end = 0; end < n; end++) {
        let c: string = s[end]
        if (map.has(c)) {
            start = Math.max(map.get(c), start)
        }
        ans = Math.max(ans, end - start + 1)
        map.set(c, end + 1)
    }
    return ans;
};

console.log(lengthOfLongestSubstring(" "))