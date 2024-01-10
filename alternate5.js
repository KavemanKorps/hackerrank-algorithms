function alternate(s) {
    let set = [...new Set(s)];

    // let newStr = s.split("");   // ['a', 'b', 'a', 'a', 'c', 'd', 'a', 'b', 'd']
    let newStr = s;

    for (let i = 0; i < set.length; i++) {
        for (let u = i + 1; u < set.length; u++) {

            // (a, b), (a, c), (a, d)
            for (let x = 0; x < newStr.length; x++) {
                if (newStr[x] !== set[i] || newStr[x] !== set[u]) {
                    newStr.replace(newStr, '');
                    x--;
                    // console.log(true);
                }
            }
        }
        // console.log(newStr);
        // let newStr = s;
    }
    // console.log(newStr);
}
alternate("abaacdabd"); 