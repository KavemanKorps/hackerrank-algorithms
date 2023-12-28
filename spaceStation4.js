function flatlandSpaceStations(n, c) {
    c.unshift(0);
    c.push(n - 1);
    let newArr = [...new Set(c)].sort((a, b) => a - b);
    
    let distances = [];

    for (let i = 0; i < newArr.length - 1; i++) {
        distances.push(Math.abs(newArr[i + 1] - newArr[i]));
    }

    let sucker = Math.max(...distances); 

    return newArr;
    // return distances;
};

// flatlandSpaceStations(5, [0, 4]);            // -> 0, 1, 2, 1, 0.....2

console.log(flatlandSpaceStations(99992, [90467, 18058, 99109, 48463]));     // -> 21002
console.log(flatlandSpaceStations(11, [0, 5, 8]));                           // -> 2
console.log(flatlandSpaceStations(9, [2, 5]));                               // -> 3 
console.log(flatlandSpaceStations(6, [0, 1, 2, 3, 4, 5]));                   // -> 0
console.log(flatlandSpaceStations(5, [0, 4]));                               // -> 2
console.log(flatlandSpaceStations(99989, [75453, 36129, 64502, 46817]));     // -> 36129
console.log(flatlandSpaceStations(100, [99]));                               // -> 99
console.log(flatlandSpaceStations(90, [4, 76, 16, 71, 56, 7, 77, 31, 2, 66, 12, 32, 57, 11, 19, 14, 42]));  // -> 12