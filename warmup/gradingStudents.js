function gradingStudents(grades) {
    let arrCopy = [...grades];
    let newArr = grades.map(i => Math.ceil(i/5)) * 5;
    for (let i=0; i < grades.length; i++) {
        if ((newArr[i] - grades[i]) < 3) {
            arrCopy[i] = newArr[i];
        }
    }
    console.log(arrCopy)
}