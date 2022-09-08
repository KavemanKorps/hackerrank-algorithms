function catAndMouse(x, y, z) {
    let cats = {"Cat A": x, "Cat B": y};
    //for (let i = 0; i <= Math.max(Object.values(cats)); i++) {
    while (true) {
        () => {
            cats["Cat A"]++
            cats["Cat B"]--
        }

        if (cats["Cat A"] === z) return "Cat A";
        else if (cats["Cat B"] === z) return "Cat B";
        else return "Mouse C"; 
    }
}
