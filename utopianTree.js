function utopianTree(n) {
    let total = 0;
    for (let i = 1; i <= n + 1; i++) {
        if (i % 2 === 0) total  *= 2;
        else total++
        console.log(total)
    }
    //return total;
}
// 1, 2, 3, 6, 7, 14

utopianTree(5);       // 14
// DONE