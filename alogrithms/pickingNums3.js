function pickingNumbers(a) {    
    let arrs = [];
    let newArr = [...new Set(a)].sort((y, z) => y - z);   // [ 1, 3, 4, 5, 6 ], correct   
    for (let i in newArr) {
        let nums = [];
        let arr2 = a.filter(y => y - i <= 1)
        arrs.push(arr2)
        newArr = newArr.filter(f => f !== i)
        // for (let x = 0; x < newArr.length; x++) {
        //     if (newArr[x] - i <= 1) nums.push(newArr[x]);
        // }
        // arrs.push([...nums]);

    }
    console.log(arrs);
}

pickingNumbers([4, 6, 5, 3, 3, 1]);