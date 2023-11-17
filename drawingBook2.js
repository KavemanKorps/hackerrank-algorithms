function pageCount(n, p) {
  let poga = {"front": 0, "back": 0}
  let arr = [];
  for (let i = 0; i <= n; i+=2) {
    arr.push([i, i+1]);               // GOOD
  }
  for (let i = 0; i < arr.length; i++) {
    //if (!arr[i].includes(p)) poga["front"]++;
    // if (i > 0 && !arr[arr.length - i].includes(p)) poga["back"]++;
    // else break;
    console.log(arr[i]);
  }
  //console.log(Math.min(...Object.values(poga)));
  //console.log(poga);
}
// this should work
pageCount(5, 3);    // 1, front: [ [ 0, 1 ], [ 2, 3 ], [ 4, 5 ] ]
pageCount(10, 6);   // 2, back: [ [ 0, 1 ], [ 2, 3 ], [ 4, 5 ], [ 6, 7 ], [ 8, 9 ], [ 10, 11 ] ]
// FINISH THIS