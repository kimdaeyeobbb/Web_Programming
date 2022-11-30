class ViewManager {  // ViewManager는 textManager에 의존함
    constructor(textManager, options) {
        // textManger - 의존주입을 한 상태 
        // textManager클래스의 인스턴스를 textManager 받아옴 => 검증이 필요하므로 아래에서 검증
        // option에 들어가는 것 - 값을 가져와야하는(받아와야 하는) 요소, 값을 뿌려주는 요소

        /* 예외처리 */
        if (textManager.constructor !== TextManager) {
            // textManger의 생성자가 TextManger인지 확인
            // 클래스의 인스턴스를 올바르게 받아왔는지 확인 (해당 클래스의 인스턴스가 맞는지 확인)

            throw Error('textManager 객체를 전달해야합니다!');
            // throw Error - 사용자 정의 에러. 에러 메시지를 반환하고 프로그램을 종료함. 

        }

        if (!options.viewerEl || !options.btnEl || !options.inpEl) {
            // 모든값들이 제대로 들어왔는지 확인
            // options 내에 텍스트를 뿌려줄 요소를 삽입할 것임
            // options.btnEl => 뭘 눌러야 어떤 내용을 뿌려줄지를 테스트 해야 함 => 이 요소도 잘 들어갔는지 학인해야 함         
            // options.inpTxt =>
            // 첫번째 truthy값을 반환
            // 셋중 하나라도 true면 안에 있는 값이 실행됨. 우리는 반대를 원함. 하나라도 false이면 if문을 발동하도록 만듦

            throw Error("필요한 요소중에 빈값이 존재합니다.");
        }

        /* 각각의 값을 선언 및 할당ㄴ */
        this.inpTxt = options.inpTxt;
        this.viewerEl = options.viewerEl;
        this.textManager = textManager;

        // 버튼은 따로 값을 할당할 목적은 아니고, 클릭이벤트를 붙여줌. (아까처럼 html과 js코드를 섞으면 안됨.)
        options.btnEl.addEventListener('click', () => {
            this.changeValue(); // 클릭시 실행. 값을 넣고 실행하면
        })
    }
    changeValue() {
        this.textManager.setValue({ data: this.inpTxt.value })
        // setValue의 newValue값으로 데이터는 inpTxt.value의 값이 들어가게 됨
        // 값을 변경

        this.updateView();  // 변경완료시 updateView 실행
    }

    updateView() {
        this.viewerEl.textContent = this.TextManager.getValue(); //우리가 받아온 값으로 넣어줌  + getValue로 ~
    }
}