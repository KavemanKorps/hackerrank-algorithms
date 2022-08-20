// SUCCESS
function plusMinus(arr) {
    // Write your code here    
  let pos = arr.filter(a => a > 0).length  
  let neg = arr.filter(a => a < 0).length 
  let zero = (arr.length - (neg + pos)) 

  for (let i of [pos, neg, zero]) {
    console.log((i / arr.length).toFixed(6))
  }
}

let newArr = [1, 1, 0, -1, -1];
plusMinus(newArr);

