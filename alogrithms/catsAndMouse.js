// function catAndMouse(x, y, z) {
//     let cats = {"Cat A": x, "Cat B": y};
//     //for (let i = 0; i <= Math.max(Object.values(cats)); i++) {
//     while (true) {
//         () => {
//             cats["Cat A"]++
//             cats["Cat B"]--
//         }

//         if (cats["Cat A"] === z) return "Cat A";
//         else if (cats["Cat B"] === z) return "Cat B";
//         else return "Mouse C"; 
//     }
// }

function catAndMouse(x, y, z) {
    let cats = {"Cat A": x, "Cat B": y};

    const calibrate = (cat) => {
        cats[cat] < z ? cats[cat]++ : cats[cat]-- 
     } 

    //for (let i = 0; i <= Math.max(Object.values(cats)); i++) {
    for (let i = 0; i <= 10; i++) {
    //   cats["Cat A"]++
    //   cats["Cat B"]--

    calibrate("Cat B");
    calibrate("Cat A");
    

      if (cats["Cat A"] === z) return "Cat A";
      else if (cats["Cat B"] === z) return "Cat B";
      else return "Mouse C"; 
    }
}

console.log(catAndMouse(2, 5, 4));      // Cat B