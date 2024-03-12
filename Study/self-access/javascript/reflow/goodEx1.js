function onClick() {
    const $ul = document.querySelector('ul');
    let list = '';
    for (let i=0; i<100; i++){
        list += '<li>${i}</li>';
    }
    $ul.innerHTML = list;
}

//  단 1번의 reflow, repaint가 발생한다.