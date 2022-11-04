// 벤딩머신의 실질적인 기능들을 넣어줌
class VendingMachine {
    constructor() {
        // 모든것을 document.queryselector로 타고들어가면 성능 문제가 발생함
        /* 프로퍼티로 만드는 부분 */
        const vMachine = document.querySelector('.vending-machine')
        this.balance = vMachine.querySelector('.txt-balance')
        this.itemList = vMachine.querySelector('.list-item')
        this.inputCostEl = vMachine.querySelector('.inp-put')   // 프로퍼티로 사용할 것이므로 this붙임
        this.btnPut = vMachine.querySelector('.btn-put')// 입금버튼 
        this.btnReturn = vMachine.querySelector('.btn-return');   // 반환버튼\
        this.btnGet = vMachine.querySelector('.btn-get')
        this.stagedList = vMachine.querySelector('.list-item-staged')

        const myinfo = document.querySelector('.my-info')
        /* myInfo에서 필요한 것 가져오기 */
        this.myMoney = myinfo.querySelector('.txt-mymoney')
        this.gotList = myinfo.querySelector('.list-item-staged')   // 시작점이 다르므로 동일한 클래스명을 찾아도 획득하는 대상은 다름
        this.txtTotal = myinfo.querySelector('.txt-total')
    }

    setup() {
        this.bindEvents();    // 바인드이벤트 실행시킴
    }

    /* 선택한 음료수 목록 생성 */
    stagedItemGenerator(target) {
        // target -> 선택한 음료수 버튼
        const stagedItem = document.createElement('li');
        stagedItem.dataset.item = target.dataset.item;
    }

    /* 이벤트와 관련된 함수들을 모아서 작성 */
    bindEvents() {
        /* 기능 명세 작성 */
        // 1.입금버튼
        // 입금액을 입력하고 입금 버튼을 누르면 소지금 == 소지금-입금액 계산, 잔액 == 기존 잔액+입금액이 됨
        // 입금액이 소지금보다 많다면 실행을 중단하고 "소지금이 부족합니다."라고 쓰인 경고창을 띄움
        // 입금액 인풋창은 초기화 됨

        // 함수를 따로 만들어서 이벤트리스너안에서 사용할 거면 바인드 이벤트안에 함수를 따로 만들어야 하나요? => bindEvent 밖에서 만들고 호출하는 방식으로 사용하세요 
        // addEvent함수내에서 this는 ~타겟임. 화살표함수로 가리키면 상위 공간을 가리킴. 따라서 인스턴스가 잡힘.
        this.btnPut.addEventListener('click', (event) => { // 입금버튼- 콜백함수 작성 & 이벤트 객체 받아옴
            const inputCost = parseInt(this.inputCostEl.value);    // 향후 연산을 위해 정수화
            const myMoneyVal = parseInt(this.myMoney.textContent.replaceAll(',', ''))   // replace를 쓰면 처음의 ,만 제거하므로 replaceAll로 사용할 것
            // text로 접근을 하게 되면 소지금 내에 쉼표를 만나게됨. 쉼표를 제거하기 위해 replace이용 
            // textContent -> myMonye 내에 존재하는 텍스트 노드에 접근하게 만들어주는 프로퍼티 (요소 노드의 텍스트 노드를 보는 것)
            // parseInt를 사용해서 '원'을 제거

            const balanceVal = parseInt(this.balance.textContent.replaceAll(',', ''))   // '잔액' -> 현재 내가 가지고 있는 잔액

            /* 예외처리 - 값을 입력한 상황에서만 작동하도록 만듦 */
            // 클릭이벤트가 작동하기 위해 입금액이 있는지 여부를 먼저 파악해야 함
            if (inputCost) {
                // 입금액이 소지금보다 적다면  & 음수가 아닌 경우만 
                if (inputCost <= myMoneyVal && inputCost > 0) {
                    this.myMoney.textContent = new Intl.NumberFormat().format(myMoneyVal - inputCost) + ' 원';
                    // 입금액 입력 후 차감 =>  나의 소지금액-입금액
                    // js에 Intl이라는 객체가 얼마전에 생김. 작성한 코드가 텍스트로 정보 표시할 때 나라에 맞게끔 설정 (Internalization 객체)

                    /* 입금액이 있는지 없는지 모르니까 삼항연산자로 판단 */
                    this.balance.textContent = new Intl.NumberFormat().format((balanceVal ? balanceVal : 0) + inputCost) + ' 원';// balanceVal이 0이상인지 판단(있으면 그대로사용, 없으면 0) + 입금액
                } else {   // 입금액이 소지금보다 많다면
                    alert("소지금이 부족합니다.")
                }
                this.inputCostEl.value = null;  // 입금액 인풋창 초기화
            }
        })

        /* 2. 거스름돈 반환 버튼 기능
        반환 버튼을 누르면 소지금 == 소지금+잔액이 됩니다
        반환 버튼을 누르면 잔액 창은 초기화됨
        */

        this.btnReturn.addEventListener('click', (event) => {
            const balanceVal = parseInt(this.balance.textContent.replaceAll(',', ''));
            const myMoney = parseInt(this.myMoney.textContent.replaceAll(',', ''));

            if (balanceVal) { // 거스름돈 반환버튼은 안에 값이 있을 때에만 작동해야 하므로 (balanceVal이 true일때만 작동)
                this.myMoney.textContent = new Intl.NumberFormat().format(balanceVal + myMoney) + ' 원';  // '원'도 스크린리더로 읽어야함. 가상요소를 사용하지 말것 (스크린리더가 가상요소를 읽지않는 경우가 존재)
                this.balance.textContent = '원' // 거스름돈 반환
            }
        })

        /* 
         * 3. 자판기 메뉴 기능
         * 아이템을 누르면 잔액 == 잔액 - 아이템 가격이 됩니다.
         * 아이템 가격보다 잔액이 적다면 "잔액이 부족합니다. 돈을 입금해주세요" 경고창이 나타납니다.
         * 아이템이 획득가능 창에 등록됩니다.
         * 아이템 버튼의 data-count 값이 -1 됩니다.
         * 만약 data-count 값이 0 이라면 부모 li에 sold-out 클래스를 붙여줍니다.
        */

        // 이벤트 위임의 치명적 단점 - 접근성 충족을 시키지 못함. 해당하는 요소의 이벤트 리스너를 연결시키는것이 아니라 부모에게 주고 이벤트 전파과정을 통해 자식에게 접근하면서 작업
        const btnsCola = this.itemList.querySelectorAll('button');
        console.log(btnsCola)
        btnsCola.forEach((item) => {
            item.addEventListener('click', (event) => {
                // console.log(event.currentTarget);   // 이벤트가 잘 일어나는지 확인
                const tartgetEl = event.currentTarget;
                const balanceVal = parseInt(this.balance.textContent.replaceAll(',', ''));
                let isStaged = false;  // 이미 선택되었는가에 대한 상태 저장 -> 콜라선택시 해당 콜라가 선택이 되었는지를 확인해야 함
                const tartgetElPrice = parseInt(tartgetEl.dataset.price);   // 콜라의 가격이 targetEl의 price에 저장됨
                const stagedListItem = this.stagedList.querySelectorAll('li')   // 목록을 가져와서 클릭한것과 비교해야 함

                // 입금한 금액
                if (balanceVal >= tartgetElPrice) {  //  잔액이 충분한 케이스
                    this.balance.textContent = new Intl.NumberFormat().format(balanceVal - tartgetElPrice) + ' 원';

                    if (!isStaged) {
                        this.stagedItemGenerator
                    }
                } else {   // 잔액이 부족한 케이스
                    alert("잔액이 부족합니다. 돈을 입금해주세요")
                }
            })
        })



    }
}

export default VendingMachine;  // 밖으로 빼내기 위한 작업. 이것 하나만 빼낼 것이므로 default 사용