var person = (function () {
    var age = 15; // 1)

    return {
        name: "Wade",

        getAge: function () {
            console.log(age);
            return age;
        },

        setAge: function (val) {
            age = val;
            console.log(age);
        }
    }
})();   // person 즉시실행함수를 만듦


/*
person 내의 age 변수에 접근하기 위해서는 getAge라는 함수를 통해 접근할 수 있음
getAge함수는 age값을 반환하기 때문이다.
 */

person.getAge();  // 15
person.setAge(20);  // 20

person.age = 30;
// 30으로 변화 X -> person의 age값에는 객체접근 방식으로 접근이 불가능하다 
// getAge함수와 setAge함수를 통해서만 age라는 값에 접근할 수 있게 된것임

person.getAge()  // 20


/**
1)은 함수안의 공간이고, 이 공간에 접근하기 위해서는 함수안의 또다른 함수인 getAge, setAge함수를 통해서만 접근할 수 있다 
 */