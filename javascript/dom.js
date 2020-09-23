{/* <table border='1'>
<tr>
    <th>일요일</th>
    <th>월요일</th>
    <th>화요일</th>
    <th>수요일</th>
    <th>목요일</th>
    <th>금요일</th>
    <th>토요일</th>
    </tr>
</table> */}


let days = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'];
let nums = [1,2,3,4,5,6];

function loadPage() {

    let $table = document.createElement("table");
    $table.setAttribute('border','1');
    let $tr = document.createElement("tr");
    
    for (let day of days) {
        let $th = document.createElement("th");
        let $text = document.createTextNode(day);
        let $td = document.createElement("td");
              
        $th.appendChild($text);
        $tr.appendChild($th);   
    }

    $table.appendChild($tr)
    document.getElementById("bdy").appendChild($table);
    
    let $tr1 = document.createElement("tr1");
    for(let num of nums) {
        let $th = document.createElement("th");
        let $text = document.createTextNode(num);
        let $td = document.createElement("td");
              
        $th.appendChild($text);
        $tr.appendChild($th);

    }
  
    document.getElementById("bdy").appendChild($table);

    // for(var i = 0; i <5; i++) {
    //     for(var i = 0; i <7; i++) {
    //             $th = document.createElement("th");
    //             $text = document.createTextNode(i);
    //     }
    // }    
    // document.getElementById("bdy").appendChild($table)
}

