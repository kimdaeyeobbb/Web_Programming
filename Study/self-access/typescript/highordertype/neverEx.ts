// JS에서 값을 반환할 수 없는 경우 - 1. error 던짐
function error(message: string): never {
  throw new Error(message);
  // 값을 반환하는 것이 아님
}

error("임시 에러메시지 ㅎㅋ");

// JS에서 값을 반환할 수 없는 경우 - 2. 무한루프
