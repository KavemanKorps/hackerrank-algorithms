// function applesAndOranges(7, 11, 5 (a), 15 (b), [-2, 2, 1], [5, -6]) {     // -> 1....1 
// (start house (s), end house (t), apple tree (a), orange tree(b))
// APPLE ALWAYS TO LEFT; ORANGE TO RIGHT.

function countApplesAndOranges(s, t, a, b, apples, oranges) {
  // Write your code here
  // const range = (start, stop) => Array.from({ length: stop - start + 1 }, (_, i) => start + i)
  // let housePoints = range(s, t);         // [ 7, 8, 9, 10, 11 ]   GOOD  
  let housePoints = Array.from({ length: t - s + 1 }, (_, i) => s + i)

  //const targetFruit = (array, tree) => array.map(f => tree + f).filter(f => housePoints.includes(f)).length
  function targetFruit(array, tree) {
    return array.map(f => tree + f).filter(f => housePoints.includes(f)).length
  }
  
  // let aPositions = targetFruit(apples, a)
  // let oPositions = targetFruit(oranges, b)

  // console.log(`${aPositions}\n${oPositions}`) 
  console.log(targetFruit(apples, a), targetFruit(oranges, b))  
  // console.log(housePoints)
}

countApplesAndOranges(7, 11, 5, 15, [-2, 2, 1], [5, -6]);
// OPTIMIZE THIS CRAP
// APPERENTLY "FILTER" IS SLOWER THAN OLD FASHIONED FOR LOOP

// CASE 10 IS INSANE. MILLIONS OF LARGE NUMBERS TO COMPUTE
// TODO: USE MEMOIZATION. NOPE, CANT DO THAT. NEED TO ASSUME ALL THE NUMS ARE UNIQUE

/*  
  * The function accepts following parameters:
  *  1. INTEGER s                 (starting/ending point of the house)
  *  2. INTEGER t
  *  3. INTEGER a                 (A & B: location of apple and orange tree, respectively)
  *  4. INTEGER b
  *  5. INTEGER_ARRAY apples
  *  6. INTEGER_ARRAY oranges
*/


// let aPositions = apples.map(apple => a + apple).filter(apple => housePoints.includes(apple)).length         
// // [ 3, 7, 6 ]
// let oPositions = oranges.map(orange => b + orange).filter(orange => housePoints.includes(orange)).length
// [ 20, 9 ]