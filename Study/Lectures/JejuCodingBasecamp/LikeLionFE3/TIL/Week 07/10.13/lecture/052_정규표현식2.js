// 정규표현식 - 3.일반 문자열

/hello/g;


// 4. 시작과 끝
/^hello/g;   // 처음에 나오는 것만 매핑
/hello$/g;   // 끝에 나오는 것만 매핑
/^hello$/g;   // 처음과 끝 모두 다 매핑


// 5. 모든 문자 매핑

/hello/g;
/h.llo/g;
/hello..world/g;


// 6.모든문자 매핑

/h[eae]llo/g;


// 7. 범위지정
/h[a-zA-Z0-9]llo/g;


// 8. 부정
/h[^ae]llo/g;


// 9. 그루핑 규칙
// ?: -> 그룹을 사용하지 않겠다는 것
// ?! -> 그룹을 설정하겠다는 것
// ?= -> 그룹을 설정한 것 중에 world가 있는 것
/(on|ues|rida)/gm; // 그룹 1로 3개 중 매칭되는 패턴 찾음
/(?:on|ues)/gm;
/(on|ues)|(rida)/gm;  // 그룹1(on|ues)과 그룹2(rida)로 각각 매칭되는 패턴 찾음
/.(a|e|o)ll./gm;
/hello (?!world)/gm; // hello 뒤에 world가 오지 않는 것
/hello (?=world)/gm;  // hello 뒤에 world가 오는 것


// 다음 2개의 탐색 결과는 동일
h(e | a | o)llo;
h[eao]llo;


// 확인해보기
("hello hallo hollo").match(/.(a|e|o)ll./g);
("hello hallo hollo hi").match(/.(a|e|o)ll./g);
("hello hallo hello hollo hi").match(/.[eao]ll./g);


// 10. 수량자


// 11. 캐릭터 클래스
// 모든 문자나 숫자 등 자주 사용되는 문자 패턴을 캐릭터 클래스로 구현
/\w{5} /g;
/\w/g;
/\d/gm;  // 숫자
/\D/gm;  // not 숫자
/\s/gm;  // 스페이스
/\S/gm;  // not 스페이스


// 12. 이스케이프 문자
// 앞에 역슬래시를 붙임
/\[.*]/gm;// 대괄호([]) 안에 감싸여진 문자열들을 전부 뽑아내곘다는 것. (.)점은 모든 문자열을 뜻함
/\(.*\) /gm; //소괄호 안에 감싸여진 문자열
/\\.*\//gm; //이미 사용되고 있는 특수문자로 감싸여진 문자열
/ -.* -/gm;  //이스케이프 문자를 사용할 필요가 없는 경우
/\^\^ /gm; //이스케이프 문자가 필요한 경우
/: \) /gm; //이스케이프 문자가 필요한 경우