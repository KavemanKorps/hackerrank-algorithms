// CHEATING HERE:
function happyLadybugs(s) {
    let newArr = s.split("");

    // check if arr contains at least two of every value:
    let uniqueValues = new Set(newArr);
    let double = [...uniqueValues].filter(a => a !== "_").every(value => newArr.filter(element => element === value).length >= 2);

    function grouped(arr) {
        // what are we doing? check if every value has an adjacent identical one
        for (let i = 0; i < arr.length; i++) {
            let curr = arr[i];
            let left = i == 0 ? false : arr[i - 1];
            let right = i == arr.length - 1 ? false : arr[i + 1];
    
            if (curr != "_" && (right && right == curr || left && left == curr)) {
                continue;
            }   else return false;
        }
        return true;
    }

    // if arr contains at least one undie and two of every value, true. 
    if (newArr.includes("_")) {
        if (double) console.log("YES");
        else console.log("NO");
    } 
    // if no undies, grouped(newArr) MUST be true:
    else {
        if (grouped(newArr)) console.log("YES");
        else console.log("NO");
    }
}

happyLadybugs("YYR_B_BR");      // YYR_B_BR -> YYRRB_B_ -> YYRRBB__
happyLadybugs("DD__FQ_QQF"); 
happyLadybugs("AACCDD");
happyLadybugs("ABACCBDD_FF");
happyLadybugs("AABBC");