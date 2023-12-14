function gridChallenge(grid) {
    function alpha(str) {
        return str.split("").sort().join("");
    }
    for (let i = 0; i < grid.length; i++) {
        let first;
        let second;

        if (i + 1 < grid.length) {
            first = alpha(grid[i]);
            second = alpha(grid[i + 1]);
        } else break;

        // console.log(first);
        // console.log(second);

        for (let x = 0; x < grid.length; x++) {
            if (first.charAt(x) > second.charAt(x)) return "NO";
        }
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