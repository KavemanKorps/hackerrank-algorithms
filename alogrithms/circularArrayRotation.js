// ([3, 4, 5], 2, [1, 2]) ->  [3, 4, 5]...[5, 3, 4]...[4, 5, 3] -> a[1] = 5, a[2] = 3 -> 5, 3
function circularArrayRotation(a, k, queries) {   
  // Write your code here
  let a2 = [...a];
  //a2[0] = a2[a2.length - 1];
  for (let i = 0; i < k; i++) {
    a2 = [a2[a2.length - 1]].concat(a2.slice(0, a2.length - 1))   // SLICING GOOD
    // I NEED TO USE "UNSHIFT"
    //console.log(a2) 
  }
  console.log(queries.map(a => a2[a]))
  
}

circularArrayRotation([3, 4, 5], 2, [1, 2]);