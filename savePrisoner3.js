// STILL NOT FAST ENOUGH
function saveThePrisoner(n, m, s) { // num. of prisoners, pieces of candy, chair # to start at.
    for (let i = s; i <= n; i = (i % n) + 1) {
        m--;
        if (m == 0) return i;
    }
}   

// console.log(saveThePrisoner(4, 6, 2));   // -> 2, 3, 4, 1, 2, 3....RETURN 3.

// console.log(saveThePrisoner(5, 2, 1));   // -> 1, 2....RETURN 2

// console.log(saveThePrisoner(5, 2, 2));   // -> 2, 3....RETURN 3

console.log(saveThePrisoner(999999999, 999999998, 999983945));  // -> 999983943