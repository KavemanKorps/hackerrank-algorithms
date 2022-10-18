function pickingNumbers(a) {    
    let arrs = [];
    let uniqueArr = [...new Set(a)].sort((y, z) => y - z);      // sorted, UNIQUE arr
    let sortedArr = a.sort((y, z) => y - z);                    // regular sorted arr
    for (let i in uniqueArr) {
        let nums = [];
        let arr = sortedArr.filter(y => y - i <= 1)
        arrs.push(arr)
        sortedArr = sortedArr.filter(f => f !== i)
        // for (let x = 0; x < sortedArr.length; x++) {
        //     if (sortedArr[x] - i <= 1) nums.push(sortedArr[x]);
        // }
        // arrs.push([...nums]);

    }
    console.log(arrs);
}

pickingNumbers([4, 6, 5, 3, 3, 1]);