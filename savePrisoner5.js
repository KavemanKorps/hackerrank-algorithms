function saveThePrisoner(dudes, candy, s) {
    let extend = s + candy - 1
    if (extend > dudes) {
        let remaining = extend - dudes;
        while (remaining > dudes) {
            remaining -= dudes;
        }
        return remaining;
    } else return s + candy - 1;
}

// n, m, s
// console.log(saveThePrisoner(3, 7, 3));    // -> 3

// console.log(saveThePrisoner(7, 19, 2));   // -> 6

// console.log(saveThePrisoner(5, 3, 4));    // -> 1  

console.log(saveThePrisoner(5, 2, 1));   // -> 1, 2....RETURN 2

console.log(saveThePrisoner(5, 2, 2));   // -> 2, 3....RETURN 3

// console.log(saveThePrisoner(999999999, 999999998, 999983945));  // -> 999983943  