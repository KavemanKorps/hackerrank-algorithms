// ([1 1 1 1 1 1], 3, 2) -> 0
// ([1, 2, 1, 3, 2], 3, 2) -> [1, 2], [1, 2] -> 2
// ([4], 4, 1) -> 1

function birthday(s, d, m) {      // d is sum, m is num. of digits
  let arrs = [];
  let sCopy = [...s];

  // [1, 2, 1, 3, 2]
  // [1, 2, 1, 3, 2]
  
  for (let i = 0; i < sCopy.length; i++) {
    let currArr = [sCopy[i]];
    for (let j = 0; j < s.length; j++) {
      if (i !== j) {
        if (currArr.length < m) currArr.push(s[j]);
        else {
          //console.log(currArr);
          arrs.push(currArr);       // IT FUCKING PUSHES EACH PAIR 3X
      
        }
      }
      //if (i !== j) console.log(i, j)  // GOOD
    }
  }
  // arrs = arrs.map(a => a.reduce((x, y) => x + y)).filter(n => n === d).length;
  // arrs = arrs.map(a => a.reduce((x, y) => x + y))
  console.log(arrs)
}

birthday([1, 2, 1, 3, 2], 3, 2);    // -> [1, 2], [1, 2] -> 2
// birthday([4], 4, 1);    // -> [4] -> 1
// birthday([2, 5, 1, 3, 4, 4, 3, 5, 1, 1, 2, 1, 4, 1, 3, 3, 4, 2, 1], 18, 7)  // -> 3
