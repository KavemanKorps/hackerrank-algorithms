function pickingNums(a) {
  let newArr = a.sort((x, y) => x - y);
  let matches = {};
  let currIndex = 0;
  for (let i = 0; i < a.length; i++) {
    console.log(i, currIndex, newArr[i]);

    if (!Object.keys(matches).includes(currIndex)) {
      matches[currIndex] = [];
    }
    
    if (newArr[i] - newArr[currIndex] <= 1) {
      matches[currIndex].push(newArr[i]);
    } 
    else {
      currIndex = i;
      matches[currIndex] = [newArr[i]];
    }
  }
  //return matches;
}

console.log(pickingNums([1, 1, 2, 2, 4, 4, 5, 5, 5]));