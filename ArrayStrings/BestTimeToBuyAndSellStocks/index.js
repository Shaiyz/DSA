function bestTimeToBuyAndSellStocks(nums){
    let min_price=Infinity
    let max_profit=0
    let i=0
    while(i<nums.length){
        if (nums[i]<min_price){
            min_price=nums[i]
        }
        if(nums[i]-min_price>max_profit){
            max_profit=nums[i]-min_price
        }
        i++
    }
    return max_profit
}

console.log(bestTimeToBuyAndSellStocks([7,6,4,3,1]))

// Leetcode121
// Example 1:

// Input: prices = [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
// Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
// Example 2:

// Input: prices = [7,6,4,3,1]
// Output: 0
// Explanation: In this case, no transactions are done and the max profit = 0.
