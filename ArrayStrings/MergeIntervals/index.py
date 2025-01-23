
def merge(intervals):
    merged=[]
    intervals.sort(key=lambda x: x[0])

    for interval in intervals:
        if len(merged) == 0 or  merged[-1][1] < interval[0]:
            merged.append(interval)
        else:
            merged[-1]=[merged[-1][0],max(interval[1],merged[-1][1])] 
    return merged  
        
res= merge([[2,4],[5,6]])
print(res)