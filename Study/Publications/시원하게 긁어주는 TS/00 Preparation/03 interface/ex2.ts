// 인터페이스로 함수 정의
interface Add {
  (num1: number, num2: number): number;
  // 인자값과 리턴값 (콘솔창에 찍어주기만하면 리턴값이 없으므로 number 대신 void타입으로 설정)
}

// const add: Add = function () {};  //error

const add: Add = function (x, y) {
  return x + y;
};

add(10, 20);
add(10, 20, 30); // error
add(10, "20"); // error

interface IsAdult {
  (age: number): boolean;
}

const agecounting: IsAdult = (age) => {
  return age > 19; // 19보다 크면 true, 아니면 false
};

agecounting(29);
