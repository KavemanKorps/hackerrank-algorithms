// i got this
function surfaceArray(A) {
    let curr = 0;

    function getSum(arr) {
        return arr.reduce((a, b) => a + b);
    }

    // I UNDERSTAND: I am not checking the 1st and last rows for inners. 

    // given a specific block (of any height), return its difference with either the block in front/back
    function blockValue(block, otherBlock) {
        return block - otherBlock > 0 ? block - otherBlock : 0;
    }

    for (let row = 0; row < A.length; row++) {
        curr += A[row].length * 2;        // Bottom and Top
        curr += Math.max(...A[row]) * 2;  // the sides

        // starting off with "front" face:
        if (row - 1 == -1) curr += getSum(A[row]);
        else {
            // iterate over each individual block:
            for (let block = 0; block < A.length; block++) {
                let prev = A[row - 1][block];
                let currBlock = A[row][block];
                let next = row + 1 < A.length ? A[row + 1][block] : 0;

                // console.log([currBlock - prev > 0 ? currBlock - prev : 0, 
                //     currBlock - next > 0 ? currBlock - next : 0]);

                curr += blockValue(currBlock, prev);
                curr += blockValue(currBlock, next);
            }
        }
        console.log(curr);
    }
    // return curr;
}


console.log(surfaceArray(
    [[1, 3, 4],
     [2, 2, 3],
     [1, 2, 4]
    ]
));       // should return 60.

// console.log(surfaceArray(
//     [
//      [1, 2],
//      [3, 2]
//     ]));