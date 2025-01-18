function FindClosestNumberToZero(nums){
    let min=Infinity
    let i =0
    while(i<nums.length){
        if(Math.abs(nums[i]) < Math.abs(min) || nums[i]> min && Math.abs(nums[i]) === Math.abs(min)){
            min=nums[i]
        }
        i++
    }
    return min
}

FindClosestNumberToZero([-4,-2,1,4,8])

//Time complexity O(n) 
//Space complexity O(1)
