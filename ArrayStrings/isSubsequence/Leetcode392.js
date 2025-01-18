
function isSubseq(s,t){
    let p1=0
    let p2=0
    while(p1<s.length && p2<t.length){
        if(s[p1]===t[p2]){
            p1++
        }
        p2++
    }
    return p1===s.length
}

// Example 1:

// Input: s = "abc", t = "ahbgdc"
// Output: true
// Example 2:

// Input: s = "axc", t = "ahbgdc"
// Output: false
