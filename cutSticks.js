function cutTheSticks(arr) {
    // Write your code here
    let junkArr = [];
    let currJunk = 0;
    while (arr.length) {
        // console.log(arr);
        let shortest = Math.min(...arr);
        for (let i = 0; i < arr.length; i++) {
            arr[i] -= shortest;
            currJunk++;
            if (arr[i] <= 0) {
                arr.splice(i, 1);
                i--;
            }
        }
        junkArr.push(currJunk);
        currJunk = 0;
    }
    console.log(junkArr);
};

cutTheSticks([1, 2, 3]);    // [3, 2, 1]....[1, 2, 3] -> [1, 2] (3) -> [1] (2) -> [] (1)
// [1, 2, 3]
// [0, 1, 2]
// [0, 0, 1]
// [0, 0, 0]
