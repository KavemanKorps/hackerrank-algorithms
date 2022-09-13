function catAndMouse(x, y, z) {
  let cats = {"Cat A": x, "Cat B": y};
  Object.values(cats).forEach(v =>  v = Math.abs(v - z));


  Object.keys(cats).forEach(key =>  cats[key] = Math.abs(cats[key] - z));
  let min = Object.entries(cats).reduce((min, entry) => entry[1] >= min[1] ? entry: min, [0, +Infinity]);

  return min;
  //return cats;
}


console.log(catAndMouse(2, 5, 4));      // Cat B