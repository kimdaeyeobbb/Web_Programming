function onClick() {
    const $ul = document.querySelector('ul');
    for (let i = 0; i < 100; i++) {
        $ul.innerHTML += '<li>${i}</li>';
    }
}

// 100번의 relow, repaint가 발생한다.