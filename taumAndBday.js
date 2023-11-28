function taumBday(b, w, bc, wc, z) {
    b = BigInt(b);
    w = BigInt(w);
    bc = BigInt(bc);
    wc = BigInt(wc);
    z = BigInt(z);

    let baseCost = (b * bc) + (w * wc);

    let expensiveQuant = bc > wc ? b : w;
    let cheaper = bc > wc ? wc : bc;        // PRICE 
    let zCost = (cheaper * (b + w)) + (expensiveQuant * z);

    console.log(baseCost);
    console.log(zCost);
    // console.log(zCost > baseCost ? baseCost : zCost);
}

taumBday(3, 6, 9, 1, 1);    // 12. good
taumBday(5, 9, 2, 3, 4);    // should return 37
taumBday(742407782, 90529439, 847666641, 8651519, 821801924);   // in this case, zCost needs to be returned.

