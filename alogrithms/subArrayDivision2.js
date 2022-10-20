// ([1 1 1 1 1 1], 3, 2) -> 0
// ([1, 2, 1, 3, 2], 3, 2) -> [1, 2], [1, 2] -> 2
// ([4], 4, 1) -> 1

function birthday(s, d, m) {
  let arrs = [];
  let sCopy = [...s];
  let currArr = [];
  for (let i = 0; i < sCopy.length; i++) {
    if (currArr.length < m) {
      currArr.push(s[i])
      if (currArr.reduce((a, b) => a + b) < d) {

      }
    }

    // if (currArr.length) {
    //   if (currArr.reduce((a, b) => a + b) < d && currArr.length < m) {
    //     currArr.push(s[i])
    //   }
    //   else {
    //     console.log(currArr);
    //     arrs.push(...currArr);
    //     currArr = [];     // reset currArr
    //   }
    // } 
  }
  //console.log(arrs)
}

birthday([1, 2, 1, 3, 2], 3, 2);