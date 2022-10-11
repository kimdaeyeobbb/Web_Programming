/* 객체를 사용해서 의도대로 값이 들어가게끔 만들자 */
/* 가독성이 떨어짐 */
function func4(회원등급, 글쓰기, 글읽기, 채널관리, 백업, 소셜로그인여부) {   // 회원 등급 권한
    console.log('함수기능')
    return
}


func4('Gold', true, true, true, '대화방 전체 백업 가능', true)
// 이 true가 뭔지를 모르기 때문에 해당 파일로 이동해서 무엇인지를 직접 확인해야 함 -> 불편

/* 객체로 선언시 위의 문제점을 해결할 수 있음 */
// 가독성이 좋아짐
function func5({
    회원등급: 'Silver',
    글쓰기: false,
    글읽기: false,
    채널관리: false,
    백업: '불가',
    소셜로그인여부: true 
    }) {   // 회원 등급 권한
    console.log('함수기능')
    console.log(회원등급, 글쓰기, 글읽기, 채널관리, 백업, 소셜로그인여부)
    return
}

func5({
    회원등급: 'Gold',
    글쓰기: true,
    글읽기: true,
    채널관리: false,
    백업: '부분가능',
    소셜로그인여부: true
})