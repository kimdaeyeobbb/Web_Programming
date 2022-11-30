// 여기에는 자스민 코드가 들어감

describe('텍스트 매니저 테스트입니다.', () => {
    // 콜백함수
    const textManager = new textManager();

    // it - 유닛테스트시 사용
    it('텍스트 값을 전달합니다.', () => {
        const initValue = textManager.getValue();

        // 실행함수의 기대값을 넣어줌  & toBe(initValue)와 비교
        expect(textManager.getValue()).toBe(initValue);
    })

    // 텍스트 매니저에서 값을 수정
    it('텍스트 값을 수정합니다.', () => {
        const testValue = { data: "Hello Tigers!" }
        textManager.setValue(testValue);

        expect(textManager.getValue()).toBe(testValue.data);
    })
})