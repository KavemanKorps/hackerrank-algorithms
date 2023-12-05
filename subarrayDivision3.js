// BACK IN THE GAME BABY
// wait, why is it called subarray DIVISION?
function birthday(s, d, m) {
    let total = 0;
    let mass = s[0];
    let turns = m - 1;
    for (let y = 1; y < s.length; y++) {
        if (mass == d && turns == 0) {
            s.splice(0, 1);
            s.splice(y - 2, 1);
        }
        else if (mass < d && turns > 0) {
            mass += s[y];
            turns--;
        }
        else if (mass > d || turns <= 0) {
            turns = m - 1;
            mass = s[i];
            continue;
        }
    }
    // console.log(qualis);
    console.log(total);
}

birthday([2, 2, 1, 3, 2], 4, 2);    // 2... [2, 2], [1, 3]
// birthday([1, 2, 1, 3, 2], 4, 2);    // 2... [1, 3], [2, 2]
// birthday([1, 1, 1, 1, 1, 1], 3, 2);    // 0