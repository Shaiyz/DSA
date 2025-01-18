
function MergeStringsAlternately(word1, word2){
    let i =0
    result=''
    while(i<word1.length && i<word2.length){
        result+=word1[i]+word2[i]
        i++
        j++
    }
    return [result,word1.slice(i),word2.slice(i)].join('')
}

console.log(MergeStringsAlternately("abceol","pqrio"))
// Explanation: The merged string will be merged as so:
// word1:  a   b   c
// word2:    p   q   r
// merged: a p b q c r

// word1:  a   b 
// word2:    p   q   r   s
// merged: a p b q   r   s
