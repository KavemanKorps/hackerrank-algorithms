// DONE

function catAndMouse(x, y, z) {
  let cats = {"Cat A": x, "Cat B": y};
  // Object.values(cats).forEach(v =>  v = Math.abs(v - z));

  Object.keys(cats).forEach(key => cats[key] = Math.abs(cats[key] - z));    
  // subtract cat distance from mouse distance, turn to positive number if negative 

  if (cats["Cat A"] === cats["Cat B"]) {
    return "Mouse C"
  }
  return Object.entries(cats).reduce((min, entry) => entry[1] <= min[1] ? entry : min, [0, +Infinity])[0];
}


console.log(catAndMouse(2, 5, 4));      // Cat B, 2 - 4 = -2 (2), 5 - 4 = (1)
console.log(catAndMouse(1, 3, 2));