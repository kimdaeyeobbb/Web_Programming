describe("클릭 이벤트 및 뷰를 담당하는 클래스입니다.", () => {
    // it 함수 : 함수의 테스트 유닛입니다. 첫번째 인자로 함수의 설명, 두 번째 인자로 테스트할 함수를 전달합니다.
    it("viewManager의 인자로 textManager의 인스턴스가 전달되는지 확인합니다.", () => {
        // viewManger을 예외처리를 하고있었는데, 예외처리가 제대로 동작하고 있는지 테스트 하기 위한 과정
        const textManager = null;  // 일부러  new TextManager()처럼 생성자 함수 대신 null값을 넣음.
        // 일부러 실패를 시키고 에러가 제대로 발생하는지를 확인
        const btnEl = document.createElement("button");
        const viewerEl = document.createElement("h2");
        const inpTxt = document.createElement("input");

        const actual = () =>
            new ViewManager(testManager, { btnEl, viewerEl, inpTxt });

        // expect : 기대식.. 실행할 함수의 결과값을 인자로 전달합니다.
        // toBe 함수 : 매치 함수입니다. 내가 기대한 결과가 일치하는지 판단하는 함수
        expect(actual).toThrowError(); // 에러가 발생되었는지를 확인
    });

    it("viewManager의 인자로 HTML 요소들이 잘 전달되는지 확인합니다.", () => {
        // 이번에는 TextManager를 제대로 넣었음
        const textManager = new TextManager();  // 인스턴스를 제대로 생성

        /* 나머지를 일부러 null을 넣음. 일부러 실패해서 예외처리가 제대로 되는지 호가인하기 위한 것 */
        const btnEl = document.createElement('button');
        const viewerEl = document.createElement('h2');
        const inpTxt = document.createElement('input');

        const actual = () => new ViewManager(textManager, { btnEl, viewerEl, inpTxt });

        expect(actual).toThrowError();
    })


    /* 초기화 */
    const textManager = new TextManager(),
        btnEl = document.createElement('button'),
        viewerEl = document.createElement('h2'),
        inpTxt = document.createElement('input'),
        viewManager = new ViewManager(textManager, { btnEl, viewerEl, inpTxt });

    it("click 이벤트가 발생했을 경우 changeValue 함수가 실행되는지 확인합니다.", () => {
        spyOn(viewManager, "changeValue");

        // spyOn: 특정 객체의 메서드를 감시함
        // changeValue가 실행이 되는지 되지 않는지를 감시

        /* 버튼이 눌렸을떄 실행시킬 함수를 구현 */
        btnEl.click();

        // toHaveBeenCalled: 함수가 과거에 호출한적이 있는지를 확인함.
        // viewManager의 changeValue가 불려졌는지를 기대함
        expect(viewManager, changeValue).toHaveBeenCalled();
    });

    it('changeValue 함수를 통해 updateView 함수가 호출되는지 확인합니다.', () => {
        spyOn(viewManager, 'updateView');
        viewManager.changeValue();
        expect(viewManager.updateView).toHaveBeenCalled();
    })
}

)