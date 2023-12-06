function ladybugs(s) {
    // RBY_YBR

    let firstIndices = {};    // { R: 0, B: 1, Y: 2 }
    let firsts = "";    // RBY_
    let seconds = s;    // YBR
    for (let i = 0; i < s.length; i++) {
        let curr = s[i];
        if (!Object.keys(firstIndices).includes(curr) && curr !== "_") {
            firstIndices[curr] = i;
            seconds = seconds.substring(i, seconds.length);
        }
        if (!firsts.includes(curr)) firsts = firsts + curr;
    }

    for (let i = 0; i < seconds.length; i++) {
        let curr = seconds[i];
        if (curr !== "_") {

        }

        // if (Object.keys(firsts).includes(curr) && (!Object.values(firsts).includes(i))) {
        //     let str = str.substring(0, firsts[curr])
        // }
    }

    console.log(firsts);
    console.log(seconds);
};

ladybugs("RBY_YBR");
// ladybugs("B_RRBR");     // BBRRR_
