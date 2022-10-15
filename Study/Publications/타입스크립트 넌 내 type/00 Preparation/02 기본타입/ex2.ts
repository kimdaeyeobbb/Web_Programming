let age: number = 30;
let isStudent: boolean = true;

// Array
let numarr1: number[] = [1, 2, 3];
let numarr2: Array<number> = [1, 2, 3];
let strarr1: string[] = ["가", "나", "다"];
let strarr2: Array<string> = ["가", "나", "다"];

strarr1.push(7); // error (문자열 배열에 숫자를 추가하려고 하므로)

// tuple
let tup1: [string, number]; // 인덱스별로 타입이 다를 때 사용 (배열의 첫번쨰 요소는 string, 두번째 요소로 number를 사용)
tup1 = ["가", 1]; // 여기서 tolowercase는 첫번째 요소에만 사용이 가능하게 됨
tup2 = [2, "나"]; // error

tup1[0].toLowerCase(); // 여기서 tolowercase는 첫번째 요소에만 사용이 가능하게 됨
tup1[1].toLowerCase(); // error number에는 toLowerCase 적용 불가
