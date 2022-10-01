// void, never

/* javascript */
function sayHello() {
  console.log("hello"); // 콘솔만찍고 아무것도 반환하지 않음
}

/* typescript */
// void -> 함수에서 아무것도 반환하지 않을 때 사용
function sayHello(): void {
  console.log("hello");
}

/* js */
function showError() {
  throw new Error(); // 항상 에러를 반환
}

function infLoop() {
  // 영원히 끝나지 않는 함수
  while (true) {
    // do forever
  }
}

/* ts */
function showError(): never {
  throw new Error(); // 항상 에러를 반환
}

function infLoop(): never {
  // 영원히 끝나지 않는 함수
  while (true) {
    // do forever
  }
}
