// board.js
class Board {
    constructor(boardNo, title, content, writer) { // 생성자.
        this._boardNo = boardNo;
        this._title = title;
        this._content = content;
        this._writer = writer
    }
    // boardNo (getter / setter 메소드)
    get boardNo() {
        return this._boardNo;
    }
    set boardNo(boardNo) {
        this._boardNo = boardNo;
    }
    // title
    get title() {
        return this._title;
    }
    set title(title) {
        this._title = title;
    }
    // content
    get content() {
        return this._content;
    }
    set content(content) {
        this._content = content;
    }
    // writer
    get writer() {
        return this._writer;
    }
    set writer(writer) {
        this._writer = writer;
    }
} // end of class;

let boardDB = [];
boardDB.push(new Board(1, '자바스크립트', '웹언어', '염핑크')); //push 넣음
boardDB.push(new Board(2, '자바', '컴파일', '이정은바보'));
boardDB.push(new Board(3, '오라클', '데이터베이스관리', '도은시경'));

let titles = ['checkbox', 'boardNo', 'title', 'content', 'writer', 'button'];
let table, tr, td, text, checkbox, button;

let defaultNo = boardDB[boardDB.length -1].boardNo;
// Title 영역
function createTitle() {
    tr = document.createElement('tr');
    for (let field of titles) {
        td = document.createElement('th');
        if (field === 'checkbox') { // === 타입까지 다 비교
            checkbox = document.createElement('input');
            checkbox.setAttribute('type', 'checkbox');
            checkbox.onchange = function () {
                let td_chb = document.querySelectorAll('td input[type="checkbox"]');
                // td태그의 input태그 중 타입이 checkbox인 애들.
                for (let i = 0; i < td_chb.length; i++) {
                    td_chb[i].checked = this.checked;
                }
            }
            td.append(checkbox);

        } else if (field === 'button') {
            td.append('상세보기');
        } else {
            text = document.createTextNode(field);
            td.append(text);
        }
        tr.append(td);
    }
    return tr;
}

// Data영역
function getBoardList() {

    document.getElementById('boardNo').value = ++defaultNo;

    table = document.createElement("table");
    table.setAttribute('border', '1');
    table.setAttribute('id', 'tbl');
    table.append(createTitle()); //createTitle Function에서 tr 리턴 받은거 연결

    boardDB.forEach(function (obj, idx) {

        tr = document.createElement('tr');
        tr.setAttribute('id', obj.boardNo)
        table.append(tr);

        for (let field of titles) {
            td = document.createElement('td');

            if (field === 'checkbox') {
                checkbox = document.createElement('input');
                checkbox.setAttribute('type', 'checkbox');
                checkbox.onchange = function () {
                    synchEheckbox();
                };
                td.append(checkbox);

            } else if (field === 'button') {
                button = document.createElement('button');
                button.innerHTML = '상세보기';
                td.append(button);
                button.onclick = showDetail;

            } else {
                text = document.createTextNode(obj[field]);
                td.append(text);
            }
            tr.append(td);
        }
    });
    document.getElementById('main').append(table);
}

let createSeq = function() {
    return ++defaultNo;
};

// insert영역
function insertData() {
    let boardNo = document.getElementById('boardNo').value;
    let title = document.getElementById('title').value;
    let content = document.getElementById('content').value;
    let writer = document.getElementById('writer').value;

    boardDB.push(new Board(boardNo, title, content, writer));

    let tbl = document.getElementById('tbl');
    tr = document.createElement('tr');
    tr.setAttribute('id', boardNo);
    // 체크박스 부분
    td = document.createElement('td');
    checkbox = document.createElement('input');
    checkbox.setAttribute('type', 'checkbox');
    td.append(checkbox);
    tr.append(td);
    // 게시글 번호
    td = document.createElement('td');
    td.append(boardNo);
    tr.append(td);
    // 제목
    td = document.createElement('td');
    td.append(title);
    tr.append(td);
    // 내용
    td = document.createElement('td');
    td.append(content);
    tr.append(td);
    // 작성자
    td = document.createElement('td');
    td.append(writer);
    tr.append(td);
    // 상세보기버튼
    td = document.createElement('td');
    button = document.createElement('button');
    button.innerHTML = '상세보기';
    button.onclick = showDetail;
    td.append(button);
    tr.append(td);
    tbl.append(tr);
}

function getBoard(id) {
    let oneBoard;
    for (let board of boardDB) {

        if (board.boardNo == id) {
            // oneBoard = new Board(board.boardNo, board.title, board.content, board.writer);
            oneBoard = board;
        }
    }
    return oneBoard;
}

function showDetail() {
    let id = this.parentNode.parentNode.id;
    let board = getBoard(id);
    document.getElementById('boardNo').value = board.boardNo;
    document.getElementById('title').value = board.title;
    document.getElementById('content').value = board.content;
    document.getElementById('writer').value = board.writer;
}

function updateData() {
    // element 정보를 가지고 오도록.
    let boardNo = document.getElementById('boardNo').value;
    let title = document.getElementById('title').value;
    let content = document.getElementById('content').value;
    let writer = document.getElementById('writer').value;
    //배열에서 수정
    for (let i = 0; i < boardDB.length; i++) {
        if (boardDB[i].boardNo == boardNo) {
            break;
        }
    }
    console.log(boardDB);

    let trs = document.querySelectorAll('#tbl tr[id]'); //tbl의 tr의 id값

    for (let i = 0; i < trs.length; i++) {
        console.log(trs[i].id, boardNo)

        if (trs[i].id == boardNo) {
            trs[i].children[2].innerHTML = title;
            trs[i].children[3].innerHTML = content;
            trs[i].children[4].innerHTML = writer;
            break;
        }
    }
}
// 전체선택 checkbox와 각 데이터별 checkbox 동기화.
function synchEheckbox() {
    // 1) checkAll ture 가정. 데이터영역에 있는 값 중 하나라도 false
    // 2) checkAll false;
    let th_ckb = document.querySelectorAll('th input[type="checkbox"]');
    let td_ckb = document.querySelectorAll('td input[type="checkbox"]');
    th_ckb[0].checked = true;
    for (let i = 0; i < td_ckb.length; i++) {

        if (!td_ckb[i].checked) {
            th_ckb[0].checked = false;
            break;
        }
    }
}
// 선택한 데이터 삭제.
function deleteChecked() {
    // 화면에서 삭제.
    let checkedNo = [];
    let chks = document.querySelectorAll('td input[type="checkbox"]');

    for (let i = 0; i < chks.length; i++) {

        if (chks[i].checked == true) {
            checkedNo.push(chks[i].parentNode.parentNode.id);
            chks[i].parentNode.parentNode.remove();
        }
    }
    // 배열에서 삭제.
    checkedNo.forEach(function (obj, idx) { // 삭제할 대상 배열 반복.
        for (let i = 0; i < boardDB.length; i++) {

            if (boardDB[i].boardNo == obj) {
                boardDB.splice(i, 1);
                break;

            }
        }
    });
    console.log(boardDB);
    document.querySelectorAll('th input[type="checkbox"]');
}