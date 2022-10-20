// DONE
function sockMerchant(n, ar) {  // 7, [1, 2, 1, 2, 1, 3, 2] -> 2
  let newArr = [];
  let arCopy = [...new Set(ar)];  // only unique values
  for (let i = 0; i < arCopy.length; i++) {
    let sames = [];
    for (let j = 0; j < ar.length; j++) {
      if (ar[j] === arCopy[i]) sames.push(ar[j])
    }
    newArr.push(sames)
  }
  //console.log(newArr.filter(a => a.length > 1).map(a => Math.floor(a.length / 2)).reduce((a, b) => a + b))
  newArr = newArr.filter(a => a.length > 1)
  if (newArr.length) {
    console.log(newArr.map(a => Math.floor(a.length / 2)).reduce((a, b) => a + b));
  } else console.log(0);
  
  //.map(a => a.length ? Math.floor(a.length / 2) : 0)
  // filter removes arrays with only one value.  map turns arrays into their length divided by two (floored)

  // console.log(newArr.length > 1 
  // ? newArr.filter(a => a.length > 1).map(a => Math.floor(a.length / 2)).reduce((a, b) => a + b)
  // : 0)
}

sockMerchant(7, [1, 2, 1, 2, 1, 3, 2])  // 2
sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20])   // 3 
sockMerchant(4, [3, 3, 2, 2, 2, 2])   // 3
sockMerchant(1, [100])   // 0
sockMerchant(3, [10, 20, 30])   // 0

// const toFindDuplicates = arry => arry.filter((item, index) => arry.indexOf(item) !== index)
// const duplicateElements = toFindDuplicates(arry);
// console.log(duplicateElements);
// DONE