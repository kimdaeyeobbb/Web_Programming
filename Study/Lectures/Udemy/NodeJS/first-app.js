/* 모듈 시스템을 활용한 파일 생성 */
const fs = require("fs");
fs.writeFileSync("hello.txt", "Hello Node.js!"); // 파일 경로, 파일 내용
