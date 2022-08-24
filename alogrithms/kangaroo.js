// SUCCESS

// function kangaroo(x1, v1, x2, v2) {
//     // Write your code here
//     for (let uno = x1; uno <= 10000; uno += v1) {
//         for (let dos = x1; dos <= 10000; dos += v1) {
//             if (uno === dos) return 'YES';
//         }
//     }
//     return 'NO';
// }

function kangaroo(x1, v1, x2, v2) {
  // Write your code here
  let steppa1 = x1;
  let steppa2 = x2;
  for (let i =0; i <= 10000; i++) {
      if (steppa1 === steppa2) return 'YES';
      steppa1 += v1;
      steppa2 += v2;
  }
  return 'NO';
}

