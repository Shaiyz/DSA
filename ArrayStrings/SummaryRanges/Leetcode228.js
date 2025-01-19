var summaryRanges = function(nums) {
    if(nums.length===0) return []
    let i=0
    
    let result=[]
    while(i<nums.length){
        let start=nums[i]
        while(i+1<nums.length && nums[i+1] === nums[i]+1){
            i++
        }
        let end = nums[i]
        if(end>start){
            result.push(`${start}->${end}`)
        }else{
            result.push(`${start}`)
        }
        i++
    }
    return result
}; 

console.log(summaryRanges([0,1,2,4,5,7]))
// Example 1:

// Input: nums = [0,1,2,4,5,7]
// Output: ["0->2","4->5","7"]
// Explanation: The ranges are:
// [0,2] --> "0->2"
// [4,5] --> "4->5"
// [7,7] --> "7"
// Example 2:

// Input: nums = [0,2,3,4,6,8,9]
// Output: ["0","2->4","6","8->9"]
// Explanation: The ranges are:
// [0,0] --> "0"
// [2,4] --> "2->4"
// [6,6] --> "6"
// [8,9] --> "8->9"
//Time complexity O(n) 
//Space complexity O(1)