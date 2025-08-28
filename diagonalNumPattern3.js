function blockStar(n) {
    for (let i = 0; i <= n; i++) {
        let row = "";
        for (let j = n; j >= i; j--) {
            row = row + "  " + (j+1);
        }
        console.log(row);
    }
}

blockStar(4);