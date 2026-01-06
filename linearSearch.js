let arr = [4, 2, 7, 1, 3];
let target = 1;

function linearSearch(array, target) {
    for (let i = 0; i < array.length; i++) {
        if(array[i] === target) {
            return i;
        }
    }
    return -1;
}

console.log(linearSearch(arr, target));
