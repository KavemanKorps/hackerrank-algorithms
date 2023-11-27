function taumBday(b, w, bc, wc, z) {
    // baseCost = (b * bc) + (w * wc);
    let baseCost, zCost;
    let cheapQuant, expensiveQuant;
    if (bc == wc) {
        console.log((b * bc) + (w * wc));
    } else {
        expensiveQuant = bc > wc ? b : w;
        let cheaper = bc > wc ? wc : bc;        // PRICE 

        zCost = cheaper * (b + w) + (expensiveQuant * z);
        console.log(zCost);
    }
}

taumBday(3, 6, 9, 1, 1);

