function jumpingOnClouds(c, k) {
    let energy = 100;
    let n = c.length;
    for (let i = 0; i < c.length; i += k) {
        console.log(i);
        if (c[(i + k) % n] == 0) energy -= 1;
        else energy -= 3;
    }
    console.log(energy);
}

// jumpingOnClouds([0, 0, 1, 0], 2);   // CORRECT. Only iterates the i values 0 and 2.
jumpingOnClouds([1, 1, 1, 0, 1, 1, 0, 0, 0, 0], 3); // expected: 80. Returns 94.