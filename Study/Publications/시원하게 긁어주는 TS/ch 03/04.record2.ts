// Record<K,T>

interface User {
  id: number;
  name: string;
  age: number;
}

/* 적절한 값이 입력되었는지를 체크하는 함수 */
// Record의 key는 id, name, age이다. -> 얘네는 User의 key이다. -> keyof User를 사용
// result 객체 내 value들은 모두 boolean 타입이므로 Record의 타입또한 boolean으로 설정
function isValid(user: User) {
  const resultK: Record<keyof User, boolean> = {
    id: user.id > 0, // 아이디가 0보다 큰지
    name: user.name !== "", // 이름이 공백이 아닌지
    age: user.age > 0, // 나이가 0보다 큰지
  };
  return result;
}
