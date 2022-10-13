fetch("http://test.api.weniv.co.kr/mall")
    .then((response) => response.json())
    .then((json) => console.log(json));
// Promise {<pending>}
// (7) [{…}, {…}, {…}, {…}, {…}, {…}, {…}]


// json으로 순회를 돌면서 데이터를 받아옴
fetch("http://test.api.weniv.co.kr/mall")
    .then((response) => response.json())
    .then((json) => {
        for (let item of json) {
            console.log(item)
        }
    });

/*
Promise {<pending>}
VM9009:5 {id: 1, productName: '버그를 Java라 버그잡는 개리씨 키링 개발자키링 금속키링', price: 12500, stockCount: 100, thumbnailImg: 'asset/img/1/thumbnailImg.jpg', …}
VM9009:5 {id: 2, productName: '우당탕탕 라이캣의 실험실 스티커 팩', price: 3500, stockCount: 1000, thumbnailImg: 'asset/img/2/thumbnailImg.jpg', …}
VM9009:5 {id: 3, productName: '딥러닝 개발자 무릎 담요', price: 17500, stockCount: 0, thumbnailImg: 'asset/img/3/thumbnailImg.jpg', …}
VM9009:5 {id: 4, productName: '네 개발잡니다 개발자키링 금속키링', price: 13500, stockCount: 100, thumbnailImg: 'asset/img/4/thumbnailImg.jpg', …}
VM9009:5 {id: 5, productName: 'Hack Your Life 개발자 노트북 파우치', price: 36000, stockCount: 230, thumbnailImg: 'asset/img/5/thumbnailImg.jpg', …}
VM9009:5 {id: 6, productName: '[NEW] 위니브 개발자, 캐릭터 스티커팩 2종', price: 5500, stockCount: 1000, thumbnailImg: 'asset/img/6/thumbnailImg.jpg', …}
VM9009:5 {id: 7, productName: '제주코딩베이스캠프 코딩 연습장 세트', price: 8000, stockCount: 1000, thumbnailImg: 'asset/img/7/thumbnailImg.jpg', …}
*/


/* element 생성하기 */
let 제목 = document.createElement('h2')
제목.innerText = 'hello world'
console.log(제목)  // <h2>hello world</h2>



/* ~을 넘길 때 */
fetch("http://test.api.weniv.co.kr/mall")
    .then((response) => response.json())
    .then((json) => {
        for (let item of json) {
            let 제목 = document.createElement('h2')
            제목.innerText = item.productName
            // document.childNodes[0].childNodes[1].append(제목)
            document.body.append(제목)

            let 사진 = document.createElement('img')
            // 'http://test.api.weniv.co.kr/' + item.thumbnailImg;
            사진.setAttribute('src', 'http://test.api.weniv.co.kr/' + item.thumbnailImg)
            사진.setAttribute('class', '이미지')
            사진.setAttribute('alt', item.productName + ' 상품 이미지')
            document.childNodes[0].childNodes[1].append(사진)

            let 가격 = document.createElement('p')
            가격.innerText = item.price
            document.childNodes[0].childNodes[1].append(가격)
        }
    });
