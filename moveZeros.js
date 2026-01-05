var moveZeroes = function(nums) {
    let p = 0;
    // for (let i = 0; i < nums.length; i++){
    //     if (nums[p] === 0) {
    //         nums.splice(p, 1);
    //         nums.push(0)
    //     } else {
    //         p++;
    //     }
    // }

    for (let i = 0; i < nums.length; i++){
        if(nums[i] !== 0){
            nums[p] = nums[i];
            p++;
        }
    }

    for (let i = p; i < nums.length; i++){
        nums[i] = 0;
    }
    return nums;
};

nums = [0,1,0,3,12];
console.log(moveZeroes(nums));