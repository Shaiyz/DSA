def summaryRanges(nums):
    if len(nums)==0:
         return []
    i=0
    result=[]
    while(i<len(nums)):
        start=nums[i]

        while(i+1<len(nums) and nums[i+1] == nums[i]+1 ):
            i+=1

        end=nums[i]
        if(start==end):
            result.append(f"{start}")
        else:
            result.append(f"{start}->{end}")
        i+=1
    return result

print(summaryRanges([1,2,3,5,6,7,9]))