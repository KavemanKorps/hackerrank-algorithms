// WORKS GOOD
let stupid = [1, 2, 3, 2, 5, 6, 5, 7, 2, 3, 1, 2];
function birthday(s, d, m) {
    for (let i = 0; i < s.length; i++) {
        if (stupid[i] <= 3) {
            stupid.splice(i, 1);
            i--;
        }
        console.log(stupid);
    }
}
birthday([2, 2, 1, 3, 2], 4, 2);