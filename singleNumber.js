var singleNumber = function(nums) {
    // let mapped = {};
    // for (let i = 0; i < nums.length; i++) {
    //     if(!mapped[nums[i]]) {
    //     mapped[nums[i]] = 1;
    //     } else {
    //     mapped[nums[i]] += 1;
    //     }
    // }
    // for (let i = 0; i < nums.length; i++) {
    //     if (mapped[nums[i]] === 1) {
    //       return nums[i];
    //     }
    // }
    // return null;
    let result = 0;
    for (let i = 0; i < nums.length; i++) {
        result ^= nums[i];
    }
    return result;
};

console.log(singleNumber([4,1,2,1,2]));