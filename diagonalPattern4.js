function blockStar(n) {
    for (let i = 5; i > 0; i--) {
        let row = "";
        for (let j = 0; j <= n; j++) {
            if (j >= i) {
                row = row + "  " + "*";
            } else {
                row = row + "   ";
            }
        }
        console.log(row);
    }
}

function blockStars(n) {
    for (let i = 0; i < n; i++) {
        let row = "";
        for (let j = 0; j < n-(i+1); j++) {
            row = row + "   ";
        }
        for (let k = 0; k < i + 1; k++){
            row = row + "  *";
        }
        console.log(row);
    }
}

blockStars(4);