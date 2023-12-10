function happyLadybugs(s) {
    let newArr = s.split("");
    let targetInd;  // index of undie to move to.
    let targetVal;
    let endReached = false;

    let noUndies = Array.from(new Set([...newArr.filter(a => a != "_")]));
    let unis = {}

    for (let i = 0; i < noUndies.length; i++) {
        unis[noUndies[i]] = false;
    };

    // console.log(unis);
    // idea: make dict of all unique letters, initally set them to false.

    while (true) {
        // console.log(targetInd, targetVal);
        if (Object.values(unis).every(a => a === true)) endReached = true;
        if (endReached) break;

        for (let i = 0; i < newArr.length; i++) {
            let curr = newArr[i];
            let left = i == 0 ? false : newArr[i - 1];
            let right = i == s.length - 1 ? false : newArr[i + 1];

            if (curr == "_") continue;
    
            // Look for isolates...
            if (!targetInd) {
                // isolate found:     
                if (right && right == "_" && left != curr) {
                    targetInd = i + 1;
                    targetVal = curr;
                    break;
                }
                else if (left && left == "_" && right != curr) {
                    targetInd = i - 1;
                    targetVal = curr;
                    break;
                }
            }
            // by this point, we are searching for possible matches:
            else {
                if (curr == targetVal && i != targetInd - 1) {
                    newArr[i] = "_";
                    newArr[targetInd] = curr;
                    targetInd = undefined;
                    targetVal = undefined;
                    break;
                } 
            }
        }
        // console.log(newArr.join(""), unis);
    }
    console.log(newArr.join(""));
}
// doesn't work b/c when it reaches R for the first match, it already fucking exits out!
// happyLadybugs("DFQ_QFD");       // DFQ_QFD -> DFQQ_FD -> D_QQFFD -> DDQQFF_
happyLadybugs("YYR_B_BR");      // YYR_B_BR -> YYRRB_B_ -> YYRRBB__
happyLadybugs("DD__FQ_QQF");    // DD__FQ_QQF -> DD_FFQ_QQ_ -> DD_FFQQ_Q_ -> DD_FFQQQ__  
// ---> DD_FFQQQ__. Same with this one!  THAT IS THE CAUSE OF THE PROBLEM
