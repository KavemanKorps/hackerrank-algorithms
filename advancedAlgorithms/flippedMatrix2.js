// this way of doing things won't work. It'll just 
// keep rechanging the values to their original form. 

function flipCol(arr, col) {
    let top;
    let bottom;
    for (let i = 0; i < arr.length / 2; i++) {
        top = arr[i][col];
        bottom = arr[arr.length - 1 - i][col];

        arr[i][col] = bottom;
        arr[arr.length - 1 - i][col] = top;

        // console.log(arr[i]);
    }
    return arr;
}

let newArr = 
[
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

// console.log(flipCol(newArr, 1));

// flipCol(newArr, 1)

console.log(flipCol([
    [112, 42, 83, 119], 
    [56, 125, 56, 49],
    [56, 125, 56, 49], 
    [15, 78, 101, 43], 
    [62, 98, 114, 108]
    ], 2));