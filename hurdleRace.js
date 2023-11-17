function hurdleRace(k, height) {
  let bigga = Math.max(...height) 
  if (k > bigga) return 0;
  else return bigga - k;
}

console.log(hurdleRace(1, [1, 2, 3, 3, 2]))   // 2
console.log(hurdleRace(7, [2, 5, 4, 5, 2]))   // 0