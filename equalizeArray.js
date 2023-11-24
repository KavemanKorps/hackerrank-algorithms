// SOLVE THIS USING AN OBJECT {}
function equalizeArray(arr) {
    let obj =  {};
    for (let i = 0; i < arr.length; i++) {
        if (!obj.hasOwnProperty(arr[i])) obj[arr[i]] = 0;
        obj[arr[i]]++;
    };
    let sortedArr = Object.values(obj).sort(function(a, b) {
        return a - b;
    });
    sortedArr.splice(sortedArr.length - 1, 1);

    let sum = 0;
    for (let i = 0; i < sortedArr.length; i++) {
        sum += sortedArr[i];
    }
    // console.log(sortedArr);
    console.log(sum);
};

// MUST RETURN A NUM (MIN. NUMBER OF DELETIONS). 

equalizeArray([1, 2, 2, 3]);                    // --> minimum number of deletions is 2 (1 and 3).
equalizeArray([1, 2, 2, 4, 3, 4, 3, 4, 5]);     // --> dominant: 4. 3 of them. total nums: 9. Deletions: 6?
equalizeArray([3, 3, 2, 1, 3]);                 // --> 3 dominant. 3 of them. 2 deletions.

equalizeArray([24, 29, 70, 43, 12 ,27, 29, 24, 41, 12, 41, 43, 24, 70, 24, 100, 41, 43, 43, 100, 29, 70, 100, 43, 41, 27, 70, 70, 59, 41, 24, 24, 29, 43, 24, 27, 70, 24, 27, 70, 24, 70, 27, 24, 43, 27, 100, 41, 12, 70, 43, 70, 62, 12, 59, 29, 62, 41, 100, 43, 43, 59, 59, 70, 12, 27, 43, 43, 27, 27, 27, 24, 43, 43, 62, 43, 70, 29]);
// 63 deletions. Returns 72 instead.
// 43 most common, with 15 instances

// console.log([5, 11, 10, 6, 7, 4, 3, 12, 5].reduce((a, b) => a + b)); // yup,  63
