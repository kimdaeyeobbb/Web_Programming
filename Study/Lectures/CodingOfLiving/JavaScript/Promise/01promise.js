/* filter */
import App from './../../react/my-app/src/App';
words = ['a', 'b', 'c', 'd', 'e', 'f'];

function callback(el) {
    console.log(el)
}

words.filter(callback);



/* 익명함수를 callback함수로 사용 */
words2 = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present']

let newWords2 = words2.filter(el => el.length > 6)

console.log(newWords2)