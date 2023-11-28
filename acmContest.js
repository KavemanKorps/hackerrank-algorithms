function acmTeam(people) {
    // Write your code here
    let template = Array(people[0].length).fill("0");     // [ 0, 0, 0, 0, 0 ], good.
    let max = people[0].length;
    let goodTeams = 0;
    // get string 1
    for (let i = 0; i < people.length; i++) {
        // get string 2
        for (let y = i + 1; y < people.length; y++) {
            // loop over the strings themselves
            for (let x = 0; x < max; x++) {
                console.log(template);
                if (people[i][x] == "1" || people[y][x] == "1") template[x] = "1";
                if (template.every(elem => elem === "1")) {
                    // console.log(template);
                    goodTeams++;
                    template = template.map(elem => elem = "0");
                }
            }
        }
    }
    // console.log([max, goodTeams]);
}
acmTeam(["10101", "11110", "00010"]);                   // [5, 1] (5 possible topics, only 1 team knows all, (1, 2))
// acmTeam(["10101", "11100", "11010", "00101"]);          // [5, 2]
// acmTeam(["11101", "10101", "11001", "10111", "10000", "01110"]);    // [5, 6]. Returns [5, 8] instead.


// an extra unessecary loop is being made for every element.

// for (let i = 0; i < 5; i++) {
//     for (let j = i + 1; j < 5; j++) {
//         console.log(`(${i}, ${j})`);
//     }
// }