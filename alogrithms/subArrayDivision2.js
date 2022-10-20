// ([1 1 1 1 1 1], 3, 2) -> 0
// ([1, 2, 1, 3, 2], 3, 2) -> [1, 2], [1, 2] -> 2
// ([4], 4, 1) -> 1

function birthday(s, d, m) {
  let arrs = [];
  let sCopy = [...s];
  let currArr = [];
  for (let i = 0; i < sCopy.length; i++) {
    for (let j = 0; j < s.length; j++) {
      if (s[i] <= d) currArr.push(s[i]);    // INITIAL STEP

      if (currArr.length < m) {
        () => i !== j ? currArr.push(s[j]) : null
      }

      else {
        arrs.push(currArr);
        currArr = [];
      }
    }
  }
  console.log(arrs)
}

birthday([1, 2, 1, 3, 2], 3, 2);    // -> [1, 2], [1, 2] -> 2