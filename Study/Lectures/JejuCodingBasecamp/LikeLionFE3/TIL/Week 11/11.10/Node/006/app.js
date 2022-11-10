const path = require('path');   // 예전방식

// import path from 'path';
// path는 node설치될 떄 기본적으로 같이 설치됨

// 공식문서 링크: https://nodejs.org/dist/latest-v16.x/docs/api/path.html

console.log(`구분자: ${path.sep}`);
// 구분자는 OS마다 다르기 때문에 폴더나 파일 경로를 사용할 때 path.sep를 사용해주어야 함
// 역슬러쉬(\)가 구분자임


console.log(path)
console.dir(path)

// let filename = 'C:\Users\kimdy\Desktop\DY\Git\Web_Programming\Study\Lectures\JejuCodingBasecamp\LikeLionFE3\TIL\Week 11\11.10\Node\006\app.js'
// console.log(`디렉토리 : ${path.dirname(filename)}`)
// console.log(`파일이름 : ${path.basename(filename)}`);
// console.log(`확장자 : ${path.extname(filename)}`);

console.log(`디렉토리 : ${path.dirname(__filename)}`);
console.log(`파일이름 : ${path.basename(__filename)}`);
console.log(`확장자 : ${path.extname(__filename)}`);


console.log(__filename);
console.log(__dirname);
console.table(path.parse(__filename));
console.log(path.join(__dirname, 'source')); // 사용하세요.
console.log(path.join(__dirname, 'app.js'));
// console.log(__dirname+'/node'); // 사용하지 마세요.