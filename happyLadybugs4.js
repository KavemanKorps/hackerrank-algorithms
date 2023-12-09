function happyLadybugs(s) {
    let bads = {};
    let newStr = s.split("");
    for (let i = 0; i < s.length; i++) {
        // this is the letter itself
        let curr = s[i];

        // RIGHT SHOULD BE CHECKED FIRST
        // left or right, relative to the found ISOLATE:
        let right;
        let left;

        // if curr in dict, get the left/right indices of the isolate
        if (Object.keys(bads).includes(curr)) {
            right = bads[curr] + 1;
            left = bads[curr] - 1;

            // if either the left or right of the isolate is 
            if (newStr[right] == "_") newStr[right] = curr;
            else if (newStr[left] == "_") newStr[left] = curr;
            bads[curr] = "_";

        }

        // check the togethers
        if (curr == s[i + 1]) {
            // if not in the dict
            if (!Object.keys(bads).includes(curr)) {
                i += 2; 
            }
            // if it is, there's an isolate somewhere...
            else {
                if (right == "_") right = curr;
                if (left == "_") left = curr;
            }
        }
        
        // skip the undies
        else if (curr == "_") continue

        // if isolate, either add them to dict, or...
        else {
            if (!Object.keys(bads).includes(curr)) {
                bads[curr] = i;
            }
        }
    }
    console.log(bads);
    // console.log(newStr);
}
happyLadybugs("DD_FQ_QQF");