function blockStar(n) {
    for (let i = 0; i <= n; i++) {
        // let num = 0;
        let row = "";
        for (let j = 0; j <= i; j++) {
            // num++;
            row = row+ " " +(j+1);
        }
        console.log(row);
    }
}

blockStar(4);