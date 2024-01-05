// damn this tough loool
function alternate(s) {
    let set = [...new Set(s)];
    let combos = {};
    while(set.length >= 2) {
        let a = set[0];
        let b = set[1];
        let curr = b;
        // if (!Object.keys(combos).includes(a + b)) {
        //     combos[a + b] = 1;
        // }
        // remove first instances of a and b before looping:
        s.replace(a, "");
        s.replace(b, "");
        // for (let i = 0; i < s.length; i++) {
        //     if (s[i] == b && curr == a) {
        //         combos[a + b]++;
        //         curr = b;
        //     }
        //     else if (s[i] == a && curr == b) {
        //         combos[a + b]++;
        //         curr = a;
        //     }
        // }
        // set.shift();
    }
    // return Math.max(Object.values(combos));


    console.log(s);
}
alternate("abaacdabd");
