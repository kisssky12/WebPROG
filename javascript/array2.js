
function aryFunc() {
    var numbers = [45, 28, 22, 10, 55];
    var sum = 0;
    numbers.forEach(callBackFunc);
    // numbers.forEach(function(val,idx,ary){ //매개값 val idx ary 
    // console.log(val,idx,ary)
    // sum += val;
    // });

    function callBackFunc(v, i, a) {
        sum += v;
    }
    console.log(sum);
    document.getElementById("ary").innerHTML = sum;
}

var num1 = 10;
var num1 = "hello";
console.log(num1);

let num2 = 10;
console.log(num2);

const num3 = 10; // final 같은 개념

let p1 = {
    name: "Hong",
    age: 20
}

let p2 = {
    name: "Park",
    age: 20
}

let p3 = {
    name: "Choi",
    age: 20
}

let persons = [p1, p2, p3];
persons.forEach(function (a, b, c) {
    // console.log(a, b, c);
    // console.log(a.name + ", " + a.age);
});

persons.sort(function (a, b) { //배열의 요소를 적절한 위치에 정렬한 후 그 배열을 반환.
    if (a < b) return -1;
    else return 1;
});

persons.forEach((a, b, c) => {
    console.log(`value: ${a.name}, age: ${a.age}, index:${b}`);
});

// numbers = [45, 38, 66, 92, 18, 100]
// numbers.sort(function (a, b) {
//     return a - b; // -1값이 오름차순, +1값이 내림차순.
// })
// numbers.sort(); //sort 정렬
// numbers.forEach(function (a) {
//     console.log(a);
// });

numbers = [45, 38, 66, 92, 18, 100];
numbers.sort(function (a, b) {
    return a - b;
});
console.log(numbers);
console.log("=================================");

let newNum = numbers.map(function (a, b, c) {
    // 배열.map(요소(벨류),인덱스,배열) =>{return 요소});
    console.log(`a: ${a}, b: ${b}, c: ${c}`);
    return a * b;
});

console.log(newNum);

let theNew = newNum.filter(function (a, b, c) {
    return a > 0;
});

console.log(theNew);

let anotherNew = theNew.reduce((a, b, c) => {
    // 배열.reduce((누적값, 현재값, 인덱스, 요소(벨류) => {return 결과}, 초기값0;)
    console.log(`a: ${a}, b: ${b}, c: ${c}`);
    return a > b ? a:b;
},0);
console.log(anotherNew);