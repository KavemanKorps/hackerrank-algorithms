function alternate(s) {
    for (let i = 0; i < s.length; i++) {
        if (s[i + 1] == s[i]) {
            // s.replace(s[i], '');
            // console.log(s[i + 1], s[i])
            s = s.slice(0, i) + s.slice(i + 1, s.length);
            i--;
        }
    }
    console.log(s);
}
alternate("abbacddddsdgaa");
