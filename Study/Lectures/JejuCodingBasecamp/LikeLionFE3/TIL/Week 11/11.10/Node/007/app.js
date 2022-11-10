// 공식문서 링크  : https://nodejs.org/dist/latest-v16.x/docs/api/fs.html
const fs = require('fs');

// reanme, readFile, writeFile,, appendFile, copyFile, mkdir

// 1
let 변수 = '이호준' // 사용자이름
let 날짜 = new Date()
fs.rename('./test.txt', `./${변수}${날짜.getMilliseconds()}.txt`, (err) => {
    console.log(err)   // 에러나는것을 에러처리한다는 것
})


// 2
fs.readFile('./test.txt', 'utf8', (err, data) => {
    console.log(err)
    console.log(data)
})