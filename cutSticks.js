function cutTheSticks(arr) {
    // Write your code here
    let arrCopy = [...arr];
    let junkArr = [];
    let currJunk = 0;
    // need to loop over array y amount of times (biggest num in arr)
    // instead of removing them altogether, why not just make them 0?
    while (true) {
        let shortest = Math.min(...arrCopy);
        for (let i = 0; i < arrCopy.length; i++) {
            if (arrCopy[i] == 0) {
                arrCopy.splice(i, 1);
                i--;
            }
            else {
                arrCopy[i] -= shortest;
                currJunk++;
            }
        }
        //console.log(arrCopy);
        junkArr.push(currJunk);
        if (arrCopy.length <= 0) break;
    }
    console.log(junkArr);
}

cutTheSticks([1, 2, 3]);