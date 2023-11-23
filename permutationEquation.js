function permutationEquation(p) {
    let newArr = [];
    // iterates nums 1-3
    for (let i = 1; i < p.length + 1; i++) {
        let index = p.indexOf(i) + 1;
        let index2 = p.indexOf(index) + 1;
        newArr.push(index2);

        // initially 3. what's the index of 1? 2 (or, in the sequence, 3)
        // let index = p.indexOf(i + 1);                   
        // let index2 = p.indexOf(index + 1);
        // newArr.push(index2);
    }
    console.log(newArr);
}


    // for (let i = 1; i < p.length + 1; i++) {
    //     let temp = p[i-1];
    //     newArr.push(p[temp - 1]);
    // }
    // console.log(newArr);

permutationEquation([5, 2, 1, 3, 4]);   // [4, 2, 5, 1, 3]
permutationEquation([2, 3, 1]);         // [2, 3, 1]        --> returns [3, 1, 2] instead
