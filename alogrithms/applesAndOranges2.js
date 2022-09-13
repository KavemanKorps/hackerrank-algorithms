// function applesAndOranges(7, 11, 5 (a), 15 (b), [-2, 2, 1], [5, -6]) {     // -> 1....1 
// (start house (s), end house (t), apple tree (a), orange tree(b))
// APPLE ALWAYS TO LEFT; ORANGE TO RIGHT.

function countApplesAndOranges(s, t, a, b, apples, oranges) {
  let housePoints = Array.from({ length: t - s + 1 }, (_, i) => s + i)

  const targetFruit = (array, f) => array.map(f => tree + f).filter(f => housePoints.includes(f)).length
  
  let aPositions = targetFruit(apples, a)
  let oPositions = targetFruit(oranges, b)
  
  console.log(`${aPositions}\n${oPositions}`)
}

countApplesAndOranges(7, 11, 5, 15, [-2, 2, 1], [5, -6]);
