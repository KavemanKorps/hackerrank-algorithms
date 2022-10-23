function saveThePrisoner(n, m, s) { // num. of prisoners, pieces of candy, chair # to start at.
  // Write your code here
  let assigned = [];
  for (let i = s; i <= n + 1; i++) {
    if (i === n + 1) {
      i = 1;
    }
    if (assigned.length < m) {
      assigned.push(i);
    }
    else break;
  }
  console.log(assigned[assigned.length - 1]);
  //console.log(assigned);    // 2, 3, 4, 1, 2, 3 -> [ 2, 3, 4, 1, 2, 3 ]
}

saveThePrisoner(4, 6, 2);   // 3
saveThePrisoner(7, 19, 2);  // 6
saveThePrisoner(3, 7, 3);
saveThePrisoner(352926151, 380324688, 94730870);  // 122129406