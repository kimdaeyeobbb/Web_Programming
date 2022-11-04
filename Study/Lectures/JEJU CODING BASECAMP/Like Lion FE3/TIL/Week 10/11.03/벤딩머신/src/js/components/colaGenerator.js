// 콜라 생산해내는 클래스
// 콜라를 생성해서 붙여넣는 역할

class ColaGenerator {
    // 클래스를 통해 자동으로 인스턴스를 만들 때 constructor가 실행됨
    // constructor에 메서드를 넣으면 메모리가 낭비됨. (밖에 빼면 프로토타입에 등록하는것과 동일함)
    constructor() {
        this.itemList = document.querySelector('.list-item');
    }

    /* 내부 메서드를 실행시키는 함수 */
    // await 사용을 위해서 async를 붙여줌
    async setup() {
        /* 기다릴 수 있도록 앞에 await를 붙임 */
        await this.loadData((json) => {   // 콜백함수 실행시킴 
            this.colaFactory(json);   // 콜백함수가 하는일 -> this.colaFactory()함수를 실행시킴
        });
    }

    /* 옛날방식 - AJAX 사용해서 데이터 불러옴*/
    // loadData(callback) {  // 콜백함수를 인자로 전달받음
    //     // AJAX - Asynchronous Javascript And XML
    //     // XMLHttpRequest() - 초기방법의 AJAX 사용
    //     // JSON - JavaScript Object Notation. 자바스크립트 객체로 만들어짐. JSON이 자바스크립트와 매우 잘맞음. 
    //     // XML XML 파일을 서버와 비동기적으로 주고받기위해 등장한게 Ajax인거고 그렇다고 XML만 오갈수 있는게 아니라 JSON같은 다른 파일 포멧도 가능한거고
    //     // XMLHttpRequest 생성자가 Ajax 통신을 할 때 필요한 인스턴스를 제공해주고 그 인스턴스를 활용해서 통신하는게 Ajax. fetch는 그 후 등장
    //     const requestObj = new XMLHttpRequest();   // XMLHttpRequest함수를 통해 전달받는 인자값. 이 함수가 실행되면 서버와 통신하기 위한 통신용 객체가 requestObj에 저장됨
    //     requestObj.open('GET', 'src/js/item.json')  // 서버로 요청을 오픈. 서버와의 연결라인을 엶. 요청 시작 + 추가필기 다시 메모
    //     requestObj.onreadystatechange = () => { // 통신객체에서 사용할 수 있는 이벤트 리스너 (onreadystatechange) -> 요청의 변화가 있을 때 콜백함수를 실행시킴 -> 뒤에 콜백함수를 작성할 것 
    //         /* 상태값 체크 */
    //         if (requestObj.readyState === 4 && requestObj.status === 200) {   // 프로퍼티인 readyState가 4라면 (요청이 끝났음을 의미함) && status가 200 => 클라이언트로부터의 요청을 보낼때 요청과정에서 아무 문제가 없었음을 의미
    //             //readystate - 서버로부터 클라이언트가 요청한 요청이 어떤 과정에 있습니다~라는 걸 알려줌. 클라이언트가 서버로 요청을 보내면 몇단계에 걸쳐서 그 요청을 처리함. 요청을 처리하는 절차 중 어떤 처리상태에 있는지를 알려줌
    //             // status - 요청을 처리하는 과정에 어떤일이 발생했다!라는 걸 알려줌
    //             callback(JSON.parse(requestObj.responseText));  // 콜백함수에서 데이터를 처리
    //         }
    //     }
    //     requestObj.send(null);  // 잘 받았다고, 서버에 다시 전송해줌. 잘 받고나서 따로 전달해줄 데이터가 없으므로 null을 넣고 보내버리는 것 
    // }

    /* 최근방식 - fetch& async,await 사용해서 데이터 불러옴 */
    // fetch함수 => 비동기로 API를 받아옴. 데이터를 프로미스 객체에 저장함. fetch는 기본적으로 데이터를 2번 호출함 (1. 데이터를 받아올 때, 2. 받아온 데이터를 ~)
    async loadData(callback) {
        // async 함수 안에서만 await를 사용할 수 있음
        const response = await fetch('src/js/item.json');

        /* 요청사항을 잘 받아왔는지 확인하는 절차 */
        if (response.ok) {
            // ok => 200 (응답성공여부)  . http 프로토콜로 받는 상태의 코드가 200~299일 경우를 뜻함 (이때가 true)
            // http 200~299일 경우: ~~
            callback(await response.json());   // 응답 본문을 읽으면서 객체형태로 파싱함
        } else {
            alert('통신 에러!' + response.status);
        }
    }

    /* 콜라 팩토리 함수 최적화 - Fragment 이용 */

    colaFactory(data) {   // colaFactory가 콜백함수가 될것임
        const docFrag = document.createDocumentFragment(); // 콜라팩토리 함수 최적화
        data.forEach((el) => {
            // 데이터를 순환하면서 데이터를 자바스크립트 객체로 바꿈 (json내 배열로 받았으므로 foreach문으로 돌릴 수 있음)
            // foreach 문이 계속 실행되면서 생성하고 붙이는 과정을 반복하므로 비효율적
            const item = document.createElement('li');
            const itemTemplate = `
            <button type="button" class="btn-item" data-item="${el.name}" data-count="${el.count}" data-price="${el.cost}" data-img="${el.img}">
                <img src="./src/images/${el.img}" alt="" class="img-item"/>
                <strong class="tit-item">${el.name}</strong>
                <span class="txt-price">${el.cost}원</span>
            </button>
            `;
            item.innerHTML = itemTemplate;
            // this.itemList.appendChild(item);   // 만들어진 li를 ul에 붙임 -> 비효율적이므로 다음줄처럼 수정
            docFrag.appendChild(item);   // 콜라팩토리 함수 최적화
        });
        this.itemList.appendChild(docFrag);   // 콜라팩토리 함수 최적화
    }

}




export default ColaGenerator;
// export => 이 클래스를 밖으로 빼겠다는 의미. 빼야할 것이 하나이면 default 사용 (여러개이면 {}를 default대신 써서 내부에 빼줄 프로퍼티를 나열하기)
// index.js에서 import
// 참고자료: https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/export