import path from 'path';
// path는 node를 설치할 때 기본적으로 같이 설치됨
// 공식문서 링크: https://nodejs.org/dist/latest-v16.x/docs/api/path.html

console.log(path)
console.dir(path)

let filename = 'C:/Users/kimdy/Desktop/DY/Git/Web_Programming/Study/Lectures/JejuCodingBasecamp/LikeLionFE3/TIL/Week 11/11.10/Node/006/ex1.js'
// 최신문법을 사용하려면 역슬러쉬를 슬러쉬(/)로 바꿔줘야 사용이 가능함


console.log(`디렉토리 : ${path.dirname(filename)}`)
console.log(`파일이름 : ${path.basename(filename)}`);
console.log(`확장자 : ${path.extname(filename)}`);
console.log(path.join('LikeLionFE3', 'Git', 'ex1.js'))  // LikeLionFE3\Git\ex1.js