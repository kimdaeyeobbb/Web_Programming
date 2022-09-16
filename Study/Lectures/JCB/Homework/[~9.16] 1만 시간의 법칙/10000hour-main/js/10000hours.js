// 각각을 querySelector로 가져온 다음
const startButton = document.querySelector('.start_btn');
const result = document.querySelector('.result'); // 버튼은 아니지만 요소를 추가하거나, 다시 display가 되게 하는 기능을 수행하는 요소
const modal = document.querySelector('#modal'); // 버튼은 아니지만 요소를 추가하거나, 다시 display가 되게 하는 기능을 수행하는 요소
const openButton = document.querySelector('.modal_btn');
const closeButton = document.querySelector('.close_btn');
const shareButton = document.querySelector('.share_btn');
const loading = document.querySelector('.result_loading'); // 버튼은 아니지만 요소를 추가하거나, 다시 display가 되게 하는 기능을 수행하는 요소

// 각각 클릭했을 때의 함수를 정의
function calculator() {
  const fieldValue = document.querySelector('#field_value'); // ~전문가
  let timeValue = document.querySelector('#time_value'); // ~전문가가 되기 위해 훈련하는 시간
  let timeValue_int = Number(timeValue.value); // Number- 수치로 입력하게 하기 위함

  const fieldResult = document.querySelector('.field_result');
  const timeResult = document.querySelector('.time_result');

  if (fieldValue.value == '') {
    // 값이 비어있는 경우
    alert('입력되지 않았습니다.');
    fieldValue.focus(); // 입력되지 않은 창을 바로 알게 하기 위함
    return false;
  } else if (timeValue.value == '') {
    // 값이 비어 있는 경우
    alert('입력되지 않았습니다.');
    timeValue.focus();
    return false;
  } else if (timeValue_int > 24) {
    // 하루 24시간 이상 공부할 수는 없으므로
    alert('잘못된 값입니다. 24이하의 값을 입력해 주세요.');
    return false;
  }
  // 여기까지 오면 제대로 된 값을 얻어왔다는 것임

  result.style.display = 'none'; // none으로 값 변경
  loading.style.display = 'flex'; //

  setTimeout(function () {
    // loading과 result값 변경
    loading.style.display = 'none';
    result.style.display = 'flex';
    fieldResult.innerText = fieldValue.value;
    timeResult.innerText = parseInt(10000 / timeValue_int, 10); // 소수점 자리는 빼고 나눈값을 10진수로 표현
  }, 1800); // 1.8초 뒤에 실행
}

function openModal() {
  // 모달창을 연 경우
  modal.style.display = 'flex';
}

function closeModal() {
  modal.style.display = 'none';
}

window.onclick = function (event) {
  // '훈련하러 가기 GO!GO!' 말고 외부 영역 클릭시
  // 바깥 창을 클릭했을 때에도
  if (event.target == modal) {
    // 윈도우를 클릭했을 때 (모달 클릭했을 때가 아님)
    closeModal(); // 모달이 닫히게 만듦
  }
};

function copyUrl() {
  let url = window.location.href;
  let tmp = document.createElement('input'); // tmp값을 가상의 element로 하나 만듦

  document.body.appendChild(tmp); // tmp를 body에 추가
  tmp.value = url; // body의 url에 value 복사 후
  tmp.select(); // 그걸 선택 해서
  document.execCommand('copy'); // 복사한 다음
  document.body.removeChild(tmp); // 제거

  alert('URL이 복사되었습니다');
}

/* clip */
function copyUrl() {
  const url = window.location.href;

  navigator.clipboard.writeText(url).then(() => {
    alert('URL이 복사되었습니다.');
  });
}

// 각각의 querySelector를 가져온 다음
// 클릭했을때의 이벤트를 밑에 등록해줌
shareButton.addEventListener('click', copyUrl); // copyUrl 함수를 실행시켜라는 것
openButton.addEventListener('click', openModal);
closeButton.addEventListener('click', closeModal); // close 버튼 클릭시 closeModal 함수로 연결
startButton.addEventListener('click', calculator);
