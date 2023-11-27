// THIS IS SUPPOSED TO RETURN A "LONG INTEGER". Also accepts Long integer as param.
// MAYBE I CAN USE REGEXES HERE?
// could also use concat() method at some point. 
function repeatedString(s, n) { // "aba", 10
    // func. to get number of A's in a string:
    const getAs = (str) => str.split("").filter(a => a == "a").length; 
    let asPerStr = getAs(s);
    let repetitions = Math.floor(n / s.length);   // 3.33 original, 3 now
    let remaining = n % s.length;     // 1 (str characters remaining)
    let totalAs = asPerStr * repetitions

    let leftovers = s.substring(0, remaining);
    let asLeft = getAs(leftovers);

    console.log(totalAs + asLeft);
    // REMAINDER: x % y. Checks how many times "y" can fit in "x". Returns the remainder.
}
// repeatedString("abcac", 10);   
repeatedString("aba", 10);      // abaabaaba|a, 3.33, 1 a remaining. 1 letter remaining
repeatedString("abcac", 10);    // abcacabcaca|, 2. None remaining
repeatedString("abcaca", 10); 
// repeatedString("abcaca", 10);   // abcacabcac, 1.66, 2 a's remaining. 4 letters remain.

// ITS IMPOSSIBLE FOR THE REMANDER TO NOOOT START FRESH (HTMS)
// GOOD IDEA: USE SPLICE() ON REMAINDER PORTION OF STRING.

repeatedString("cfimaakj", 554045874191);    // ---> 138511468548. Length of init string: 8.
// 554,045,874,191. Strs can contain max of 9,007,199,254,740,991
// arrays can contain max of 4,290,000,000. 554,045,874,191.

// cfimaakjcfimaakjcfimaakjcfimaakjcfimaakjcfimaakjcfimaakjcfimaakjcfimaakjcfimaakjcfimaakjcfimaakj......
// repeatedString("a", 100000000);    // THIS IS ONE HUNDRED MILLION (100,000,000) -> 100000000
