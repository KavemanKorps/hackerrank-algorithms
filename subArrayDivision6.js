function birthday(s, d, m) {
    let total = 0;
    s.push(0);
    for (let i = 0; i < s.length; i++) {
        // if (i + m) {
        //     if (s.slice(i, m).reduce((a, b) => a + b) == d) {
        //         total++;
        //     }
        //     console.log(s.slice(i, m));
        // } else break;
        console.log(s.slice(i, i + m));
    }
    // return total;
    console.log(s);
}

// console.log(birthday([2, 2, 1, 3, 2], 4, 2));       // 2

// console.log(birthday([1, 2, 1, 3, 2], 3, 2));       // 2
// console.log(birthday([4], 4, 1));    // 1
// console.log(birthday([1, 1, 1, 1, 1, 1], 3, 2));    // 0

birthday([2, 2, 1, 3, 2], 4, 2);
// birthday([1, 2, 1, 3, 2], 3, 2);
// birthday([4], 4, 1);