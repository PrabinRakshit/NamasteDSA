function sumOfArrayElements(arr) {
    if (arr.length === 0) {
        return 0;
    }

    if (arr[0] % 2 == 0) {
        return sumOfArrayElements(arr.slice(1))
    }
    return arr[0] + sumOfArrayElements(arr.slice(1))
}

console.log(sumOfArrayElements([5,1,0,2,5]))