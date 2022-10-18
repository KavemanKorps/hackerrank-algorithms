function pickingNumbers(a) {    
    let arrs = [];
    let uniqueArr = [...new Set(a)].sort((y, z) => y - z);      // sorted, UNIQUE arr
    let sortedArr = a.sort((y, z) => y - z);                    // regular sorted arr
    let nums = [];
    for (let i = 0; i < sortedArr.length; i++) {                // THIS IS CORRECT LOOP
        if (sortedArr[i + 1] - sortedArr[i] > 1) {
            arrs.push([sortedArr[i]])
        }
        else nums.push(sortedArr[i]);
    }    
    console.log(sortedArr);
}

pickingNumbers([4, 6, 5, 3, 3, 1]);

// sortedArr: [ 1, 3, 3, 4, 5, 6 ]