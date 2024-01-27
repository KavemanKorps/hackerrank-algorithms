// i got this
function surfaceArray(A) {
    let curr = 0;
    for (let i = 0; i < A; i++) {
        curr += A[i].length * 2;        // Bottom and Top
        curr += Math.max(...A[i]) * 2;  // the sides


    }
}

surfaceArray(
    [
        [2, 1, 2],
        [1, 1, 1],
        [1, 2, 1]
    ]
);