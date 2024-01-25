// DONE

// does not specify what type to return. So, string.
function extraLongFactorials(n) {
    let curr = BigInt(1);
    for (let i = n; i > 0; i--) { 
        curr *= BigInt(i);
    }
    return BigInt(curr).toString();
}

console.log(extraLongFactorials(30));
console.log(extraLongFactorials(25));
// extraLongFactorials(4);