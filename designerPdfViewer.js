function designerPdfViewer(h, word) {
  //const alpha = Array.from(Array(26).map((e, i) => i + 65).map(x => String.fromCharCode(x)));

  const alpha = Array.from(Array(26)).map((e, i) => i + 65).map((x) => String.fromCharCode(x)).map(i => i.toLowerCase())

  let mapa = {};
  let max = 0;
  for (let i = 0; i < alpha.length; i++) {
    mapa[alpha[i]] = h[i];   // GOOD
  }

  word.split('').forEach(i => mapa[i] > max ? max = mapa[i] : max)
  console.log(max * word.length)

  //console.log(word.split('').map(i => mapa[i]));
}

designerPdfViewer([1, 3, 1, 3, 1, 4, 1, 3, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5], 'abc'); // 9
designerPdfViewer([1, 3, 1, 3, 1, 4, 1, 3, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 7], 'zaba'); 
// 28 (7 * 4 (letters))
// DONE