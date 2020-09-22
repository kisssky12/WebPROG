var sum = 0;

function aryFunc() {
    var numbers = [45, 28, 22, 10, 55];
    numbers.forEach(callBackFunc);
    console.log(sum);
    document.getElementById("ary").innerHTML = sum;
}


    function callBackFunc(v, i, a) {
        sum += v;
    }