let newArr = ["D", "D", "D", "A", "_", "A", "F", "F", "F"];
function areGrouped(ar) {
    let arr = ar.filter(a => a !== "_");
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
console.log(areGrouped(newArr));