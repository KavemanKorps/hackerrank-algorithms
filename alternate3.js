function alternate(s) {
    let curr = 0;
    let set = [...new Set(s)];

    for (let i = 0; i < set.length; i++) {
        let currCount = 0;
        for (let x = 0; x < set.length - 1; x++) {
            if (s[x] == set[i] || s[x] == set[i + 1]) {
                currCount++;
            }
        }
        if (currCount > curr) curr = currCount;
    }
    return curr;
}
//  TO TEST