var summaryRanges = function(nums) {
    const result = [];
    if(nums.length===0) return []
    let i=0
    while(i<nums.length){
        start=nums[i]
        while(i+1<nums.length && nums[i]+1==nums[i+1]){
            i++
        }
        if(start===nums[i]){
            result.push(`${start}`)
        }else{
            result.push(`${start}->${nums[i]}`)
        }
        i++
    }
    return result
};

//Time complexity O(n) 
//Space complexity O(1)