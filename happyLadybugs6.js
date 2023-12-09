function happyLadybugs(s) {
    let newArr = s.split("");
    let targetInd;  // index of undie to move to.
    let targetVal;
    let endReached = false;

    while (true) {
        // console.log(targetInd, targetVal);
        if (endReached) break;

        for (let i = 0; i < newArr.length; i++) {
            let curr = newArr[i];
            let left = i == 0 ? false : newArr[i - 1];
            let right = i == s.length - 1 ? false : newArr[i + 1];

            if (i == newArr.length - 1) endReached = true;
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
    }
    console.log(newArr.join(""));

}
// happyLadybugs("DD_FQ_QQF"); // length: 9
happyLadybugs("DFQ_QFD");   // DDQQFF_
happyLadybugs("YYR_B_BR");  // doesn't work b/c when it reaches R for the first match, it already fucking exits out!
happyLadybugs("DD__FQ_QQF");    // same with this one!  THAT IS THE CAUSE OF THE PROBLEM