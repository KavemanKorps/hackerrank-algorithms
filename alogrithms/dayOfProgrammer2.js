function dayOfProgrammer(year) {
  // Write your code here
  let months = {1: 31, 2: 28, 3: 31, 4: 30, 5: 31, 6: 30, 7: 31, 8: 31, 9: 30, 10: 31, 11: 30, 12: 31}; 
  // non-leap by default

  let leftover = 0;
  if (year <= 1917) {       // JEWLIAN
    if (year % 4 === 0) {   // leap year, so feb has 29 days
      months[2] = 29
    }
    else {
      date = `12.09.${year}` // this minus 13 is 1918 date
    }
  }
  if (year === 1918) {       // YEAR 1918
    months[2] = 17           // feb starts at 14th, leaving 17 days 
  }

  else {                     // GREGARIAN 
    if (year % 400 === 0 || year % 4 === 0 && year % 100 !== 0) {
      months[2] = 29
    }
  }
  // console.log(months[2]);
  leftover = 256 - Object.values(months).slice(0, 8).reduce((a, b) => a + b);   // SO FREAKING CLOSE
  console.log(`${leftover}.09.${year}`);
}

dayOfProgrammer(1800);    // FEB 29, 12.09.1800
dayOfProgrammer(2016);    // FEB 29, 12.09.2016
dayOfProgrammer(2017);    // FEB 28, 13.09.2017
dayOfProgrammer(1918);    // FEB 28, 26.09.1918
dayOfProgrammer(1917);    // 13.09.1917
dayOfProgrammer(1741);    // 13.09.1741

// TODO: GET BETTER RT. CODE ITSELF WORKS, BUT I KEEP GETTING RUNTIME ERROR ON HACKERRANK.