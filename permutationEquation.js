function permutationEquation(p) {
    let newArr = [];
    for (let i = 1; i < p.length + 1; i++) {
        let temp = p[i-1];
        newArr.push(p[temp - 1]);
    }
    console.log(newArr);
}

permutationEquation([5, 2, 1, 3, 4]);   // [4, 2, 5, 1, 3]
permutationEquation([2, 3, 1]);         // [2, 3, 1]
