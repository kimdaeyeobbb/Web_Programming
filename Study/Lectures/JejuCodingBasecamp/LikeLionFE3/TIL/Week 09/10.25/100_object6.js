const me = {
    name: "pung",
    address: "경기도",
    running: function (weight) {
        weight.down();
    },
    eating: function (weight) {
        weight.up();
    },
};

const weight = {
    kg: 76,
    up: function () {
        this.kg++;
    },
    down: function () {
        this.kg--;
    },
};

me.running(weight);
console.log(weight.kg)
me.running(weight)
console.log(weight.kg)