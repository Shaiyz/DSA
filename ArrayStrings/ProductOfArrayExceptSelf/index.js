function productOfArrayExceptSelf(nums){
    leftProduct=1
    rightProduct=1
    let n= nums.length
    let result=new Array(n)
    for (i=0;i<n;i++){
        result[i]=leftProduct
        leftProduct*=nums[i]
    }

    for(i=n-1;i>=0;i--){
        result[i]*=rightProduct
        rightProduct*=nums[i]
    }
    console.log(result)
}
productOfArrayExceptSelf([1,2,3,4])
// Leetcode238
// Example 1:

// Input: nums = [1,2,3,4]
// Output: [24,12,8,6]
// Example 2:

// Input: nums = [-1,1,0,-3,3]
// Output: [0,0,9,0,0]
