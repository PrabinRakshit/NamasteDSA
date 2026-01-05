var findMaxConsecutiveOnes = function(nums) {
    // let arr=[];
    let c=0;
    let max=0;
    // for(let i=0;i<nums.length;i++){
    //     if(nums[i] === 1 || i === nums.length - 1){
    //         c++;
    //         arr.push(c);
    //     } else {
    //         c=0;
    //         // c++;
    //     }
    // }

    // for(let j=0;j<arr.length;j++){
    //     if(arr[j]>max){
    //         max=arr[j];
    //     }
    // }

    for(let i=0;i<nums.length;i++){
        // if(nums[i] === 1){
        //     c++;
        //     if(i === nums.length - 1 && c>max){
        //         max=c;
        //     }
        // } else {
        //     if(c>max){
        //         max=c;
        //         c=0;
        //     }
        // }

        if(nums[i] === 1){
            c++;
            if(c>max){
                max=c;
            }
        } else {
            c=0;
        }
    }
    max = max > c ? max : c;
     
    return max;
};

findMaxConsecutiveOnes([1,1,0,1,1,1]);