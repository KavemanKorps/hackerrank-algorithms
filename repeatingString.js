function repeatingString(s, n) {
    let newArr = [];
    for (let i = 0; i < n; i % s.length) {
        // if (newArr.length < n && s[i] == "a") newArr.push(s[i]);
        if (newArr.length < n) {
            newArr.push(s[i]);
            // if (s[i] == "a") num++;
            i++;
        }
        else break;
    }
    
    // console.log(newArr.filter(a => a == "a").length);
    console.log(newArr);
}

repeatingString("abcac", 10);   // abcacabcac
repeatingString("aba", 10);     // abaabaabaa, 8 (should be 7)
