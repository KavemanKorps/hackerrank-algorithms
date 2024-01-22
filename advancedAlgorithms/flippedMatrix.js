function flippingMatrix(matrix) {
    let tempArr = JSON.parse(JSON.stringify(matrix));

    // func. is good
    function getQuad(arr) {
        let sum = 0;
        let qSize = Math.ceil(arr[0].length / 2);   // width and height of quad. Here, 2. Yes.
    
        for (let row = 0; row < qSize; row++) {       // iterate until 1
            for (let col = 0; col < qSize; col++) {
                sum += arr[row][col];
            }
        }
        return sum;
    }

    function flipCol(arr, colNum) {
        for (let row = 0; row < arr.length; row++) {
            arr[row][colNum] = arr[row][arr.length - 1 - row];
        }
    }

    let original = getQuad(matrix);
    let currSum = 0;


    // console.log(getQuad(matrix));
    // getQuad(matrix);
}


// console.log(getQuad(
//     [
//     [112, 42, 83, 119], 
//     [56, 125, 56, 49],
//     [56, 125, 56, 49], 
//     [15, 78, 101, 43], 
//     [62, 98, 114, 108]
//     ]
// ));

// getQuad(
//     [
//         [1, 2],
//         [3, 4]
//     ]
// );

function flipCol(arr, col) {
    for (let row = 0; row < arr.length; row++) {
        let first = arr[row][col];
        let second = arr[arr.length - 1 - row][col];

        arr[row][col] = second;
        arr[arr.length - 1 - row][col] = first;

        // console.log(second);
    }
    console.log(arr);
}

flipCol([
    [112, 42, 83, 119], 
    [56, 125, 56, 49],
    [56, 125, 56, 49], 
    [15, 78, 101, 43], 
    [62, 98, 114, 108]
    ], 1);