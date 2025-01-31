function RomanToInteger(s) {
  const values = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
  let result=0
  for (let i=0; i<s.length;i++){
    if(values[s[i+1]]>values[s[i]]){
        result = result + values[s[i+1]]-values[s[i]]
        i+=1
    }else{
        result+=values[s[i]]

    }
  }
  return result
}
console.log(RomanToInteger("LVIII"));
// Leetcode228
//Leetcode13
// Example 1:

// Input: s = "III"
// Output: 3
// Explanation: III = 3.
// Example 2:

// Input: s = "LVIII"
// Output: 58
// Explanation: L = 50, V= 5, III = 3.
// Example 3:

// Input: s = "MCMXCIV"
// Output: 1994
// Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.
