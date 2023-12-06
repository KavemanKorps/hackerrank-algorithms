function ladybugs(s) {
    let firsts = [];        // B_R
    let leftovers = [];     // RBR
    for (let i = 0; i < s.length; i++) {
        let curr = s[i];
        if (!firsts.includes(curr) || curr == "_") {
            firsts.push(curr);
        } else {
            leftovers.push(curr);
        }
    }
    // console.log(firsts, leftovers);

    // NOW TO THIS:
    while (leftovers.length) {
        for (let y = 0; y < firsts.length; y++) {
            let curr = firsts[y];
            if (firsts[y] == leftovers[0]) {
                firsts.splice(y + 1, 0, curr);
                // leftovers.splice(x, 1);
                leftovers.shift();
            }
        }
    }

    console.log(firsts);
}

ladybugs("RBY_YBR");    
// RRBBYY_
// firsts: RBY_
// leftovers: YBR

// ladybugs("B_RRBR");     // -> BBRRR_