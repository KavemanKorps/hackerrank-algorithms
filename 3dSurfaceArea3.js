// STILL have no inner-face handling
function surfaceArea(A) {
    let curr = 0;

    // given a specific block (of any height), return its difference with either the block in front/back
    function blockValue(block, otherBlock) {
        return block - otherBlock > 0 ? block - otherBlock : 0;
    }

    for (let row = 0; row < A.length; row++) {
        curr += A[row].length * 2;        // Bottom and Top
        curr += Math.max(...A[row]) * 2;  // the sides 

        // starting off with "front" face:

        // iterate over each individual block:
        for (let block = 0; block < A[row].length; block++) {
            let currBlock = A[row][block];
            let prev = row - 1 >= 0 ? A[row - 1][block] : 0;
            let next = row + 1 < A.length ? A[row + 1][block] : 0;

            curr += blockValue(currBlock, prev);
            curr += blockValue(currBlock, next);

            // FACES COMPLETE. NOW FOR THE INNER FACES.
            // let left = block - 1 >= 0 ? A[row][block - 1] : 0;
            // let right = block + 1 < A[row].length ? A[row][block + 1] : 0;

            // if (currBlock < left && currBlock < right) {
            //     curr += left - currBlock;
            //     curr += right - currBlock;
            // }
        }
    }
    return curr;
}

// console.log(surfaceArea(
//     [
//     [91, 80, 7, 41, 36, 11, 48, 57, 40, 43]
//     ]
// ));     // 1276. 23 extra ones being added (1299)

console.log(surfaceArea(
    [
    [2, 1, 3]
    ]
));     // 1276. 23 extra ones being added (1299)


// console.log(surfaceArea(
//     [[1, 3, 4],
//      [2, 2, 3],
//      [1, 2, 4]
//     ]
// ));       // should return 60.

// console.log(surfaceArea(
//     [
//      [1, 2],
//      [3, 2]
//     ]));        // 28

// console.log(surfaceArea(
//     [[3, 1, 2],
//      [1, 1, 1],
//      [1, 2, 1]
//     ]
// ));       // should return 47