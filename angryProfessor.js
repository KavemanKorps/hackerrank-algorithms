function angryProfessor(k, a) {   // min students needed in attendance, student times
    // Write your code here
    // what am I counting? students in attendance
    let n = 0   // num of students in attendance
    a.forEach(i => i <= 0 ? n++ : 0);   // if they arrive on time (<= 0), increment
    // if (n >= k) return 'NO';
    // else 'YES';
    return n;
}

console.log(angryProfessor(3, [-1, -3, 4, 2])); // YES (the class is cancelled)
// prof. wants at least 3 students present, only 2 show up

console.log(angryProfessor(2, [0, -1, 2, 1]));  // NO  (class is not cancelled)
// prof. wants 2, 2 show up