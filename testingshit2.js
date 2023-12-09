let newArr = [1, 2, 3, 4, 5, 6];
let count = 0;
for (let i = 0; i < newArr.length; i++) {
    if (count < 100) {
        console.log(newArr[i]);
    }
    if (i == 4) i = -1;
    count++;
}
