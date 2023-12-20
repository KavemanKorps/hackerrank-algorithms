// INSTEAD OF MOVING A WHOLE ASS PAYLOAD, WHY NOT JUST MOVE THE LAST VALUE FROM POINT A TO POINT B?
function circularArrayRotation(a, k, queries) {
    // Write your code here
    let indices = [];

    let payload = a.slice(0, a.length - 1);
    // a = payload.unshift(a[a.length - 1]);
    console.log(payload);

    // while (k > 0) {
    //     let payload = a.slice(0, a.length - 1);
    //     // a = payload.unshift(a[a.length - 1]);
    //     //a = a[a.length - 1].concat(payload);
    //     console.log(a);
    //     k--;
    // }
    
    // a.forEach((x, index) => queries.includes(index) ? indices.push(x) : null);
    // return indices;
}

circularArrayRotation([3, 4, 5], 2, [1, 2]);

// console.log(circularArrayRotation([3, 4, 5], 2, [1, 2]));        // -> [5, 3]
// console.log(circularArrayRotation([1, 2, 3], 2, [0, 1, 2]));     // -> [2, 3, 1]