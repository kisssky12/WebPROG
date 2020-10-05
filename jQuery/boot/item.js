// item.js
$(document).ready(function () {
    // $선택자를 준비해서 다음 function을 실행하십시오.

    let page = window.location.pathname;
    let jspage = page.substring(page.lastIndexOf('.') + 1);
    page = page.substring(page.lastIndexOf('/') + 1, page.lastIndexOf('.'));
    console.log(page); // 카테고리로 사용

    $('.nav-item').on('click', function () {
        // 선택자('사용할 nav-item').on('click'클릭이벤트에 function)
        $('.nav-item').removeClass('active');
        // .removeClass('active')로 선택한 요소에서 클래스 값을 제거할 수 있습니다.
        $(this).addClass('active');
        //(this).addClass('active') - bean.html에 보면 active라고 있음 (거기 실행할려고)
    });

    if (jspage == 'jsp') {
        // jsp page.
        $('#carouselExampleIndicators').css('display', 'none');
        $('#carouselExampleIndicators').after($('<div />').css('height', '23px'));
        $(data).each(function (idx, obj) {
            if (obj.item_no == localStorage.getItem('itemNo')) {
                createContentItem(obj);
            }
        });
    } else {
        // html page.
        let grepData = $.grep(data, function (a, b) {
            return a.category == page;
        });
        $(grepData).each(function (idx, obj) {
            createRowItem(obj);
        });
    }

});

function createContentItem(item) {
    let div1 = $('<div />').addClass('col-lg-12 col-md-12 mb-4');
    let div2 = $('<div />').addClass('card h-100');
    let a1 = $('<a />').attr('href', item.link + '?item_no=' + item.item_no);
    let img1 = $('<img />').addClass('card-img-top').attr({
        'src': item.image,
        'alt': item.alt
    }); //중괄호 {키:벨류}
    let div3 = $('<div />').addClass('card-body');
    let h_4 = $('<h4 />').addClass('card-title');
    let a2 = $('<a />').attr('href', item.link + '?item_no=' + item.item_no).html(item.item + "(" + item.item_no + ")");
    let h_5 = $('<h5 />').html(new Intl.NumberFormat('ko-KR', {
        style: 'currency',
        currency: 'KRW'
    }).format(item.price)); // 원화 표시하는 방법
    let p1 = $('<p />').addClass(item.link + '?item_no=' + item.item_no).html(item.content);
    let div4 = $('<div />').addClass('card-footer');
    let star = '';
    let cnt = Math.floor(item.star); // Math
    for (let i = 0; i < cnt; i++) {
        star += '&#9733;';
    }
    let half = item.star - cnt;
    if (half) {
        star += '&#9734;';
    }

    let small = $('<small />').addClass('text-muted').html(star);
    a1.append(img1);
    div3.append(h_4, h_5, p1);
    h_4.append(a2);
    div4.append(small);
    div2.append(a1, div3, div4);
    div1.append(div2);

    $('.container .row .row').append(div1);
}

function createRowItem(item) {
    let div1 = $('<div />').addClass('col-lg-4 col-md-6 mb-4');
    let div2 = $('<div />').addClass('card h-100');
    let a1 = $('<a />').attr('href', item.link + '?item_no=' + item.item_no);
    let img1 = $('<img />').addClass('card-img-top').attr({
        'src': item.image,
        'alt': item.alt
    }); //중괄호 {키:벨류}
    let div3 = $('<div />').addClass('card-body');
    let h_4 = $('<h4 />').addClass('card-title');
    let a2 = $('<a />').attr('href', item.link + '?item_no=' + item.item_no).html(item.item + "(" + item.item_no + ")");
    let h_5 = $('<h5 />').html(new Intl.NumberFormat('ko-KR', {
        style: 'currency',
        currency: 'KRW'
    }).format(item.price)); // 원화 표시하는 방법
    let p1 = $('<p />').addClass(item.link + '?item_no=' + item.item_no).html(item.content);
    let div4 = $('<div />').addClass('card-footer');
    let star = '';
    let cnt = Math.floor(item.star); // Math
    for (let i = 0; i < cnt; i++) {
        star += '&#9733;';
    }
    let half = item.star - cnt;
    if (half) {
        star += '&#9734;';
    }

    let small = $('<small />').addClass('text-muted').html(star);
    a1.append(img1);
    div3.append(h_4, h_5, p1);
    h_4.append(a2);
    div4.append(small);
    div2.append(a1, div3, div4);
    div1.append(div2);

    $('.container .row .row').append(div1);
}