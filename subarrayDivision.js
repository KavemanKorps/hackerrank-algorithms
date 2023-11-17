
// ([1 1 1 1 1 1], 3, 2) -> 0
// ([1, 2, 1, 3, 2], 3, 2) -> 2
// ([4], 4, 1) -> 1

// s = array, d (what it should equal), m (number of nums to add) 

function birthday(s, d, m) {
    // Write your code here
    let summas = [];
    let scooba = 0;

    for (let i = 0; i < s.length; i++) {
        if (summas.length < m) summas.push(s[i]);
        else if (summas.length === m) {
            if (summas.reduce((a, b) => a + b) === d) scooba++;
            else summas.pop();
        }
    }
    return scooba;
}

console.log(birthday([1, 1, 1, 1, 1, 1], 3, 2))     // 0
console.log(birthday([1, 2, 1, 3, 2], 3, 2))        // 2
console.log(birthday([4], 4, 1))                    // 1