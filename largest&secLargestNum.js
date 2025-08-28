let array = [4, 9, 0, 2, 6, 10, 10]
function secLar(arr) {
    if (arr.length < 2) {
        console.log('Array is too small');
        return 'Array is too small'
    }
    let lar = -Infinity;
    let secLar = -Infinity;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > lar) {
            secLar = lar
            lar = arr[i];
        } else if (arr[i] > secLar && arr[i] != lar) {
            secLar = arr[i];
        }
    }
    /*for (let i = 0; i < arr.length; i++) {
        if (arr[i] > secLar && arr[i] !== lar && arr[i] < lar) {
            secLar = arr[i];
        }
    }*/
    console.log(lar);
    console.log(secLar);
    return lar;
}

secLar(array)