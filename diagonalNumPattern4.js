function blockStar(n) {
    for (let i = n; i >= 0; i--) {
        let row = "";
        for (let j = 0; j <= i; j++) {
            row = row + "  " + (j+1);
        }
        console.log(row);
    }

    for (let i = 0; i <= n; i++) {
        let row = "";
        for (let j = 0; j <= n-i; j++) {
            row = row + "  " + (j+1);
        }
        console.log(row);
    }
}

blockStar(10);