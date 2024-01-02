// NOT FAST ENOUGH
function birthday(s, d, m) {
    let count = [];
    let total = 0;

    if (d * m == s.reduce((a, b) => a + b) && m !== s.length) return total;
    while (s.length) {
        // console.log(s, count, total);

        if (count.length < m) count.push(s.shift());

        let sum = count.length ? count.reduce((a, b) => a + b) : 0;
        if (sum > d) {
            s.push(count.pop());
        }

        else if (sum == d && count.length == m) {
            total++;
            count = [];
        }
    }
    return total;
    // console.log(total);
};

console.log(birthday([2, 2, 1, 3, 2], 4, 2));       // 2

console.log(birthday([1, 2, 1, 3, 2], 3, 2));       // 2

console.log(birthday([4], 4, 1));    // 1

console.log(birthday([1, 1, 1, 1, 1, 1], 3, 2));    // 0


// birthday([2, 2, 1, 3, 2], 4, 2);
// birthday([1, 2, 1, 3, 2], 3, 2);
// birthday([4], 4, 1);
birthday([1, 1, 1, 1, 1, 1], 3, 2);