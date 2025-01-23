function longestCommonPrefix(s){
    if(!s.length) return ''

    let prefix=s[0]

    for(i=1; i<s.length; i++){
        while(!s[i].startsWith(prefix)){
            if(prefix.length)
            prefix= prefix.slice(0,-1)
        }
    }
    return prefix
}

console.log(longestCommonPrefix(["fl","flow","flight"]))
// Leetcode14
// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.