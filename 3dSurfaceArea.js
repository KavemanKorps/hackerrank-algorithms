// i got this
function surfaceArray(A) {
    let curr = 0;

    function getSum(arr) {
        return arr.reduce((a, b) => a + b);
    }

    for (let row = 0; row < A.length; row++) {
        curr += A[row].length * 2;        // Bottom and Top
        curr += Math.max(...A[row]) * 2;  // the sides

        // starting off with "front" face:
        if (row - 1 == -1) curr += getSum(A[row]);
        else {
            for (let block = 0; block < A.length; block++) {
                let prev = A[row - 1][block];
                let currBlock = A[row][block];
                let next = row + 1 < A.length ? A[row + 1][block] : 0;

                /* sum of current with previous block and the sum of current 
                with next block. If sum is 0 or less, set it to zero. */
                let sum1 = currBlock - prev > 0 ? currBlock - prev : 0; 
                let sum2 = currBlock - next > 0 ? currBlock - next : 0;

                curr += sum1;
                curr += sum2;
            }
        }
    }
    return curr;
}

// surfaceArray(
//     [
//         [2, 1, 2],
//         [1, 1, 1],
//         [1, 2, 1]
//     ]
// );

console.log(surfaceArray(
    [[1, 3, 4],
     [2, 2, 3],
     [1, 2, 4]
    ]
));       // should return 60.