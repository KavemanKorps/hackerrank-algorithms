function birthday(s, d, m) {
    let currArr = [];
    let count = 0;
    for (let i = 0; i < s.length; i++) {
        let sum = currArr.length ? currArr.reduce((a, b) => a + b) : 0;
        if (sum < d && currArr.length < m) {
            currArr.push(s[i]);
            s = s.splice(i, 1);
        }
        else if (sum > d) currArr.pop();
        else if (sum == d) {
            count++;
            currArr = [];
        };
        console.log(currArr, s);
    }
    // return count;
}

// console.log(birthday([2, 2, 1, 3, 2], 4, 2));
birthday([2, 2, 1, 3, 2], 4, 2);