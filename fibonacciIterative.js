function fib(n) {
    let x = 0;
    let y = 0;
    let val = 0;
    for (let i = 0; i <= n; i++){
        if (i == 0) {
            x = 0;
        }
        if (i == 1 || i == 2) {
            x = 0;
            y = 1;
        }
        val = x + y;
        x = y;
        y = val;
    }
    return val;
}

console.log(fib(2))