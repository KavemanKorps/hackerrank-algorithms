function alternate(s) {
    let count = {};
    for (let i = 0; i < s.length; i++) {
        if (s[i + 1] == s[i]) {
            s = s.slice(0, i) + s.slice(i + 1, s.length);
            i--;
        }

        if (![...Object.keys(count)].includes(s[i])) count[s[i]] = 1;
        else count[s[i]]++;
    }
    console.log(count, s);
}
alternate("abaacdabd");
alternate("abbacddddsdgaa");