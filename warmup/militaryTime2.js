function timeConversion(s) {    // input: 07:05:45PM, output: 19:05:45
  // Write your code here
  let numArr = s.split(':');
  const cleanUp = (arr) => arr.join(':').slice(0, 8)

  if (numArr[2].slice(2) === 'AM') {
    if (numArr[0] === '12') {
      numArr[0] = '00'      
      numArr = cleanUp(numArr);
    }
    else {     
      numArr = cleanUp(numArr);
    }
  } 
  else {
    if (numArr[0] === '12') {     
      numArr = cleanUp(numArr);
    }
    else {
      numArr[0] = +numArr[0] + 12
      numArr = cleanUp(numArr);
    }
  }
  console.log(numArr);
}

timeConversion('12:00:00AM')
timeConversion('12:01:00AM')
timeConversion('06:00:00AM')
timeConversion('07:05:45PM')
timeConversion('12:45:54PM')  // 12:45:54

// made it slightly cleaner