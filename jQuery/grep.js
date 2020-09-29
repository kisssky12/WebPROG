// grep.js

let members = [];

members.push({name: "Gim", point: 80});
members.push({name: "Cho", point: 100});
members.push({name: "Ryu", point: 95});
members.push({name: "Lee", point: 50});
members.push({name: "Park", point: 30});

$(members).each((a, b) => {
    console.log(a, b);
});


let grepMem = $.grep(members, (a, b) => {
    console.log(a, b);
    return (a.point > 50 ? a: null);
});

console.clear();
let sum = $(grepMem).map((a, b) => {
    return b.point; 
}).get();
console.log("전체point값: " + sum);
