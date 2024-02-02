// TIME FOR A NEW, SIMPLER APPROACH:
function surfaceArea(A) {
    let curr = 0;
    for (let row = 0; row < A.length; row++) {
        // NOW FOR TOP/BOTTOM:
        curr += A[row].length * 2;        // Bottom and Top 
        for (let col = 0; col < A[row].length; col++) {
            let currBlock = A[row][col];
        
            // [3, 1, 2] -> currBlock = 2, A[row][col - 1] = 1, left = 1
            let left = col == 0 ? currBlock : currBlock - A[row][col - 1];

            // example: [3, 1, 2] -> currBlock = 3, A[row][col + 1] = 1, right = 2
            let right = col == A[row].length - 1 ? currBlock : currBlock - A[row][col + 1];

            // example:     [3, 1, 2]
            //              [1, 1, 1]
            // currBlock = 1, A[row - 1][col] = 1, up = 0;
            let up = row == 0 ? currBlock : currBlock - A[row - 1][col];

            // example:     [3, 1, 2]
            //              [1, 1, 1]
            // currBlock = 3, A[row + 1][col] = 1, down = ;
            let down = row == A.length - 1 ? currBlock : currBlock - A[row + 1][col];

            for (let i of [left, right, up, down]) {
                if (i >= 0) curr += i;
            }
        }
    }

    // NOW FOR TOP AND BOTTOM:
    return curr;
}

console.log(surfaceArea(
    [
     [1, 2],
     [3, 2]
    ]));        // 28

console.log(surfaceArea(
    [[91, 80, 7, 41, 36, 11, 48, 57, 40, 43]]  
));         
// 1276
// inner total: 189

// console.log(surfaceArea(
//     [
//         [1, 2],
//         [3, 2]
//     ]));        // 28

console.log(surfaceArea(
    [[3, 1, 2],
     [1, 1, 1],
     [1, 2, 1]
    ]
));       // should return 47. Where did I get this from again?

console.log(surfaceArea(
    [[1, 3, 4],
     [2, 2, 3],
     [1, 2, 4]
    ]
));       // should return 60