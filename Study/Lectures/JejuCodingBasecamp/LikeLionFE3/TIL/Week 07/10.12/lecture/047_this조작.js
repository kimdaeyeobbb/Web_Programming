// call

var peter = {
    name: 'Perter Parker',
    sayName: function () {
        console.log(this.name);
    }
}

var bruce = {
    name: "Bruce Wayne",
}

peter.sayName()
peter.sayName.call(bruce)


/* 위의 코드보다 이게 더 깔끔함 */

var peter2 = {
    name: 'Perter Parker',
    sayName: function () {
        console.log(this.name);
    }
}

var bruce2 = {
    name: "Bruce Wayne",
    sayName: function () {
        console.log(this.name);
    }
}


/* apply와의 차이점 */
var peter3 = {
    name: 'Perter Parker',
    sayName: function (느낌표) {
        console.log(this.name + 느낌표);
    }
}

var bruce3 = {
    name: "Bruce Wayne",
    sayName: function () {
        console.log(this.name);
    }
}


peter.sayName()
peter.sayName.call(bruce, '!')