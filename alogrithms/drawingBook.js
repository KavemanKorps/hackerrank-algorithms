function pageCount(n, p) {        // 'n' pages long, page 'p'.....(5, 3) -> 1......0 1, 2 3, 4 5
  let pages = [...Array(n + 1).keys()];
  let poga = {"front": 0, "back": 0};

  let chunkedPages = [];
  let index = 0;
  while (index < pages.length) {
    chunkedPages.push(pages.slice(index, 2 + index));     // "chunkify" pages to two-value subarrays
    index += 2;
  }

  let index2 = 0
  // return chunkedPages; p = 3
  //return !chunkedPages[index2].includes(p) RETURNS TRUE
  while (!chunkedPages[index2].includes(p) || !chunkedPages[chunkedPages.length - 1].includes(p)) {
    poga["front"] += 1;
    poga["back"] += 1;
    index2++;
  }


  // for (let i = 0; i < chunkedPages.length; i++) {
  //   if (!chunkedPages[i].includes(p)) poga["front"] += 1;
  //   if (!chunkedPages[chunkedPages.length - 1 - i].includes(p)) poga["back"] += 1;
  //   //else return Math.min(Object.values(poga)) + 1;
  //   // instead of for loop, I could try: 
  //   // while (!chunkedPages[i].inclues(p) || !chunkedPages[chunkedPages.].inclues(p))
  // }

  return poga
  //return Math.min(...Object.values(poga));
  // return Object.entries(chunkedPages);
}

console.log(pageCount(5, 3));