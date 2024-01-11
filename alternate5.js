function alternate(s) {
    let set = [...new Set(s)];

    let cutMakers = [];

    for (let i = 0; i < set.length; i++) {
        for (let u = i + 1; u < set.length; u++) {
            let newStr = s.split("").filter(a => a == set[i] || a == set[u]).join("");

            console.log(set[i], set[u], newStr);

            for (let x = 0; x < newStr.length; x++) {
                // ab (length 2)
                if (newStr[x] == newStr[x + 1]) break;
                if (x == newStr.length - 1) cutMakers.push(newStr.length);
            }
        }
    }
    console.log(cutMakers);

    // return cutMakers.length > 1 ? Math.max(...cutMakers) : 0;
}

// console.log(alternate("ab"));
alternate("ab");