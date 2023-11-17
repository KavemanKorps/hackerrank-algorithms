// SUCCESS
function getTotalX(a, b) {
    let greenlight = [];
    for (let i = a[a.length - 1]; i <= b[0]; i++) {
      if (a.every(num => i % num === 0) && b.every(num => num % i === 0)) {
        //if (a.every(num => i % num === 0)) {
        greenlight.push(i);
      }
    }
    return greenlight.length;
}
console.log(getTotalX([2, 6], [24, 36]))