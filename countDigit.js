function countDigit(n) {
    let digitCounter = 0;

    n = Math.abs(n);
    if (n == 0) {
        digitCounter++
    } else {
        while (n > 0) {
            n = Math.floor(n / 10);
            digitCounter++
        }
    }
    console.log(digitCounter);
}

countDigit(-0);