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
