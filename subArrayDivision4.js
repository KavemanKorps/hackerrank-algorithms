function birthday(s, d, m) {
    let count = [];
    let total = 0;
    for (let i = 0; i < s.length; i++) {
        // console.log(count, s, i, total);

        let sum = count.length ? count.reduce((a, b) => a + b) : 0;

        if (sum > d) {
            s.push(count.pop());
            i--;
        }

        if (sum == d) {
            total++;
            count = [];
            i--;
        }

        // else if (s.length < m) break;

        else if (sum < d && count.length < m) {
            count.push(s[i]);
            s.splice(i, 1);
            i--;
        }
    }
    // return total;
    console.log(total);
}

// console.log(birthday([2, 2, 1, 3, 2], 4, 2));       // 2
birthday([2, 2, 1, 3, 2], 4, 2);

// console.log(birthday([1, 2, 1, 3, 2], 3, 2));       // 2
birthday([1, 2, 1, 3, 2], 3, 2);       // 2

// console.log(birthday([1, 1, 1, 1, 1, 1], 3, 2));    // 0

// console.log(birthday([4], 4, 1));    // 1
birthday([4], 4, 1)
// s, d, m