// STILL NOT FAST ENOUGH
// prisoners, snacks, start
function saveThePrisoner(n, m, s) {
    // let curr = s;
    while (m > 1) {
        if (s > n) s = 1;
        m--;
        s++
    }
    return s;
};

console.log(saveThePrisoner(4, 6, 2));   // -> 2, 3, 4, 1, 2, 3....RETURN 3.

console.log(saveThePrisoner(5, 2, 1));   // -> 1, 2....RETURN 2

console.log(saveThePrisoner(5, 2, 2));   // -> 2, 3....RETURN 3

console.log(saveThePrisoner(999999999, 999999998, 999983945));  // -> 999983943  