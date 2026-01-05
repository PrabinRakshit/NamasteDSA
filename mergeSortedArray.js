var merge = function (nums1, m, nums2, n) {
    // let nums1Copy = nums1.slice(0,m);
    // let p1 = 0, p2 = 0;
    // for (let i = 0; i<m+n;i++){
    //     if(p2>=n || (p1<m && nums1Copy[p1] < nums2[p2])){
    //         nums1[i] = nums1Copy[p1]
    //         p1++;
    //     } else {
    //         nums1[i] = nums2[p2]
    //         p2++;
    //     }
    // }

    let p1 = m, p2 = n;
    // for (let i = (m + n)-1; i >= 0; i--) {
    //     if(p2 <= 0 || (p1 > 0 && nums1[p1 - 1] > nums2[p2 - 1])) {
    //         nums1[i] = nums1[p1 - 1];
    //         p1--;
    //     } else {
    //         nums1[i] = nums2[p2 - 1];
    //         p2--;
    //     }
    // }
    for (let i = (m + n)-1; i >= 0; i--) {
        if(p2 <= 0) {
            break;
        }
        if((p1 > 0 && nums1[p1 - 1] > nums2[p2 - 1])) {
            nums1[i] = nums1[p1 - 1];
            p1--;
        } else {
            nums1[i] = nums2[p2 - 1];
            p2--;
        }
    }
    console.log(nums1);
    
};

merge([2, 3, 5, 0, 0, 0, 0], 3, [3, 3, 5, 6, 8, 11], 6)


// 2,3,3,5,7
// 3,3,5,6,8,11