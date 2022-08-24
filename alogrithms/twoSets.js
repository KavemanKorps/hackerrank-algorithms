function getTotalX(a, b) {
    // Write your code here
    let aCopy = [...a];
    let bCopy = [...b];

    let trooba = [];
    for (let i = a[a.length - 1]; i <= b[0]; i++) {
        // aCopy.filter(num => i % num === 0);
        // bCopy.filter(num => num % i === 0);
        a.every(num => i)

        //console.log(i);
      }

    // console.log(`${aCopy}\n${bCopy}`);
    console.log(bCopy.length);
}

getTotalX([2, 4], [16, 32, 96])     // 3
getTotalX([2, 6], [24, 36])         // 2