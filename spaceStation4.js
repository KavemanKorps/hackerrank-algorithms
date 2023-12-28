function flatlandSpaceStations(n, c) {
    c.unshift(0);
    c.push(n - 1);
    let newArr = [...new Set(c)].sort((a, b) => a - b);
    let distances = [];

    for (let i = 0; i < newArr.length - 1; i++) {
        distances.push(Math.abs(newArr[i + 1] - newArr[i]));
    }

    let sucker = Math.max(...distances); 

    // -2 because we add 2 values:
    if (c.length - 2 == n) return 0;
    else if (sucker == distances[distances.length - 1]) return sucker; 
    else return Math.floor(Math.max(...distances) / 2);
};

// flatlandSpaceStations(5, [0, 4]);            // -> 0, 1, 2, 1, 0.....2

// flatlandSpaceStations(11, [0, 5, 8]);                           // -> 2 
console.log(flatlandSpaceStations(99992, [90467, 18058, 99109, 48463]));     // -> should return 21002. 51528 instead.
console.log(flatlandSpaceStations(11, [0, 5, 8]));   // -> 2
console.log(flatlandSpaceStations(9, [2, 5]));       // -> 3 
console.log(flatlandSpaceStations(6, [0, 1, 2, 3, 4, 5]));      // -> 0
console.log(flatlandSpaceStations(5, [0, 4]));      // -> 2