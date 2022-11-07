const main = document.querySelector('.artcl_main');
const userTask = main.querySelector('header input');
const addBtn = main.querySelector('header button');
const listTodo = main.querySelector('.list_todo');


/* 할일 추가하는 등록 버튼 이벤트*/
addBtn.addEventListener('click', createListItem);   // 클릭시 createListItem 함수를 실행


/* 경고 메시지 생성 */
const message = document.createElement('strong');
message.style.display = 'none';
message.classList.add('txt_invalid');
main.appendChild(message);
userTask.addEventListener('input', () => {
    message.style.display = 'none';
})


/* 리스트 다운로드 버튼 생성 */
const downloadBtn = document.createElement('button');
downloadBtn.classList.add('btn');   // 버튼
downloadBtn.textContent = '리스트 다운로드'
main.appendChild(downloadBtn);   // article 요소의 자식으로 붙여줌
downloadBtn.addEventListener('click', downloadFile);



/* 투두를 저장할 배열 - 초기화와 조건식을 동시에 사용 */
// 로컬 스토리지에 저장되어있을지도 모르는 테스크를 가져옴
const tasks = JSON.parse(localStorage.getItem('tasklist')) || [];  // 앞이 false이면 뒤의 값을 반환
// 로컬 스트로지 내에 배열이 존재하고 그 배열 안에 객체 여러개가 존재


/* 초기화면에서 저장되어있는 데이터를 가지고 목록을 생성합니다. */
if (tasks.length > 0) {
    tasks.forEach((task) => {
        genItem(task.val, task.checked);
    })
    showDownLoad();
}



function createListItem() {
    const inpVal = userTask.value;

    if (inpVal) {  // value가 있다면
        const tempTask = {   // 할일에 대한 정보를 담고 있는 객체
            val: inpVal,
            checked: false,   // checked: 할일을 쓰고 등록하게 되면 할일을 했는지에 대한 상태값 나타내는 체크 표시
        };

        // 할일 목록에 새로운 할일을 저장합니다.
        tasks.push(tempTask);

        // 목록 요소를 생성함
        genItem(inpVal, false);   // false -> 투두리스트 수행여부를 알려줌 (등록 안했을 경우 투두리스트가 실행되지 않았으므로 초기값이 false)


        buildTasks();

        // 할일 데이터를 local storage에 저장함
        saveTasks();

        // 다운로드 버튼 노출 함수
        showDownLoad();

    } else {   // value가 없다면
        errorMsg('내용을 작성해주세요');   // 에러 메시지 생성
    }
}

/* 목록 요소를 생성 */
function genItem(val, complete) {
    const li = document.createElement('li');
    li.textContent = val;
    listTodo.appendChild(li);

    /* input 입력값 초기화 */
    userTask.value = '';   // input창에 내용을 적고 등록하면 input창을 비우게 만듦

    /* 만약 수행한 일이라면 */
    if (complete) {   // complete가 true이면 투두리스트 실행이 끝났다는 뜻임
        li.classList.add('done');   // done을 해지하면 취소선이 사라짐
    }

    /* 클릭시 이벤트 발생 */
    li.addEventListener('click', () => {
        li.classList.toggle('done');
        // toggle을 쓰는 이유 => li 클릭했을 때마다 li 클래스가 붙었다 떼었다가 함 (취소선을 만들었다가 지웠다가 하는 것)

        buildTasks();  // 할일 데이터의 업데이트 함수
    });

    /* 삭제버튼 만들기 */
    const btn = document.createElement('button');
    btn.innerHTML = '<i class="fa-solid fa-trash"></i>'
    li.appendChild(btn);   // 만든 버튼을 추가시켜줌

    btn.addEventListener('click', () => {
        // 버튼 클릭시 일어나는 일을 서술
        li.remove();   // 버튼 클릭시 li 삭제

        /* 할일 데이터와 업데이트 함수 */
        buildTasks();   // 목록이 지워졌으니까 로컬 스토리지내의 데이터도 수정해야하므로 builTasks 함수 실행시킴

        /* 다운로드 버튼 노출 함수 */
        showDownLoad();
    })
}

/* localStorage에 할일 목록을 저장하는 함수 */
function saveTasks() {
    localStorage.setItem('tasklist', JSON.stringify(tasks));   // 이 함수가 실행될 때마다 task안의 데이터가 로컬스토리지에 설정됨
}


/* 할일 정보를 업데이트 하는 함수입니다. 할 일을 클릭했을 때, 혹은 할 일을 제거했을 때(는 데이터 목록에서 제거해야 함),*/
function buildTasks() {
    tasks.length = 0;   // 업데이트 하기 전에 기존 데이터를 초기화 함
    const curList = listToDo.querySelectorAll('li');

    // 할 일 정보 목록을 가장 최신으로 재생성함
    curList.forEach((el) => {
        const tempTask = {
            val: el.textContent,
            checked: false
        };

        if (el.classList.contains('done')) {   // done 유무를 통해 할일이 이미 끝났는지 여부를 파악
            tempTask.checked = true;   // 데이터 완성
        }

        tasks.push(tempTask);
    })

    saveTasks();
}


/* 다운로드 버튼의 노출을 판단하는 함수 */
function showDownLoad() {
    const curList = listTodo.querySelectorAll('li');   // ul안의 li들 모두를 찾아서 curList에 넣음

    if (curList.length > 0) {
        downloadBtn.style.display = 'block';
    } else {
        downloadBtn.style.display = 'none';   // 리스트가 하나도 없는 경우
    }
}


/* 경고 메시지 활성화 함수 */
function errorMsg(msg) {
    message.style.display = 'block';
    message.textContent = msg;

    /* 사용자 편의성을 위해 input창에 마우스 포커싱 */
    userTask.focus();
}


function downloadFile() {
    let temp = '<나의 할일 목록>\n\n';  // 줄바꿈 2번 적용 (밑에 string 추가하기 위함)

    const curList = listTodo.querySelectorAll('li');
    curList.forEach(() => {
        if (el.classList.contains('done')) {
            temp += '완료 - ';
        }
        temp += `${el.textContent}\n`;
    })

    let element = document.createElement('a');

    // data URIs => https://developer.mozilla.org/ko/docs/Web/HTTP/Basics_of_HTTP/Data_URLs
    // 작은 파일을 문서에 임베디드할 수 있게 해줌
    element.setAttribute('href', `data: text/plain; charset=utf-8, ${temp}`)   // 속성 설정. plain한 text를 data로 전달

    element.setAttribute('download', 'todolist.txt');   // download 속성에 값을 설정하면 다운로드 받을 수 있는 파일명이 지정됨


    // click => https://developer.mozilla.org/ko/docs/Web/API/HTMLElement/click
    // 클릭 가능한 요소라면 클릭을 시뮬레이션합니다
    element.click();

    /* 메모리상에서 a 태그를 제거 (제거를 하지않으면 계속 남아있음) */
    element = null;
}