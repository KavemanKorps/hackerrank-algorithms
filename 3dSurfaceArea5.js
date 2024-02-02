// TIME FOR A NEW, SIMPLER APPROACH:
function surfaceArea(A) {
    let curr = 0;
    for (let row = 0; row < A.length; row++) {
        for (let col = 0; col < A[row].length; col++) {
            let left = col == 0 ? 0 : A[row][col - 1];
            let right = col == A[row].length - 1 ? 0 : A[row][col + 1];
            let up = row == 0 ? currBlock : currBlock - A[row - 1][col];
            let down = row == A.length - 1 ? currBlock : A[row + 1][col];

            for (let i of [left, right, up, down]) {
                if (i >= 0) curr += i;
            }
        }
    }
    return curr;
}

console.log(surfaceArea(
    [
     [1, 2],
     [3, 2]
    ]));        // 28