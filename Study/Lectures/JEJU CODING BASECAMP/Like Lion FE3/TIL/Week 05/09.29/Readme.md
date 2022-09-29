# 22.09.29

- 사람들이 아코디언을 아코디언이라고 인식하지 않음
- Breadcrumb: 경로명을 명시
- Modal: 모달창은 많이 씀 (새 탭에서, 새 창에서 열리는 것이 아님)
- progress: 마지막에 있는 Animated pipes를 많이 씀

## bootstrap card

- 정말 많이쓰므로 알아둘 것

## bootstrap modal

- 모달코드 부분은 코드상 footer 뒤나 맨 마지막에 위치하도록 함

## bootstrap nav

## 부트스트랩과 함께 사용하는 툴

- [Sweet alert2](https://sweetalert2.github.io/)

## [datepicker](https://jqueryui.com/datepicker/)

- 날짜 선택 위젯

- 백엔드에 어떤 양식으로 저장될 것인지는 백엔드 개발자가 정함
- 단, 전송되는 것은 프론트엔드 개발자가 컨트롤

## [summernote](https://summernote.org/)

- 한국사람이 개발
- 세계에서 가장 많이 사용하던 에디터였음 (지금은 하락세)
- 지금 제대로 작동하지 않는 코드들이 많음

## [underpresentation](https://wunderpresentation.com/create/notion/)

- 돈주고 살만큼 퀄리티 좋음
- nhn에서 개발

## [toast ui editor](http://forward.nhnent.com/hands-on-labs/toastui.editor-ext/05.html)

```js
//setHtml(html): 인자로 전달하는 HTML 텍스트로 에디터의 컨텐츠를 변경합니다.
//getHtml(): 현재 편집중인 컨텐츠를 HTML 텍스트로 받습니다.
// index.js 파일 하단에 아래의 코드를 입력해 확인해 보세요~
editor.setHtml("<h1>HELLO WORLD</h1>");
console.log(editor.getHTML());
```

## 부트스트랩 참고사항

1. bootstrap editor (자동화 툴)
   - https://soshace.com/top-5-free-bootstrap-editors-tools/
   - https://bootstrapstudio.io/ (개발자가 사용하진 않음)
2. 부트스트랩 테마 - theme forest, wrapbootstrap
3. plugin
   - sweetalert2(경고 메시지) -> dist안에 min(js, css)
   - boostrap-datepicker cdn
   - WYSIWYG editor
     - [summernote](https://summernote.org) - 5버전 지원 X
     - [toast ui editor](https://ui.toast.com/tui-editor) 사용하세요.(bootstrap은 아님)
   - bootstrap selector
4. 부트스트랩 외주
   - 모객 : 지인, 회사, (크몽같은 서비스는 부담 - 스스로 단가 책정을 하기 힘들기 때문) (처음에는 지인위주로 시작)
   - 호스팅 비용 산정해야함 (외주금액과는 따로 받아야 함- 외부인들은 외주금액만으로 다 해결된다고 착각함. 트래픽이 얼마가 넘어가면 추가비용을 받을 것) (1년당 5만5천원 따로 받을 것+부가세별도)
   - 계약서 필히 작성 (나중에 문제가 생기는 경우가 꼭 1~2번은 있습니다.) (반드시 유지보수 비용도 포함해야 함) (ex) 메뉴 추가, 시스템 추가 등은 10~20만원 추가 등)
     - 저는 그런적이 없지만 완성이 안되서 생기는 문제
     - 완성 되었으나 기능을 추가해야 해서 생기는 문제
     - 만족을 못해 입금을 안해서 생기는 문제
     - (1억 이상) 완벽하게 완성 되었으나, 손배로 사업적으로 이득을 챙기려 해서 생기는 문제
   - 스택
     1. 부트스트랩 + php + mysql
     2. 부트스트랩 + 워드프레스 (워드프레스는 DIVI 테마와 Pods 플러그인)
     3. 부트스트랩 + Django
     4. 부트스트랩 + Node, express
     5. 워드프레스는 DIVI 테마와 Pods 플러그인
5. (자동화순) bootstrap, tailwindcss, tachyons

## tailwind css

- .css => 용량의 한계가 존재
- .js => 모듈화가 되면서 용량 이슈해결 (.3버전부터)
- 대부분 0.25이나 pixel로 된 경우가 존재
- 개발을 할때에는 보통 mobile을 먼저 신경써서 개발 (구글 애널리틱스를 이용하여 비중을 파악하고 나서 개발)
- ㅁ
