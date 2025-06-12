var lengthOfLongestSubstring = function(s) {
    let map = new Map();
    let start = 0;
    let maxLength = 0;

    for (let end = 0; end< s.length; end++) {
        let char = s[end]
        console.log("char", char)

        if(map.has(char) && map.get(char) >=start){
            console.log("start", start, map.get(char))
            start = map.get(char) + 1;
        }
        
        map.set(char, end)
        console.log("char index", char, end)
        maxLength = Math.max(maxLength, end - start + 1);
        console.log("maxLength", maxLength, "start", start, "end", end)
    }
    return maxLength;
};

console.log(lengthOfLongestSubstring("abcabcbb"))