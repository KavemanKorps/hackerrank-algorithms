function dayOfProgrammer(year) {
  const zeroPad = (num) => (num.toString().padStart(2, "0"))
  let months = {1: 31, 2: 28, 3: 31, 4: 30, 5: 31, 6: 30, 7: 31, 8: 31, 9: 30, 10: 31, 11: 30, 12: 31};
  let accumDays = 0;
  if (year <= 1917 && year % 4 === 0) {       // JEWLIAN LEAP
    months[2] = 29;
  }
  if (year >= 1919 && year % 400 === 0 && (year % 4 === 0 && year % 100 !== 0)) {       // GREG LEAP
    months[2] = 29;
  }
  if (year === 1918) {    // 1918 NOT LEAP
    months[2] = 14
  }

  for (let m in months) {
    if (accumDays + months[m] < 256) {
      accumDays += months[m];
    } 
    else {
      return `${zeroPad(256 - accumDays)}.${zeroPad(m)}.${year}`
    }
  }
}
console.log(dayOfProgrammer(1984));     // 12.09.1984   (LEAP)
console.log(dayOfProgrammer(2017));     // 13.09.2017 
console.log(dayOfProgrammer(2016));     // 12.09.2016   (LEAP)
console.log(dayOfProgrammer(2100));     
// 13.09.2100   (LEAP)...WRONG. RETURNS 12.
// DOES NOT GET COUNTED AS LEAP. 
// 2100 IS A LEAP YEAR BUT IT WILL BE SKIPPED 
