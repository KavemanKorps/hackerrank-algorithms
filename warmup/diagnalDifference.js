// SUCCESS

function diagonalDifference(arr) {
  // Write your code here
  // [[1 2 3], [4 5 6], [9 8 9]]  "square matrix" is just a nested array lol
  let lr = 0;
  let rl = 0;
  
  let curr = 0;
  for (let a = 0; a < arr.length; a++) {
    lr += arr[a][curr];
    curr++;
    rl += arr[a][arr.length - curr];
  } 
  return Math.abs(lr - rl)
}

console.log(diagonalDifference([[1, 2, 3], [4, 5, 6], [9, 8, 9]]))