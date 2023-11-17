// SUCCESS
function countApplesAndOranges(s, t, a, b, apples, oranges) {
  // Write your code here
  //let housePoints = Array.from({ length: t - s + 1 }, (_, i) => s + i)
  //let houseSet = new Set(housePoints);
  let houseSet = new Set(Array.from({ length: t - s + 1 }, (_, i) => s + i));

  // let aNum = 0;
  // let oNum = 0;
  let aPositions = apples.map(i => a + i);
  let oPositions = oranges.map(i => b + i);

  // const targetFruit = (array) => array.filter(f => housePoints.includes(f)).length
  const targetFruit = (arr) => arr.filter(f => houseSet.has(f)).length

  
  // console.log(`${aNum}\n${oNum}`)
  console.log(`${targetFruit(aPositions)}\n${targetFruit(oPositions)}`)
  //console.log(targetFruit(aPositions))
  // console.log(`${aPositions}\n${oPositions}`)
}

countApplesAndOranges(7, 11, 5, 15, [-2, 2, 1], [5, -6]);