const me = {
    name: 'danny',
    address: '한양',
    phoneNum: '010-1234-5678',
    canWalk: function () {
        console.log('danny가 걷는다.');
    },
    teaching: function (student) {   // 티칭 메서드
        student.levelUp();
    }
}


const student = {
    level: 1,   // 레벨이라는 프로퍼티를 가짐
    levelUp: function () {   // 레벨업이라는 상태를 가
        this.level++;   // 메서드 안의 this는 자기자신을 가리킴. 자기 자신을 호출
    }
}


me.teaching(student);  // 티칭 메서드를 실행시킴  => student의 레벨을 업
console.log(student)   // 레벨이 2가 됨

me.teaching(student)   // student 레벨업
console.log(student)   // 레벨이 3이 됨

console.log(student.level)