// YES, this is doable without recursion. Hint: use a do-while loop.

function jumpingOnClouds(c, k) {
    const n = c.length;
    let energy = 100;
    let i = 0;
  
    do {
      i = (i + k) % n;
      energy -= 1 + 2 * c[i];
    } while (i !== 0);
  
    console.log(energy);
}

// jumpingOnClouds([0, 0, 1, 0], 2);                    // CORRECT. Only iterates the i values 0 and 2.
jumpingOnClouds([1, 1, 1, 0, 1, 1, 0, 0, 0, 0], 3);     // expected: 80. Returns 94.