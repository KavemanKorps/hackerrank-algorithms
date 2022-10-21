function beautifulDays(i, j, k) {   // [20, 23, 6] -> [20, 21, 22, 23], 6 -> 2
  // Write your code here
  let succs = 0;
  const revNum = parseInt(i.toString().split("").reverse().join(""))    // number in reverse (int)
  let numArr = Array.from({ length: j - i + 1 }, (_, x) => i + x) // [20, 21, 22, 23]
  for (let i = 0; i < numArr.length; i++) {
    if ((numArr[i] - parseInt(numArr[i].toString().split("").reverse().join(""))) % k === 0) succs++;
    // console.log(parseInt(numArr[i].toString().split("").reverse().join("")));
    
  }
  console.log(succs);
}

beautifulDays(20, 23, 6);   // [20, 21, 22, 23]
// DONE