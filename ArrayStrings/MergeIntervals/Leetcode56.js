function merge(intervals) {
    if (intervals.length === 1) return intervals;
    intervals.sort((a,b)=>a[0]-b[0])
    const merged = [];

    for (const interval of intervals) {
      if (merged.length === 0 || merged[merged.length - 1][1] < interval[0]) {
        merged.push(interval);
      } else {
       merged[merged.length-1][1]=Math.max(interval[1],merged[merged.length-1][1])
      }
    }
    return merged;
    
  }
  
  console.log(merge([[1, 2], [2, 3]]));