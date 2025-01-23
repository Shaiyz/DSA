//Leetcode771
function containsDuplicate(jewels,stones){
    const set = new Set(jewels.split(""))
    let count=0
    for(i of stones){
        if(set.has(i)){
            count+=1
        }
    }
    return count
}
console.log(containsDuplicate('aA','aAAbbbb'))
// Input: jewels = "aA", stones = "aAAbbbb"
// Output: 3
// Example 2:

// Input: jewels = "z", stones = "ZZ"
// Output: 0
 
