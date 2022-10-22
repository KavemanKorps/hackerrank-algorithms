// THIS IS STARTING FROM PAGE 1 OR LAST PAGE, SO THOSE ARE COUNTED OUT.

function pageCount(n, p) {        // 'n' pages long, page 'p'.....(5, 3) -> 1......0 1, 2 3, 4 5
  let pages = [...Array(n + 1).keys()];
  let poga = {"front": 0, "back": 0};
  let arr = [];
  for (let i = 0; i <= n; i+=2) {
    arr.push([i, i+1]);               // GOOD
  }  
  // console.log(arr);

  for (let a = 0; a < arr.length; a++) {
    // console.log(arr[arr.length - 1 - a], arr[arr.length - 1 - a].includes(p)); // CORRECT
    // if (!arr[a].includes(p)) poga["front"]++
    // if (!arr[arr.length - 1 - a].includes(p)) poga["back"]++
    if (arr[a].includes(p)) {
      poga["front"] = arr.slice(1, a + 1).length
      poga["back"] = arr.slice(a , arr.length - 1).length
    }
  }
  // console.log(Math.min(Object.values(poga))
  // console.log(arr)
  console.log(Math.min(...Object.values(poga)))
  // console.log(poga);
}


pageCount(5, 3);    // 1, front AND back: [ [ 0, 1 ], [ 2, 3 ], [ 4, 5 ] ]
pageCount(6, 2);    //  1,  front:  [ [ 0, 1 ], [ 2, 3 ], [ 4, 5 ], [ 6, 7 ] ]
pageCount(5, 4);    // 0, back: [[0, 1], [2, 3], [4, 5]]
// DONE