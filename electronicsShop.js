function getMoneySpent(keyboards, drives, b) {
  let matches = [];
  for (let k = 0; k < keyboards.length; k++) {
    for (let d = 0; d < drives.length; d++) {
      matches.push(keyboards[k] + drives[d])
    }
  }
  matches = matches.filter((a) => a <= b)
  if (matches.length) {
    return Math.max(...matches);
  } else return -1;
}

console.log(getMoneySpent([3, 1], [5, 2, 8], 10)); // 9
console.log(getMoneySpent([4], [5], 5)); // -1