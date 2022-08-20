// 12:00:00AM: 00:00:00
// 12:00:00AM: 00:00:00
// 07:00:00AM: 07:00:00
// 12:00:00PM: 12:00:00 

function timeConversion(s) {    // input: 07:05:45PM, output: 19:05:45
  // Write your code here
  let numArr = s.split(':');

  if (numArr[2].slice(2) === 'AM') {
    if (numArr[0] === '12') {
      numArr[0] = '00'
      console.log(numArr.join(':').slice(0, 8));
    }
    else {
      console.log(numArr.join(':').slice(0, 8));
    }
  } 
  else {
    if (numArr[0] === '12') {
      console.log(numArr.join(':').slice(0, 8))
    }
    else {
      numArr[0] = +numArr[0] + 12
      console.log(numArr.join(':').slice(0, 8));
    }
  }
}

timeConversion('12:00:00AM')
timeConversion('12:01:00AM')
timeConversion('06:00:00AM')
timeConversion('07:05:45PM')
timeConversion('12:45:54PM')    // 12:45:54

// IF ONLY I CAN MAKE THIS CLEANER 
