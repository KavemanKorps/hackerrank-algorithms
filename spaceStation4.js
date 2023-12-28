function flatlandSpaceStations(n, c) {
    c.unshift(0);
    c.push(n - 1);
    let newArr = [...new Set(c)].sort((a, b) => a - b);
    let distances = [];

    // what if I divide all distance values by 2 except 0 and last value?
    for (let i = 0; i < newArr.length - 1; i++) {
        distances.push(Math.abs(newArr[i + 1] - newArr[i]));
    }

    distances = distances.map((a, index) => (index === 0 || index === distances.length - 1) ? a : a / 2);

    let sucker = Math.max(...distances); 

    // -2 because we add 2 values. Checks if the length of "c" is the same as n.
    if (c.length - 2 == n) return 0;     // GOOD
    if (c.slice(1, c.length - 1).includes(0) && distances[0] == Math.max(...distances) && c.length - 2 > 1 
        && Math.max(...distances) > 1) return Math.floor(distances[0] / 2);
    return Math.floor(sucker);
    // return sucker;
};

// flatlandSpaceStations(5, [0, 4]);            // -> 0, 1, 2, 1, 0.....2

console.log(flatlandSpaceStations(99992, [90467, 18058, 99109, 48463]));     // -> 21002
console.log(flatlandSpaceStations(11, [0, 5, 8]));                           // -> 2 (returns 5 instead) 
console.log(flatlandSpaceStations(9, [2, 5]));                               // -> 3 
console.log(flatlandSpaceStations(6, [0, 1, 2, 3, 4, 5]));                   // -> 0
console.log(flatlandSpaceStations(5, [0, 4]));                               // -> 2 (returns 4 instead)
console.log(flatlandSpaceStations(99989, [75453, 36129, 64502, 46817]));     // -> 36129
console.log(flatlandSpaceStations(100, [99]));                               // -> 99
console.log(flatlandSpaceStations(90, [4, 76, 16, 71, 56, 7, 77, 31, 2, 66, 12, 32, 57, 11, 19, 14, 42]));  // -> 12
console.log(flatlandSpaceStations(100, [93, 41, 91, 61, 30, 6, 25, 90, 97]));   // -> 14 
console.log(flatlandSpaceStations(100, [0]));       // -> 99 
console.log(flatlandSpaceStations(100, [93, 41, 91, 61, 30, 6, 25, 90, 97, 69, 66, 78, 37, 67, 46, 59, 18, 42, 47, 43, 23, 50, 2, 57, 95, 3, 29, 81, 22, 10, 52, 31, 35, 94, 80, 5, 60, 58, 64, 8, 48, 62, 7, 45, 63, 40, 21, 92, 0, 17, 98, 1, 68, 85, 99, 24, 4, 34, 20, 26, 72, 51, 75, 27, 54, 86, 33, 28, 87, 56, 82, 83, 19, 44, 15, 9, 84, 89, 14, 49, 12, 38, 79, 96, 88, 13, 16, 71, 77, 73]));
// -> 1 (returns 0 instead). 90 numbers.