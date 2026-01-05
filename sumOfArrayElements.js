function sumOfArrayElements(arr) {
    if (arr.length === 0) {
        return 0;
    }

    return arr[0] + sumOfArrayElements(arr.slice(1));
}

console.log(sumOfArrayElements([1, 2, 3, 4, 5]));
