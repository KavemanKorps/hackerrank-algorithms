function flippedMatrix(matrix) {

    // get sum of the numbers in the top-left quarter. Success (works with odd matrices too).
    function getQuad(arr) {
        let sum = 0;
        let qSize = Math.ceil(arr[0].length / 2);   // width and height of quad. Here, 2. Yes.
    
        for (let row = 0; row < qSize; row++) {      
            for (let col = 0; col < qSize; col++) {
                sum += arr[row][col];
            }
        }
        return sum;
    }

    // column flipping function success.
    function flipCol(arr, col) {
        let top;
        let bottom;
        for (let i = 0; i < Math.ceil(arr.length / 2); i++) {
            top = arr[i][col];
            bottom = arr[arr.length - 1 - i][col];
    
            arr[i][col] = bottom;
            arr[arr.length - 1 - i][col] = top;
        }
    }

    // flip row func success.
    function flipRow(arr, row) {
        arr[row].reverse();
    }

    let currentSum = 0;
    // for (let row = 0; row < arr.length; row++) {
    // }
};

// flippedMatrix([
//     [112, 42, 83, 119], 
//     [56, 125, 56, 49], 
//     [15, 78, 101, 43], 
//     [62, 98, 114, 108]
//     ], 1);

// if odd as in here, we cieling it. So, the quart here is 3x3.
flippedMatrix([
    [112, 42, 83, 119, 1], 
    [56, 125, 56, 49, 1], 
    [15, 78, 101, 43, 1], 
    [62, 98, 114, 108, 1],
    [62, 98, 114, 108, 1],
    ], 1);

flippedMatrix([
    [1, 2],
    [3, 4]
], 1);