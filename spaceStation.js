function flatlandSpaceStations(n, c) {
    let currMax = 0;
    for (let i = 0; i < n; i++) {
        // what's difference again? current station 
        let difference = Math.abs(c[0] - i);    // c[0] = 4, i = 4, 4 - 4 = 
        let otherDiff = c[1] ? Math.abs(c[1] - i) : false
        // base case
        if (difference > otherDiff && (otherDiff)) {
            c.shift();
        }
        if (difference > currMax) currMax = difference;
        // console.log(c[0], i, difference, Math.abs(c[1] - i));
        console.log(difference, otherDiff);
    }   
    // return currMax;
}

flatlandSpaceStations(5, [0, 4]);
// console.log(flatlandSpaceStations(5, [0, 4]));