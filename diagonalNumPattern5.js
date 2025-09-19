function blockStar(n) {
    for (let i = 0; i < n; i++) {
        let row = "";
        for (let j = 1; j <= (i+1); j++) {
            if (j % 2 == 0) {
                row = row + "0";
            } else {
                row = row + "1";
            }
        }
        console.log(row);
    }
}

blockStar(15);