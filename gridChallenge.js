// WE RETURN EITHER YES OR NO
// HEY ASSHOLE: YOU NEED TO REARRANGE THE ROWS (HORIZONTAL) FIRST

function gridChallenge(grid) {
    function alpha(str) {
        return str.split("").sort().join("");
    };

    // loop over each string
    for (let i = 1; i < grid.length; i++) {
        let second = alpha(grid[i]);
        let first = alpha(grid[i - 1]);
        // make each string alphabetical order:

        // compare FIRST letter in SECOND string w/ FIRST letter in FIRST string
        if (second.charAt(i - 1) < first.charAt(i - 1)) return "NO VERTICAL";

        // loop over every individual letter in each string
        for (let x = 1; x < second.length; x++) {
            // compare 2nd letter with first one:
            if (first.charAt(x) < first.charAt(x - 1)) return "NO";
        }
    }
    return "YES";
};

console.log(gridChallenge(["abc", "ade", "efg"]));  // YES

console.log(gridChallenge(["eabcd", "fghij", "olkmn", "trpqs", "xywuv"]));  // YES

console.log(gridChallenge(["abc", "lmp", "qrt"]));  // YES

console.log(gridChallenge(["mpxz", "abcd", "wlmf"])); 

// a b c
// a d e
// e f g
// ------> YES (ascending order both vertically and horizontally for all rows and columns)