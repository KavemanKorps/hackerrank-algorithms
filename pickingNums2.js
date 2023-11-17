function pickingNums(a) {
  let aCopy = [...a];
  let current = [];
  for (let i = 0; i < a.length; i++) {
    // if (i > 0) console.log(a[i] - a[i - 1], !(a[i] - a[i - 1] <= 1));   
        // 0 false
        // 1 false
        // 0 false
        // 2 true
        // 0 false
        // 1 false
        // 0 false
        // 0 false
        // undefined

    if (i > 0 && !(a[i] - a[i - 1] <= 1)) {
      current.push(aCopy.slice(0, i));
    }   
  }
  console.log(aCopy)
}

console.log(pickingNums2([1, 1, 2, 2, 4, 4, 5, 5, 5]));