var students = [];

students.push("김현동");    // 뒤에 추가.
students[1] = "김도은";     // 주소값 추가.
students.unshift("김다희"); // 앞에 추가.

// students.pop();   // 뒤에서 제거.
// students.shift(); // 앞에서 제거.
// 김다희, 김텐동, 김도은...
// console.log(students[0]);
// console.log(students[1]);

students.splice(1, 0, "이광호", "동광희"); // splice는 새로운 배열X
for (student of students) {
    console.log(student);
}

console.log("!@#$%^&*()_+");

var newStud = students.slice(2, 5); // 첫번째 index, 두번째 index
for (student of newStud) {
    console.log(student);
}

console.log("+_)(*&^%$#@!");

var numbers = [4, 6, 2, 9, 1, 10, 100];
numbers.sort(function (a, b) {
    return a - b; // -값 => 오름차순.
});
for (num of numbers) {
    console.log(num);
}


