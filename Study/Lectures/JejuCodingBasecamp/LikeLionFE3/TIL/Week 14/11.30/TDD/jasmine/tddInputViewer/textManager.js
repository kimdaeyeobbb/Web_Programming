// 사용자가 입력한 값을 간직하고 있음
class TextManager {
    construtor() {
        this.value = { data: "Hello Lions!" };
        // 문자열로 전달해도되지만, 데이터 전달시 확장성을 고려해야함. 차후 데이터를 추가하기 용이하도록 객체형태로 만들어서 전달한 것
    }

    // getter
    getValue() {
        return this.value.data;
    }

    /* 리액트의 useState를 사용해서 관리해주는것과 유사  */
    setValue(newValue) {  // 새로운 값을 저장함
        this.value = newValue;
    }
}