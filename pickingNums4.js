// DONE
function pickingNumbers(a) { 
  let aCopy = [...a];
  let arrs = [];

  while (aCopy.length) {
    let minNum = Math.min(...aCopy);
    let chunk = [...aCopy.filter(i => i - minNum <= 1)]; // filter doesn't change 1st array
    if (chunk.length) {
      arrs.push(chunk);
      aCopy = aCopy.filter(i => !chunk.includes(i));      
    }
  }
  // console.log(arrs); 
  console.log(Math.max(...arrs.map(i => i.length)));
}

pickingNumbers([4, 6, 5, 3, 3, 1]);