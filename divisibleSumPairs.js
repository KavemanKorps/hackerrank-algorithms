function divisibleSumPairs(n, k, ar) {
  let pairs = [];
  // ar.map((x, y) => (x + y) % k === 0 ? pairs.push([x, y]) : null);
  let arCopy 
  for (let i = 0; i < ar.length; i++) {
    for (let j = 0; j < ar.length; j++) {
      // if (i !== j && (i + j) % k === 0) {
      //   pairs.push([i, j]);
      // }
      if (i !== j && (ar[i] + ar[j]) % k === 0) {
        // console.log(ar[i], ar[j]);
        pairs.push([ar[i], ar[j]]);
      }
      
    }
  }
  //console.log(pairs.filter(arr => !array2.includes(arr))
  console.log(pairs.length / 2);  // JAJAJA LOLOLOL
}

// divisibleSumPairs(6, 5, [1, 2, 3, 4, 5, 6]) => [1, 4], [2, 3], [4, 6] (3)
divisibleSumPairs(6, 5, [1, 2, 3, 4, 5, 6])
// DONE