function gridChallenge(grid) {
    function alpha(str) {
        return str.split("").sort().join("");
    };

    let curr = 0;

    // loop over each string
    for (let i = 0; i < grid.length; i++) {
        // if there's room for comparison and first letter is greater than second one, NO
        if (i + 1 < grid.length && (alpha(grid[i]).charAt(curr) > alpha(grid[i + 1]).charAt(curr))) return "NO";
        curr++; 
    }
    return "YES";
}

console.log(gridChallenge(["hcd", "awc", "shm"]));  // NO

console.log(gridChallenge(["sur", "eyy", "gxy"]));  // NO

console.log(gridChallenge([
    "zzwj",
    "zjzw",
    "zwzj",
    "jzwz"]));      // YES

console.log(gridChallenge([
    "iv",
    "sm"]));        // NO