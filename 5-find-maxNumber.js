function maxNumber(nums){
    let max = nums[0]

    for(let i = 1; i < nums.length; i++){
        if(nums[i] > max){
            max = nums[i]
        }
    }

    return max
}

console.log(maxNumber([1,2,3,4,6,10]))