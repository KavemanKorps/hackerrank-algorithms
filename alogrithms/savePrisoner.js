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
}

saveThePrisoner(4, 6, 2);