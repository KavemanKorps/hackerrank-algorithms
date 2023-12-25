function flatlandSpaceStations(n, c) {
    let maxys = [];
    let currStation = c[0];
    let nextStation = c[1];
    for (let i = 0; i < n; i++) {
        let difference = Math.abs(c[0] - i);   
        let otherDiff = c[1] ? Math.abs(c[1] - i) : false;  
        
        maxys.push(Math.min(difference, otherDiff));
        
        if (difference == otherDiff) c.shift();

        console.log(difference, otherDiff, c);
    }
};

flatlandSpaceStations(5, [0, 4]);