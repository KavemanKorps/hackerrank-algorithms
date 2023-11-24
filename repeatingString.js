function repeatedString(s, n) {
    // BASE CASE:
    if (s.length == 1) return n;
    else {
        let count = 0;
        for (let i = 0; i < n; i++) {
            if (s[i % s.length] == "a") count++;
        }
        console.log(count);
    }
}
// repeatedString("abcac", 10);   // THIS IS ONE HUNDRED MILLION (100,000,000) abcacabcac.
// repeatedString("aba", 10);     // abaabaabaa, 8 (should be 7)
// repeatedString("cfimaakj", 554045874191);    // 554,045,874,191
// cfimaakjcfimaakjcfimaakjcfimaakjcfimaakjcfimaakjcfimaakjcfimaakjcfimaakjcfimaakjcfimaakjcfimaakj......

function hola(str) {
    str = str.map(a => a = "$");
    console.log(str);
}

hola(["j", "o", "e"]);


// fuck