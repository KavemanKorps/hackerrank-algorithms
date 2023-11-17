function extraLongFactorials(n) {
  // Write your code here
  let numArr = Array.from({ length: n - 1 + 1 }, (_, x) => 1 + x).reverse(); // range arr
  console.log(numArr.reduce((a, b) => a * b).toLocaleString("fullwide", {useGrouping:false}));
}

extraLongFactorials(25)
//console.log((1.5511210043330984e+25).toLocaleString("fullwide", {useGrouping:false}));

// 1.5511210043330984e+25 -> 1.551121e+25 -> 15511210043330985984000000

// 15511210043330983907819520
//15511210043330984000000000