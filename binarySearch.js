var search = function (nums, target) {
    let leftP = 0, rightP = nums.length - 1;
    while (leftP <= rightP){
        let mid = Math.floor((leftP + rightP) / 2);
        if (nums[mid] == target) {
            return mid;
        } else if (target > nums[mid]) {
            leftP = mid + 1;
        } else {
            rightP = mid - 1;
        }
    }
    return -1;
};

console.log(search([-1, 3, 4, 6, 8, 9], 6))