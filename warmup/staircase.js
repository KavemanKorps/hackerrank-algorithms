// function staircase(n) {
//   // Write your code here
//   let hashArr = Array(n).fill('#');
//   for (let i = 0; i <= hashArr.length - 1; i++) {
//     let currArr = hashArr.map(x => hashArr.indexOf(x) <= hashArr.indexOf(hashArr.length - (i + 1)) ? " " : "x");
//     console.log(currArr);
//   }
// }

// staircase(4);

function staircase(n) {
  let hashArr = Array(n).fill("#");
  let currSpaces = hashArr.length - 2;
  for (let i = 0; i < n; i++) {  // num of arrays
    //let currArr = hashArr.map(a => hashArr.indexOf(a) <= currSpaces ? "-" : "#");   // I KNOW WHY THIS DON'T WORK: '#' IS 0
    //let currArr = hashArr.map(a => hashArr.indexOf(a));
    let currArr = [...hashArr];
    for (let a = 0; a < hashArr.length; a++) {
      if (a <= currSpaces) {
        currArr[a] = " "
      } else {
        currArr[a] = "#"
      }
    }
    console.log(currArr.join(""))
    currSpaces--;
  } 
}

staircase(4);
// [ '#', '#', '#', '#' ]