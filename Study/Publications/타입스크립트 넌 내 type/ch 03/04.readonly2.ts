// Readonly<T>
// Readonly<Type>
// 읽기 전용으로 바꿈

interface User {
  id: number;
  name: string;
  age?: number;
}

/* Readonly<T>로 만들기 전 */
// /* 값을 할당 */
// let admin: User = {
//     id: 1;
//     name: "Danny"
// }

// /* 값을 변경 */
// admin.id = 4;


/* Readonly<T> 설정 했으므로*/
/* 값을 할당하는것만 가능하고 */
let admin: Readonly<User> = {
    id: 1;
    name: "Danny"
}

/* 값을 변경하는것이 불가능해짐 */
admin.id = 4;   // error