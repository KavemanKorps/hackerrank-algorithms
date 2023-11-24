// SOLVE THIS USING AN OBJECT {}
function equalizeArray(arr) {
    let obj =  {};
    for (let i = 0; i < arr.length; i++) {
        if (!obj.hasOwnProperty(arr[i])) obj[arr[i]] = 0;
        obj[arr[i]]++;
    };
    let sortedArr = Object.values(obj).sort();
    sortedArr.splice(sortedArr.length - 1, 1);

    let sum = 0;
    for (let i = 0; i < sortedArr.length; i++) {
        sum += sortedArr[i];
    }
    // console.log(sortedArr.reduce((a, b) => a + b));
    console.log(sum);
};

// MUST RETURN A NUM (MIN. NUMBER OF DELETIONS). 

equalizeArray([1, 2, 2, 3]);                    // --> minimum number of deletions is 2 (1 and 3).
equalizeArray([1, 2, 2, 4, 3, 4, 3, 4, 5]);     // --> dominant: 4. 3 of them. total nums: 9. Deletions: 6?
equalizeArray([3, 3, 2, 1, 3]);                 // --> 3 dominant. 3 of them. 2 deletions.