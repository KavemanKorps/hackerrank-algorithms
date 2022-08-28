// SUCCESS
function migratoryBirds(arr) {
  let uniques = {};
  let maxys = [];

  arr.map(i => Object.values(uniques).includes(i) ? "" : uniques[i] = 0)    // GOOD OBJ
  arr.map(i => uniques[i] += 1);                        

  const maxValue = Math.max(...Object.values(uniques)); // what's this? max VALUE, not key lol

  for (let pair in uniques) {
    if (uniques[pair] === maxValue) maxys.push(pair)
  }
  return Math.min(...maxys.map(a => +a));
}

console.log(migratoryBirds([1, 2, 2, 3, 3]))    // 2
console.log(migratoryBirds([1, 1, 2, 2, 3, 3]))