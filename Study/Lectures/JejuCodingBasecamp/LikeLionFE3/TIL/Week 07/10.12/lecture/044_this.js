function a() { console.log(this) }
a();  // 함수를 호출해주는 a 가 this
// Window {window: Window, self: Window, document: document, name: '', location: Location, …}

window.a();
// Window {window: Window, self: Window, document: document, name: '', location: Location, …}


function b() {
    console.log('hello world')
}
b()  // hello world
window.b()   // hello world


// window가 test를 호출
let test = {
    one: 1,
    two: 2,
    three: function () {
        console.log(this)
    }
}

//test가 three를 호출
test.three() // {one: 1, two: 2, three: ƒ}


// test2를 실행시킴
let test2 = test.three

//test2가 어디에 등록되어있는지 확인 -> window에 등록
test2() // Window {window: Window, self: Window, document: document, name: '', location: Location, …}