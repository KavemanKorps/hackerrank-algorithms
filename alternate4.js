function alternate(s) {
    let curr = 0;
    let set = [...new Set(s)];

    // console.log(set);

    // these two loops go over "set"
    for (let i = 0; i < set.length; i++) {
        for (let u = i + 1; u < set.length; u++) {
            
            let str = "";

            for (let x = 0; x < s.length; x++) {
                if (s[x] == set[i] || s[x] == set[u]) {
                    str = str + s[x];
                }

                console.log(set[i], set[u], s[x], str);
            }

            str = str.split("").filter((char, index, array) => char !== array[index + 1]);
            console.log(str); 
            console.log(""); 


            
            if (str.length > curr) curr = str.length;
        }
    }
    // return curr;
}

console.log(alternate("abaacdabd")); 

console.log(alternate("asvkugfiugsalddlasguifgukvsa"));

alternate("asvkugfiugsalddlasguifgukvsa");
