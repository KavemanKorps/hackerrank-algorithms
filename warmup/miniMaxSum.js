// SUCCESS

function miniMaxSum(arr) {    // [1, 2, 3, 4, 5].....min: 10, max: 14
  // Write your code here. TODO: MAKE FUNC THAT REDUCES SO I DONT HAVE TO USE REDUCE 3 TIMES
  const setItem = new Set(arr);
  if (!(setItem.size <= 1)) {     // if the items are NOT unique.

    let maxiSum = arr.filter(a => a !== Math.min(...arr)) //.reduce((a, b) => a + b);
    let miniSum = arr.filter(a => a !== Math.max(...arr)) //.reduce((a, b) => a + b);
    //console.log(miniSum, maxiSum);
    console.log([miniSum, maxiSum].map(arr => arr.reduce((a, b) => a + b)).join(" "))

  } else {
    console.log(`${arr.slice(0, arr.length - 1).reduce((a, b) => a + b)} `.repeat(2));
  }         
}

miniMaxSum([1, 2, 3, 4, 5]);
miniMaxSum([5, 5, 5, 5, 5]);    // 20 20
