const my = {
    name: 'Danny',
    address: '한양',
    phoneNum: '안알랴줌',
    doit: function (running, programming) {
        running.todo();
        programming.todo();
    }
}

const programming = {
    level: 1,
    todo: function () {
        this.level++;
    }
}

const running = {
    time: 15,
    todo: function () {
        this.time--;
    }
}


my.doit(running, programming)
console.log(`running time: ${running.time}, programming level: ${programming.level} `)