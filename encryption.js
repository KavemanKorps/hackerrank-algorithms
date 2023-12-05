function encryption(s) {
    let box = [];
    // each word here must be 3 chars long.
    let encryptStr = "";
    let newStr = s.split(" ").join("");
    let cieled = Math.ceil(Math.sqrt(newStr.length));       // 4
    let floored = Math.floor(Math.sqrt(newStr.length));     // 3

    // THIS GOOD:
    while (newStr.length) {
        if (newStr.length >= cieled) {
            let substr = newStr.substring(0, cieled);
            box.push(substr);
            newStr = newStr.substring(cieled, newStr.length);          // -> "haveaniceday" -> "aniceday"
        } 
        else {
            box.push(newStr);
            newStr = "";
        }
    }

    while (!box.every(elem => elem == "")) {
        for (let i = 0; i < box.length; i++) {
            let curr = box[i];
            if (curr.length) {
                encryptStr += curr[0];
                box[i] = curr.substring(1, curr.length);
            }
        }
        encryptStr += " ";
        // console.log(box);
    }

    console.log(encryptStr);
};

encryption("have a nice day");      // hae and via ecy
encryption("feed the dog");         // fto ehg ee dd
// have(4)anic(8)eday(12)