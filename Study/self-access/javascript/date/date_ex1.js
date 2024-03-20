const date = new Date();
// 인수 전달x -> 현재의 날짜 및 시간이 저장된 Date 객체 반환

console.log(date);
// 2024-03-20T06:23:46.391Z

const Jan01_1970 = new Date(0);
console.log(Jan01_1970);
// 1970-01-01T00:00:00.000Z

const Jan02_1970 = new Date(24 * 3600 * 1000);
console.log(Jan02_1970);
// 1970-01-02T00:00:00.000Z

console.log(Jan02_1970.getTime());
// 86400000
