function kaprekarNumbers(p, q) {
    let goods = [];

    for (let i = p; i <= q; i++) {
        let arr = [];
        let squareStr = (i * i).toString();     // YES, this is a string

        if (i == 1) goods.push(i);
        if (squareStr.length >= 2) {
            // if string is not even:
            if (squareStr.length % 2 !== 0) {
                // first part of string:
                arr.push(squareStr.slice(0, (squareStr.length - 1) / 2));
                // second part:
                arr.push(squareStr.slice((squareStr.length - 1) / 2, squareStr.length));
            } 
            else {
                arr.push(squareStr.slice(0, squareStr.length / 2));
                arr.push(squareStr.slice(squareStr.length / 2, squareStr.length));
            }

            let sum = arr.map(x => parseInt(x, 10)).reduce((a, b) => a + b);
            if (sum == i) {
                goods.push(i);
            }
        }
        // turn all strs in array into ints and add em all up:
    }
    return goods.length ? goods: "INVALID RANGE";
}
console.log(kaprekarNumbers(1, 100));    // [1, 9, 45, 55, 99]
console.log(kaprekarNumbers(100, 300));  
console.log(kaprekarNumbers(0, 0));  

// 9 => 9 * 9 = 81 -> ["8", "1"] -> 8 + 1 = 9