function happyLadybugs(s) {
    let newArr = s.split("");
    let targetInd;  // index of undie to move to.
    let targetVal;
    let endReached = false;

    for (let i = 0; i < newArr.length; i++) {
        let curr = newArr[i];
        // left and right values of curr
        let left = i == 0 ? false : newArr[i - 1];
        let right = i == s.length - 1 ? false : newArr[i + 1];

        console.log(curr);

        if (curr == "_") continue;

        // Look for isolates...
        // if a right with qualifications is found, continue.
        if (!targetInd) {
            if (right) {
                if (right == curr) {
                    i += 2;
                    continue;
                };

                // isolate found:
                if (right == "_") {
                    targetInd = i + 1;
                    targetVal = curr;
                    i = 0;
                    continue;
                }
            } 
            if (left && left == "_") {
                targetInd = i - 1;
                targetVal = curr;
                i = 0;
            }
        }

        // by this point, we are searching for possible matches:
        else {
            if (curr == targetVal && i != targetInd - 1) {
                newArr[i] = "_"
                newArr[targetInd] = curr;
                targetInd = undefined;
                targetVal = undefined;
                i = 0;
                continue;
            }
        }
    }
}
happyLadybugs("DFQ_QFD");   // DDQQFF_