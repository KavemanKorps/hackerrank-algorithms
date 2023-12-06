// it doesn't fucking matter if there's an equal amount of bugs or not. 
// returns either YES, or NO:
function ladybugs(s) {
    // this duplicate needs to have duplicates:
    let loners = {};
    let noUndies = s.split("").filter(a => a != "_").join("");

    for (let i = 0; i < noUndies.length; i++) {
        if (i % 2 == 0 && s[i + 1] !== s[i]) {
            loners[s[i]] = i;
        }
    }



    // let noUndies = s.split("").filter(a => a != "_").join("");
    // console.log(noUndies);
};

ladybugs("YYR_B_BR");   // 2 undies, 2 changes. Should look like this after:
ladybugs("RBY_YBR");    // 1 undie, 3 changes

