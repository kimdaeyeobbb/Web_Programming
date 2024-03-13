function ex1<T> (input: T) {
    return input;
}

console.log(ex1<string>('회원가입'));
console.log(ex1<number>(12))
