function func1() {
    var num1 = 10;
    var num2 = 20;

    var func2 = function () {
        var num2 = 50;
        var num3 = 60;

        num1 = num1 + num2 + num3; // 유의점

        console.log(num1);
    };

    func2();
};

func1();

console.log(num1);

var func3 = function () {
    var num4 = 100;

    return num1 + num4;
};


func3();