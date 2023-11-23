// I could add a base case for if the array is entirely one letter
function repeatedString(s, n) {
    // BASE CASE:
    if (s.length == 1) console.log(n);
    else {
        let newArr = [];
        for (let i = 0; i < n; i++) {
            let temp = s[i % s.length]; 
            if (temp == "a") newArr.push(temp);
        }
        console.log(newArr.length);
    }
}

repeatedString("abcac", 10);   // abcacabcac
repeatedString("aba", 10);     // abaabaabaa, 8 (should be 7)
repeatedString("a", 1000000000000);    // 1000000000000

