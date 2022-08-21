// function applesAndOranges(7, 11, 5 (a), 15 (b), [-2, 2, 1], [5, -6]) {     // -> 1....1 
// (start house (s), end house (t), apple tree (a), orange tree(b))
// APPLE ALWAYS TO LEFT; ORANGE TO RIGHT.

function countApplesAndOranges(s, t, a, b, apples, oranges) {
  // Write your code here
  // const range = (start, stop) => Array.from({ length: stop - start + 1 }, (_, i) => start + i)
  // let housePoints = range(s, t);         // [ 7, 8, 9, 10, 11 ]   GOOD  
  let housePoints = (s, t) => Array.from({ length: t - s + 1 }, (_, i) => s + i)


  // const targetFruit = (array, tree) => array.map(f => tree + f).filter(f => housePoints.includes(f)).length
  // let aPositions = targetFruit(apples, a)
  // let oPositions = targetFruit(oranges, b)

  let aPositions = apples.map(apple => a + apple).filter(apple => housePoints.includes(apple)).length         
  // [ 3, 7, 6 ]
  let oPositions = oranges.map(orange => b + orange).filter(orange => housePoints.includes(orange)).length
  // [ 20, 9 ]

  console.log(`${aPositions}\n${oPositions}`)   
}

countApplesAndOranges(7, 11, 5, 15, [-2, 2, 1], [5, -6]);
// OPTIMIZE THIS CRAP


/*  
  * The function accepts following parameters:
  *  1. INTEGER s                 (starting/ending point of the house)
  *  2. INTEGER t
  *  3. INTEGER a                 (A & B: location of apple and orange tree, respectively)
  *  4. INTEGER b
  *  5. INTEGER_ARRAY apples
  *  6. INTEGER_ARRAY oranges
*/