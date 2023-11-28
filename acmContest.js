function acmTeam(people) {
    // Write your code here
    let template = Array(people[0].length).fill(0);
    let max = people[0].length;
    let goodTeams = 0
    // get string 1
    for (let i = 0; i < people.length; i++) {
        // get string 2
        for (let i = 0; i < people.length; i++) {
            // loop over the strings themselves
            for (let i = 0; i < people.length; i++) {
                if (people[i][x] == "1" || people[y][x] == "1") template[x] = "1";
                if (template.every(elem => elem === "1")) {
                    goodTeams++;
                    template.forEach(elem => elem = "0");
                }
            }
        }
    }
    console.log([max, goodTeams]);
}

acmTeam(["10101", "11110", "00010"]);   // [5, 1] (5 possible topics, only 1 team knows all)