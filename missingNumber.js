var missingNumber = function(nums) {
    // let x=0;
    // let num=0;
    // for(let i=0;i<=nums.length;i++){
    //     if(i<nums.length){
    //         x = x + nums[i];
    //     }
    //     num = num + i;
    // }
    // return num - x;

    let expectedSum = nums.length * (nums.length + 1) / 2;
    let actualSum = 0;
    for (let i = 0; i < nums.length; i++) {
        actualSum += nums[i];
    }    
    return expectedSum - actualSum;

};

console.log(missingNumber([3,4,2,1]));