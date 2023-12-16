// NOT EFFICIENT ENOUGH
function saveThePrisoner(n, m, s) { // num. of prisoners, pieces of candy, chair # to start at.
    let max = Math.max(n, m);
    for (let i = s; i <= max; i++) {    
        if (i > n) i = 1;
        m--;
        if (m <= 0) return i;
    }
};

console.log(saveThePrisoner(4, 6, 2));   // -> 2, 3, 4, 1, 2, 3....RETURN 3.

console.log(saveThePrisoner(5, 2, 1));   // -> 1, 2....RETURN 2

console.log(saveThePrisoner(5, 2, 2));   // -> 2, 3....RETURN 3

// count = 0, i = 1, m = 2
// count = 1, i = 2, m = 2