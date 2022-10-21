function extraLongFactorials(n) {
  // Write your code here
  let numArr = Array.from({ length: n - 1 + 1 }, (_, x) => 1 + x).reverse();
  console.log(BigInt(numArr.reduce((a, b) => a * b)));
}

extraLongFactorials(25);