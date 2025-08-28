function blockStar(n) {
    for (let i = 0; i < n; i++) {
        let row = "";
        for (let j = 0; j < n; j++) {
            if (j >= i) {
                row = row + "  " + "*";
            } else {
                row = row + "   ";
            }
        }
        console.log(row);
    }
}

blockStar(4);